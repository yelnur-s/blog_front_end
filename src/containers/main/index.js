import React, {useState} from 'react';
import '../../App.css';
import { Row, Col, Card, Button } from 'antd';
import ModalBlog from '../../components/modal-blog'
import Header from '../../components/header';
import './main.css';

const { Meta } = Card;

function Main() {
  const [modalBlogVisible, setModalBlogVisible] = useState(false)

  const openModal = () => {
    setModalBlogVisible(true)
  }

  const closeModal = () => {
    setModalBlogVisible(false)
  }
  return (
    <div>
      
      <Header />
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
            <Button className="add-new" type="primary" block size="large" onClick={openModal}>
                    Write new Blog
            </Button>
            <Card title="About Me"  style={{ width: `100%` }}  cover={<img alt="example" src="/images/3.jpg"/>}>
            <Meta title="Europe Street beat" description="This all about my self" />
            </Card>
          </Col>
        </Row>
      </div>

      <ModalBlog modalBlogVisible={modalBlogVisible} close={closeModal}/>
    </div>
  );
}

export default Main;
