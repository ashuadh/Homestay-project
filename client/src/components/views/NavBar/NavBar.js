import React, { useState } from "react";
import LeftMenu from "./Sections/LeftMenu";
import RightMenu from "./Sections/RightMenu";
import { Drawer, Button, Icon } from "antd";
import logo from "../../../assets/img/heart and soul.png";
import "./Sections/Navbar.css";

function NavBar() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <nav
      className="menu"
      style={{
        position: "fixed",
        zIndex: 5,
        width: "100%",
      }}
    >
      <div className="menu__logo" style={{ display: "flex" }}>
        <div>
          <img
            style={{
              height: "150px",
              marginLeft: "10px",
              marginRight: "-50px",
            }}
            src={logo}
            alt=""
          />
        </div>
        <div style={{ margin: "auto" }}>
          <h1
            style={{
              color: "white",
              marginBottom: "0",
              width: "20vw",
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >
            Hearts and Souls
          </h1>
        </div>
      </div>
      <div className="menu__container">
        {/* <div className="menu_left">
          <LeftMenu mode="horizontal" />
        </div> */}
        <div className="menu_rigth">
          <RightMenu mode="horizontal" />
        </div>
        <Button
          className="menu__mobile-button"
          type="primary"
          onClick={showDrawer}
        >
          <Icon type="align-right" />
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="right"
          className="menu_drawer"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          {/* <LeftMenu mode="inline" /> */}
          <RightMenu mode="inline" />
        </Drawer>
      </div>
    </nav>
  );
}

export default NavBar;
