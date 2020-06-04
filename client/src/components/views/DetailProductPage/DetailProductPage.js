import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Row, Col } from "antd";
import HomestayImage from "./Sections/HomestayImage";
import HomestayInfo from "./Sections/HomestayInfo";
import { addToCart } from "../../../_actions/user_actions";
import { useDispatch } from "react-redux";
function DetailHomestayPage(props) {
  const dispatch = useDispatch();
  const homestayId = props.match.params.homestayId;
  const [Homestay, setHomestay] = useState([]);

  useEffect(() => {
    Axios.get(
      `/api/homestay/homestays_by_id?id=${homestayId}&type=single`
    ).then((response) => {
      setHomestay(response.data[0]);
    });
  }, []);

  const addToCartHandler = (homestayId) => {
    dispatch(addToCart(homestayId));
  };

  return (
    <div className="postPage" style={{ width: "100%", padding: "3rem 4rem" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>{Homestay.title}</h1>
      </div>

      <br />

      <Row gutter={[16, 16]}>
        <Col lg={12} xs={24}>
          <HomestayImage detail={Homestay} />
        </Col>
        <Col lg={12} xs={24}>
          <HomestayInfo addToCart={addToCartHandler} detail={Homestay} />
        </Col>
      </Row>
    </div>
  );
}

export default DetailHomestayPage;
