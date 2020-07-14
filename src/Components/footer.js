import React from "react";

import { Layout, Avatar, Menu, Button, Row, Col, Carousel, Icon } from "antd";
import { FacebookOutlined, TwitterOutlined, LinkedinOutlined, InstagramOutlined } from "@ant-design/icons";

import style from "./footer.css";

export default function footer() {
  return (
    <Layout className="footer">
      <img
      
        src="./images/footer.jpg"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: " cover",
          filter: "brightness(50%)",
        }}
      ></img>
      {/* <div className="logo">
        <a href="./home">
          <img style={{ borderRadius: "4px" }} src="./images/logo2.jpeg" />
        </a>
      </div> */}
      <Row>
        <Col span={9}>
          <div className="logo" style={{ marginLeft: "151px" }}>
            <img style={{ borderRadius: "8px" }} src="./images/logo2.jpeg" />
          </div>
        </Col>
        <Col span={5}>
          <h2 className="h2">Contact</h2>
          <ul className="list">
            <li> <a href="#">Delhi </a> </li>
            <li> <a href="#">Telephone: +91 96960 62198 </a> </li>
            <li> <a href="mealobox@gmail.com">E-mail: mealobox@gmail.com</a> </li>
          </ul>
        </Col>
        <Col span={5}>
          <h2 className="h2">Menu</h2>
          <ul className="list">
            <li> <a href="#">About us </a> </li>
            <li> <a href="#">Our Food </a> </li>
            <li> <a href="#">Plans </a> </li>
            <li> <a href="#">Contact us </a> </li>
          </ul>
        </Col>
        <Col span={5}>
          <h2 className="h2">Follow Us</h2>
          <ul className="list2">
            <li> <a href="https://www.facebook.com/dmealobox">
              <FacebookOutlined />
              </a>
            </li>
            <li>  <a href=" https://www.twitter.com/mealobox">
              <TwitterOutlined />
              </a>
            </li>
            <li>  <a href="https://www.linkedin.com/company/mealobox">
              <LinkedinOutlined />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/meal_o_box">
              <InstagramOutlined />
              </a>
            </li>
          </ul>
        </Col>
        <hr
          style={{
            zIndex: "1",
            width: "100%",
            margin: "0px",
            opacity: "0.5",
          }}
        />
        <p
          style={{
            color: "white",
            zIndex: "1",
            fontSize: "15px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {" "}
          &copy; All Right Reserved
        </p>
      </Row>
    </Layout>
  );
}
