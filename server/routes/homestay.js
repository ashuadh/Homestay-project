const express = require("express");
const router = express.Router();
const { Homestay } = require("../models/Homestay");
const multer = require("multer");

const { auth } = require("../middleware/auth");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext !== ".jpg" || ext !== ".png") {
      return cb(res.status(400).end("only jpg, png are allowed"), false);
    }
    cb(null, true);
  },
});

var upload = multer({ storage: storage }).single("file");

//=================================
//             Homestay
//=================================

router.post("/uploadImage", auth, (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.json({ success: false, err });
    }
    return res.json({
      success: true,
      image: res.req.file.path,
      fileName: res.req.file.filename,
    });
  });
});

router.post("/uploadHomestay", auth, (req, res) => {
  //save all the data we got from the client into the DB
  const homestay = new Homestay(req.body);

  homestay.save((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

router.post("/getHomestays", auth, (req, res) => {
  let order = req.body.order ? req.body.order : "desc";
  let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
  let limit = req.body.limit ? parseInt(req.body.limit) : 100;
  let skip = parseInt(req.body.skip);

  let findArgs = {};
  let term = req.body.searchTerm;

  for (let key in req.body.filters) {
    if (req.body.filters[key].length > 0) {
      if (key === "rate") {
        findArgs[key] = {
          $gte: req.body.filters[key][0],
          $lte: req.body.filters[key][1],
        };
      } else {
        findArgs[key] = req.body.filters[key];
      }
    }
  }

  if (term) {
    Homestay.find(findArgs)
      .find({ $text: { $search: term } })
      .populate("host")
      .sort([[sortBy, order]])
      .skip(skip)
      .limit(limit)
      .exec((err, homestays) => {
        if (err) return res.status(400).json({ success: false, err });
        res.status(200).json({
          success: true,
          homestays,
          numHomestaysRetrieved: homestays.length,
        });
      });
  } else {
    Homestay.find(findArgs)
      .populate("host")
      .sort([[sortBy, order]])
      .skip(skip)
      .limit(limit)
      .exec((err, homestays) => {
        if (err) return res.status(400).json({ success: false, err });
        res.status(200).json({
          success: true,
          homestays,
          numHomestaysRetrieved: homestays.length,
        });
      });
  }
});

router.get("/homestays_by_id", (req, res) => {
  let type = req.query.type;
  let homestayIds = req.query.id;

  console.log("req.query.id", req.query.id);

  if (type === "array") {
    let ids = req.query.id.split(",");
    homestayIds = [];
    homestayIds = ids.map((item) => {
      return item;
    });
  }

  console.log("homestayIds", homestayIds);

  Homestay.find({ _id: { $in: homestayIds } })
    .populate("host")
    .exec((err, homestay) => {
      if (err) return res.status(400).send(err);
      return res.status(200).send(homestay);
    });
});

module.exports = router;
