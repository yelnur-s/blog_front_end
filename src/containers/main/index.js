import React from 'react';
import '../../App.css';
import { Row, Col, Menu, Card } from 'antd';
import {FacebookOutlined, TwitterOutlined, GooglePlusOutlined, InstagramOutlined, SearchOutlined, MenuOutlined} from '@ant-design/icons'
import {Link } from "react-router-dom";


const {SubMenu} = Menu

const { Meta } = Card;

function Main() {
  

  return (
    <div>
      <Row className="header">
        <Col span={6} className="header-social">
          <FacebookOutlined />
          <TwitterOutlined />
          <GooglePlusOutlined />
          <InstagramOutlined />
        </Col>
        <Col span={12}>
          <img className="logo" src="/images/logo.png"/>
        </Col>
        <Col span={6} className="header-social">
          <SearchOutlined />
          <MenuOutlined />
        </Col>
      </Row>
      <div className="header-menu">
      <Menu  mode="horizontal">
        <Menu.Item key="1">
            
            <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
        <Link to="/blog/id">Single post</Link>
        </Menu.Item>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
             Pages
            </span>
          }
        >
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="3">
         Category
        </Menu.Item>
        <Menu.Item key="4">
         About
        </Menu.Item>
        <Menu.Item key="5">
         Contact us
        </Menu.Item>
      </Menu>
      </div>

      <div className="bg-img">
          <div className="bg-img--content">
            <p className="bg-img--date">26, July, 2020</p>
            <p className="bg-img--title"> Top 10 films on kinopoisk</p>
          </div>
      </div>

    <div className="container container-inner">
        <Row>
          <Col span={18}>

            <Row>
              <Col span={12}>
                  <Card
                  hoverable
                 className="blog-item"
                  cover={<img alt="example" src="/images/2.jpg" />}
                >
                  <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
              </Col>
              <Col span={12}>
                  <Card
                  hoverable
                 className="blog-item"
                  cover={<img alt="example" src="/images/2.jpg" />}
                >
                  <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
              </Col>
              <Col span={12}>
                  <Card
                  hoverable
                 className="blog-item"
                  cover={<img alt="example" src="/images/2.jpg" />}
                >
                  <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
              </Col>
              <Col span={12}>
                  <Card
                  hoverable
                 className="blog-item"
                  cover={<img alt="example" src="/images/2.jpg" />}
                >
                  <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
              </Col>
              <Col span={12}>
                  <Card
                  hoverable
                 className="blog-item"
                  cover={<img alt="example" src="/images/2.jpg" />}
                >
                  <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
              </Col>
              
            </Row>
           
          </Col>
          <Col span={6}>
          <Card title="About Me"  style={{ width: `100%` }}  cover={<img alt="example" src="/images/3.jpg"/>}>
          <Meta title="Europe Street beat" description="This all about my self" />
          </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Main;
