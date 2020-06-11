import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Icon, Col, Card, Row } from "antd";
import ImageSlider from "../../utils/ImageSlider";
import CheckBox from "./Sections/CheckBox";
import RadioBox from "./Sections/RadioBox";
import { rate, continents } from "./Sections/Datas";
import SearchFeature from "./Sections/SearchFeature";
import NavBar from "../NavBar/NavBar";

const { Meta } = Card;

function LandingPage() {
  const [Homestays, setHomestays] = useState([]);
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(8);
  const [NumHomestaysRetrieved, setNumHomestaysRetrieved] = useState();
  const [SearchTerms, setSearchTerms] = useState("");

  const [Filters, setFilters] = useState({
    continents: [],
    rate: [],
  });

  const getProducts = (variables) => {
    Axios.post("/api/homestay/getHomestays", variables).then((response) => {
      if (response.data.success) {
        if (variables.loadMore) {
          setHomestays([...Homestays, ...response.data.homestays]);
        } else {
          setHomestays(response.data.homestays);
        }

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
      loadMore: true,
    };
    getProducts(variables);
    setSkip(skip);
  };

  const renderCards = Homestays.map((homestay, index) => {
    return (
      // <Col lg={6} md={8} xs={24}>
      //   <Card
      //     hoverable={true}
      //     cover={
      //       <a href={`/homestay/${homestay._id}`}>
      //         {" "}
      //         <ImageSlider images={homestay.roomImages} />{" "}
      //       </a>
      //     }
      //   >
      //     <Meta title={homestay.title} description={`\u20B9${homestay.rate}`} />
      //   </Card>
      // </Col>

      <Col lg={12} xs={24}>
        <div
          style={{
            height: "20vh",
            display: "flex",
            flexDirection: "row",
            position: "relative",
            margin: "0 1vw 5vh 1vw",
          }}
        >
          <div style={{ width: "40%" }}>
            <a href={`/homestay/${homestay._id}`}>
              {" "}
              <ImageSlider images={homestay.roomImages} />{" "}
            </a>
          </div>
          <div style={{ width: "60%", padding: "1.5rem" }}>
            <Row>
              <Col lg={16} md={24}>
                <h2>{homestay.title}</h2>
              </Col>
              <Col lg={8} md={24}>
                <div>
                  <h2
                    style={{ display: "inline" }}
                  >{`\u20b9${homestay.rate}`}</h2>
                  <h3 style={{ display: "inline" }}> /night/guest</h3>
                </div>
              </Col>
            </Row>
            <p
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                WebkitBoxOrient: "vertical",
                display: "-webkit-box",
                WebkitLineClamp: "3",
              }}
            >
              {homestay.aboutHomestay}
            </p>
            <p>
              <i class="fa fa-map-marker"></i> {homestay.address}
            </p>
          </div>
        </div>
      </Col>
    );
  });

  const showFilteredResults = (filters) => {
    const variables = {
      skip: 0,
      limit: Limit,
      filters: filters,
    };
    getProducts(variables);
    setSkip(0);
  };

  const handleRate = (value) => {
    const data = rate;
    let array = [];

    for (let key in data) {
      if (data[key]._id === parseInt(value, 10)) {
        array = data[key].array;
      }
    }
    return array;
  };

  const handleFilters = (filters, category) => {
    const newFilters = { ...Filters };

    newFilters[category] = filters;

    if (category === "rate") {
      let rateValues = handleRate(filters);
      newFilters[category] = rateValues;
    }

    showFilteredResults(newFilters);
    setFilters(newFilters);
  };

  const updateSearchTerms = (newSearchTerm) => {
    const variables = {
      skip: 0,
      limit: Limit,
      filters: Filters,
      searchTerm: newSearchTerm,
    };

    setSkip(0);
    setSearchTerms(newSearchTerm);

    getProducts(variables);
  };

  return (
    <div>
      <NavBar />
      <div
        style={{
          paddingTop: "150px",
          minHeight: "calc(100vh - 80px)",
          backgroundColor: "#f0f9ff",
        }}
      >
        <div style={{ width: "100%" }}>
          <div
            style={{
              backgroundColor: "#d2d6d9",
              padding: "1vh 2vw",
              marginBottom: "3vh",
            }}
          >
            <Row gutter={[16, 16]}>
              <Col span={6}>
                <h2 style={{ fontSize: "2rem", marginBottom: "0" }}>
                  {" "}
                  Homestays{" "}
                </h2>
              </Col>
              <Col span={4} offset={10}>
                <RadioBox
                  list={rate}
                  handleFilters={(filters) => handleFilters(filters, "rate")}
                />
              </Col>

              <Col span={4}>
                <div style={{ margin: "1rem auto" }}></div>
                <SearchFeature refreshFunction={updateSearchTerms} />
              </Col>
            </Row>

            {/* <Row gutter={[16, 16]}>
              <Col lg={6}>
                <RadioBox
                  list={rate}
                  handleFilters={(filters) => handleFilters(filters, "rate")}
                />
              </Col>
              <Col lg={6}>
                <div style={{ margin: "1rem auto" }}>
                  <SearchFeature refreshFunction={updateSearchTerms} />
                </div>
              </Col>
            </Row> */}
          </div>

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
                height: "300px",
                textAlign: "center",
              }}
            >
              <h2 style={{ paddingTop: "150px" }}>No Homestays yet...</h2>
            </div>
          ) : (
            <div style={{ padding: "1vh 2vw" }}>
              <Row gutter={[0, 0]}>{renderCards}</Row>
            </div>
          )}
          {NumHomestaysRetrieved >= Limit && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#f0f9ff",
              }}
            >
              <button style={{ marginBottom: "3vh" }} onClick={onLoadMore}>
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
