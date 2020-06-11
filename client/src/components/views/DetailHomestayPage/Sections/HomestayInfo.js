import React, { useEffect, useState } from "react";
import { Button, Descriptions } from "antd";

function HomestayInfo(props) {
  const [Homestay, setHomestay] = useState({});

  useEffect(() => {
    setHomestay(props.detail);
  }, [props.detail]);

  const addToCarthandler = () => {
    props.addToCart(props.detail._id);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}> Meet your Host</h1>
      <div style={{ display: "flex", marginBottom: "3vh" }}>
        <div>
          <div
            style={{
              height: "200px",
              width: "200px",
              position: "relative",
              overflow: "hidden",
              borderRadius: "50%",
            }}
          >
            <img
              style={{
                display: "inline-b",
                margin: "0 auto",
                height: "100%",
                width: "auto",
              }}
              src={`http://localhost:5000/${Homestay.hostImages}`}
              alt=""
            />
          </div>
        </div>
        <div style={{ padding: "1.5rem" }}>
          <h2>Name: Ashutosh Adhikari</h2>
          <p>
            About: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Suscipit, maxime adipisci minima fugit nobis accusantium veniam
            ratione nesciunt, dolorem laborum molestiae deserunt vero.
            Perspiciatis id asperiores aliquam odit ipsa eaque provident! Earum
            pariatur quos facilis harum rem nihil et! Rem ab laborum veritatis
            tempora itaque!
          </p>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Descriptions title="Homestay Info">
          <Descriptions.Item label="Rate/night/guest">
            {" "}
            {`${Homestay.rate} \u20b9`}
          </Descriptions.Item>
          <Descriptions.Item label="Description">
            {" "}
            {Homestay.aboutHomestay}
          </Descriptions.Item>
        </Descriptions>
      </div>

      <br />
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          size="large"
          shape="round"
          type="danger"
          onClick={addToCarthandler}
        >
          Book
        </Button>
      </div>
    </div>
  );
}

export default HomestayInfo;
