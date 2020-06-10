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
      <Descriptions title="Homestay Info">
        <Descriptions.Item label="Rate/night/guest">
          {" "}
          {Homestay.rate}
        </Descriptions.Item>
        <Descriptions.Item label="Description">
          {" "}
          {Homestay.aboutHomestay}
        </Descriptions.Item>
      </Descriptions>

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
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default HomestayInfo;
