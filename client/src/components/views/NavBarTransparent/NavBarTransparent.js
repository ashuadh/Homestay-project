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
      className="menuTransparent"
      style={{
        position: "absolute",
        zIndex: 5,
        width: "100%",
        background: "transparent",
      }}
    >
      <div className="menu__logo">
        <span>
          <img
            style={{ height: "300px", marginLeft: "10px" }}
            src={logo}
            alt=""
          />
        </span>
      </div>
      <div className="menu__container_transparent">
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
