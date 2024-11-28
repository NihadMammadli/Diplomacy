import style from "./style.module.scss";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { Layout, Typography, Input, Button, Row, Col } from "antd";

const { TextArea } = Input;
const { Title, Text } = Typography;
const { Footer } = Layout;

const Index = () => {
  return (
    <Footer className={style.Footer}>
      <Row gutter={[40, 0]} className={style.FooterRow}>
        <Col xs={24} sm={24} md={12} lg={6}>
          <Text className={style.FooterTitle}>
            Contact Secretary-General
          </Text>
          <Input style={{ borderRadius: "0px", margin: "10px 0" }} placeholder="Name Surname" />
          <Input placeholder="Email" style={{ borderRadius: "0px", margin: "10px 0" }} />
          <TextArea
            style={{ borderRadius: "0px", margin: "10px 0" }}
            rows={3}
            placeholder="Your Message"
          />
          <Button
            style={{
              backgroundColor: "Black",
              color: "white",
              border: "none",
              borderRadius: "0px",
              width: "100%",
              marginTop: "10px",
            }}
          >
            Send
          </Button>
        </Col>
        <Col xs={24} sm={24} md={12} lg={5}>
          <Row>
            <Text level={3} className={style.FooterTitle}>
              Contact Us
            </Text>
          </Row>
          <Row>
            <Text className={style.FooterText}>info@diplomacycommunity.org</Text>
          </Row>
          <Row>
            <Text className={style.FooterText}>dcc@ada.edu.az</Text>
          </Row>
          <Row>
            <Text className={style.FooterText}>(+994 50) 460 02 11</Text>
          </Row>
          <Row>
            <Text className={style.FooterText}>diplomacycommunity.org</Text>
          </Row>
          {/* <Row>
            <Text className={style.FooterText}>
              Ahmad Aghaoghlu str. 61, Baku, Azerbaijan, AZ1008
            </Text>
          </Row> */}
        </Col>
        <Col xs={24} sm={24} md={12} lg={7}>
          <Row>
            <Col span={24}>
              <Text level={3} className={style.FooterTitle}>
                Connect With Us
              </Text>
            </Col>
          </Row>
          <Row gutter={[10, 0]}>
            <Col xs={7} sm={8} md={8} lg={7} className={[style.FooterTextColumn, style.ConnectWithUsText]}>
              <Text className={style.FooterText}>FACEBOOK:</Text>
            </Col>
            <Col xs={17} sm={16} md={16} lg={17}>
              <Text className={style.FooterText}>@DIPLOMACY COMMUNITY</Text>
            </Col>
          </Row>
          <Row gutter={[10, 0]}>
            <Col xs={7} sm={8} md={8} lg={7} className={[style.FooterTextColumn, style.ConnectWithUsText]}>
              <Text className={style.FooterText}>INSTAGRAM:</Text>
            </Col>
            <Col xs={17} sm={16} md={16} lg={17}>
              <Text className={style.FooterText}>@DIPLOMACYCOMMUNITY</Text>
            </Col>
          </Row>
          <Row gutter={[10, 0]}>
            <Col xs={7} sm={8} md={8} lg={7} className={[style.FooterTextColumn, style.ConnectWithUsText]}>
              <Text className={style.FooterText}>LINKEDIN:</Text>
            </Col>
            <Col xs={17} sm={16} md={16} lg={17}>
              <Text className={style.FooterText}>@DIPLOMACY COMMUNITY</Text>
            </Col>
          </Row>
          <Row gutter={[10, 0]}>
            <Col xs={7} sm={8} md={8} lg={7} className={[style.FooterTextColumn, style.ConnectWithUsText]}>
              <Text className={style.FooterText}>X:</Text>
            </Col>
            <Col xs={17} sm={16} md={16} lg={17}>
              <Text className={style.FooterText}>@DIPLOMACY COMMUNITY</Text>
            </Col>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={12} lg={3}>
          <Row>
            <Text level={3} className={style.FooterTitle}>
              Publications
            </Text>
          </Row>
          <Row>
            <Text className={style.FooterText}>Become an Author</Text>
          </Row>
          <Row>
            <Text className={style.FooterText}> Share Your Research</Text>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={12} lg={3}>
          <Text level={3} className={style.FooterTitle}>
            Follow Us
          </Text>
          <div style={{ display: "flex", gap: "10px" }}>
            <FacebookOutlined style={{ fontSize: "24px" }} />
            <TwitterOutlined style={{ fontSize: "24px" }} />
            <InstagramOutlined style={{ fontSize: "24px" }} />
            <LinkedinOutlined style={{ fontSize: "24px" }} />
          </div>
        </Col>
      </Row>
    </Footer>
  );
};

export default Index;
