import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Icon, Col, Card, Row } from "antd";
import ImageSlider from "../../utils/ImageSlider";
import CheckBox from "./Sections/CheckBox";
import RadioBox from "./Sections/RadioBox";
import { rate, continents } from "./Sections/Datas";
import SearchFeature from "./Sections/SearchFeature";

const { Meta } = Card;

function LandingPage() {
  const [Homestays, setHomestays] = useState([]);
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(8);
  const [NumHomestaysRetrieved, setNumHomestaysRetrieved] = useState();
  // const [SearchTerms, setSearchTerms] = useState("");

  // const [Filters, setFilters] = useState({
  //   continents: [],
  //   rate: [],
  // });
  const getProducts = (variables) => {
    Axios.post("/api/homestay/getHomestays", variables).then((response) => {
      if (response.data.success) {
        setHomestays([...Homestays, ...response.data.homestays]);
        console.log(response.data.homestays);
        setNumHomestaysRetrieved(response.data.numHomestaysRetrieved);
      } else {
        alert("Failed to fetch Homestays");
      }
    });
  };

  useEffect(() => {
    const variables = {
      skip: Skip,
      limit: Limit,
    };

    getProducts(variables);
  }, []);

  const onLoadMore = () => {
    let skip = Skip + Limit;

    const variables = {
      skip: skip,
      limit: Limit,
    };
    getProducts(variables);
    setSkip(skip);
  };

  const renderCards = Homestays.map((homestay, index) => {
    return (
      <Col lg={6} md={8} xs={24}>
        <Card
          hoverable={true}
          cover={
            <a href={`/homestay/${homestay._id}`}>
              {" "}
              <ImageSlider images={homestay.roomImages} />{" "}
            </a>
          }
        >
          <Meta title={homestay.title} description={`\u20B9${homestay.rate}`} />
        </Card>
      </Col>
    );
  });

  // const showFilteredResults = (filters) => {
  //   const variables = {
  //     skip: 0,
  //     limit: Limit,
  //     filters: filters,
  //   };
  //   getProducts(variables);
  //   setSkip(0);
  // };

  // const handlePrice = (value) => {
  //   const data = price;
  //   let array = [];

  //   for (let key in data) {
  //     if (data[key]._id === parseInt(value, 10)) {
  //       array = data[key].array;
  //     }
  //   }
  //   console.log("array", array);
  //   return array;
  // };

  // const handleFilters = (filters, category) => {
  //   const newFilters = { ...Filters };

  //   newFilters[category] = filters;

  //   if (category === "price") {
  //     let priceValues = handlePrice(filters);
  //     newFilters[category] = priceValues;
  //   }

  //   console.log(newFilters);

  //   showFilteredResults(newFilters);
  //   setFilters(newFilters);
  // };

  // const updateSearchTerms = (newSearchTerm) => {
  //   const variables = {
  //     skip: 0,
  //     limit: Limit,
  //     filters: Filters,
  //     searchTerm: newSearchTerm,
  //   };

  //   setSkip(0);
  //   setSearchTerms(newSearchTerm);

  //   getProducts(variables);
  // };

  return (
    <div style={{ width: "75%", margin: "3rem auto" }}>
      <div style={{ textAlign: "center" }}>
        <h2>
          {" "}
          Homestays <Icon type="home" />{" "}
        </h2>
      </div>

      {/* Filter  */}

      {/* <Row gutter={[16, 16]}>
        <Col lg={12} xs={24}>
          <CheckBox
            list={continents}
            handleFilters={(filters) => handleFilters(filters, "continents")}
          />
        </Col>
        <Col lg={12} xs={24}>
          <RadioBox
            list={price}
            handleFilters={(filters) => handleFilters(filters, "price")}
          />
        </Col>
      </Row> */}

      {/* Search  */}
      {/* <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          margin: "1rem auto",
        }}
      >
        <SearchFeature refreshFunction={updateSearchTerms} />
      </div> */}

      {Homestays.length === 0 ? (
        <div
          style={{
            display: "flex",
            height: "300px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>No post yet...</h2>
        </div>
      ) : (
        <div>
          <Row gutter={[16, 16]}>{renderCards}</Row>
        </div>
      )}
      <br />
      <br />
      {NumHomestaysRetrieved >= Limit && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={onLoadMore}>Load More</button>
        </div>
      )}
    </div>
  );
}

export default LandingPage;
