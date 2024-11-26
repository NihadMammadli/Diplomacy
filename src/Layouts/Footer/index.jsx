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
        <Col xs={18} sm={18} md={12} lg={6}>
          <Text level={3} className={style.FooterTitle}>
            Contact Us
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
              Contact Info
            </Text>
          </Row>
          <Row>
            <Text className={style.FooterText}>info@nizamiganjavi-ic.org</Text>
          </Row>
          <Row>
            <Text className={style.FooterText}>+994 12 597 48 65</Text>
          </Row>
          <Row>
            <Text className={style.FooterText}>
              Samad Vurgun str., World Business Center, Baku, Azerbaijan, AZ1014
            </Text>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={12} lg={5}>
          <Row>
            <Text level={3} className={style.FooterTitle}>
              About Us
            </Text>
          </Row>
          <Row>
            <Text className={style.FooterText}>info@nizamiganjavi-ic.org</Text>
          </Row>
          <Row>
            <Text className={style.FooterText}>+994 12 597 48 65</Text>
          </Row>
          <Row>
            <Text className={style.FooterText}>
              Samad Vurgun str., World Business Center, Baku, Azerbaijan, AZ1014
            </Text>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={12} lg={5}>
          <Row>
            <Text level={3} className={style.FooterTitle}>
              Publications
            </Text>
          </Row>
          <Row>
            <Text className={style.FooterText}>info@nizamiganjavi-ic.org</Text>
          </Row>
          <Row>
            <Text className={style.FooterText}>+994 12 597 48 65</Text>
          </Row>
          <Row>
            <Text className={style.FooterText}>
              Samad Vurgun str., World Business Center, Baku, Azerbaijan, AZ1014
            </Text>
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
