import style from "./style.module.scss";
import {
  FacebookOutlined,
  XOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
  CopyrightOutlined,
} from "@ant-design/icons";
import { Layout, Typography, Input, Button, Row, Col } from "antd";
import LinktreeOutlined from "../../Components/LinktreeIcon/index";
import { useLocation } from "react-router-dom";
const { TextArea } = Input;
const { Title, Text } = Typography;
const { Footer } = Layout;

const Index = () => {
  const location = useLocation();
  return (
    <Footer
      className={style.Footer}
      style={{
        background: location.pathname === "/structure" || "/stakeholders" ? "#09122f" : "#0d1429",
      }}
    >
      <Row
        gutter={[40, 0]}
        style={{
          background: location.pathname === "/structure" || "/stakeholders" ? "#09122f" : "#0d1429",
        }}
        className={style.FooterRow}
      >
        {location.pathname === "/" && (
          <Col xs={24} sm={24} md={12} lg={6}>
            <Text className={`${style.FooterTitle} ${style.centered}`}>
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
        )}
        <Col xs={24} sm={24} md={12} lg={5}>
          <Row>
            <Text level={3} className={style.FooterTitle}>
              Contact Us
            </Text>
          </Row>
          {/* <Row>
            <Text className={style.FooterText}>info@diplomacycommunity.org</Text>
          </Row> */}
          <Row>
            <a href="mailto:dcc@ada.edu.az" style={{ color: "white" }}>
              <Text className={style.FooterText}>dcc@ada.edu.az</Text>
            </a>
          </Row>
          <Row>
            <a href="tel:+994504600211" style={{ color: "white" }}>
              <Text className={style.FooterText}>(+994 50) 460 02 11</Text>
            </a>
          </Row>
          <Row>
            <a
              href="https://diplomacycommunity.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white" }}
            >
              <Text className={style.FooterText}>diplomacycommunity.org</Text>
            </a>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={12} lg={7}>
          <Row>
            <Col span={24}>
              <Text level={3} className={`${style.FooterTitle} ${style.centeredLeft}`}>
                Connect With Us
              </Text>
            </Col>
          </Row>
          <Row gutter={[10, 0]}>
            <Col
              xs={8}
              sm={8}
              md={8}
              lg={7}
              className={[style.FooterTextColumn, style.ConnectWithUsTitle]}
            >
              <Text className={[style.FooterText, style.ConnectWithUsText]}>FACEBOOK:</Text>
            </Col>
            <Col xs={16} sm={16} md={16} lg={17}>
              <Text className={[style.FooterText, style.ConnectWithUsText]}>
                <a
                  href="https://www.facebook.com/diplomacycommunity"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white" }}
                >
                  @DIPLOMACY COMMUNITY
                </a>
              </Text>
            </Col>
          </Row>
          <Row gutter={[10, 0]}>
            <Col
              xs={8}
              sm={8}
              md={8}
              lg={7}
              className={[style.FooterTextColumn, style.ConnectWithUsTitle]}
            >
              <Text className={[style.FooterText, style.ConnectWithUsText]}>INSTAGRAM:</Text>
            </Col>
            <Col xs={16} sm={16} md={16} lg={17}>
              <Text className={[style.FooterText, style.ConnectWithUsText]}>
                <a
                  href="https://instagram.com/diplomacycommunity"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white" }}
                >
                  @DIPLOMACYCOMMUNITY
                </a>
              </Text>
            </Col>
          </Row>
          <Row gutter={[10, 0]}>
            <Col
              xs={8}
              sm={8}
              md={8}
              lg={7}
              className={[style.FooterTextColumn, style.ConnectWithUsTitle]}
            >
              <Text className={[style.FooterText, style.ConnectWithUsText]}>LINKEDIN:</Text>
            </Col>
            <Col xs={16} sm={16} md={16} lg={17}>
              <Text className={[style.FooterText, style.ConnectWithUsText]}>
                <a
                  href="https://www.linkedin.com/company/diplomacycommunity/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white" }}
                >
                  @DIPLOMACY COMMUNITY
                </a>
              </Text>
            </Col>
          </Row>
          <Row gutter={[10, 0]}>
            <Col
              xs={8}
              sm={8}
              md={8}
              lg={7}
              className={[style.FooterTextColumn, style.ConnectWithUsTitle]}
            >
              <Text className={[style.FooterText, style.ConnectWithUsText]}>X:</Text>
            </Col>
            <Col xs={16} sm={16} md={16} lg={17}>
              <Text className={[style.FooterText, style.ConnectWithUsText]}>
                <a
                  href="https://x.com/diplomacycommunity"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white" }}
                >
                  @DIPLOMACY COMMUNITY
                </a>
              </Text>
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
            <Col style={{ padding: "0px" }} xs={4}>
              <a
                href="https://www.facebook.com/diplomacycommunity"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <FacebookOutlined style={{ fontSize: "24px" }} />
              </a>
            </Col>
            <Col style={{ padding: "0px" }} xs={4}>
              <a
                href="https://x.com/diplomacycommunity"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <XOutlined style={{ fontSize: "24px" }} />
              </a>
            </Col>
            <Col style={{ padding: "0px" }} xs={4}>
              <a
                href="https://instagram.com/diplomacycommunity"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <InstagramOutlined style={{ fontSize: "24px" }} />
              </a>
            </Col>
            <Col style={{ padding: "0px" }} xs={4}>
              <a
                href="https://www.linkedin.com/company/diplomacycommunity/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <LinkedinOutlined style={{ fontSize: "24px" }} />
              </a>
            </Col>
            <Col style={{ padding: "0px" }} xs={4}>
              <a
                href="https://linktr.ee/diplomacycommunity"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <LinktreeOutlined style={{ fontSize: "24px" }} />
              </a>
            </Col>
            <Col style={{ padding: "0px" }} xs={4}>
              <a
                href="https://www.youtube.com/@diplomacycommunity"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <YoutubeOutlined style={{ fontSize: "24px" }} />
              </a>
            </Col>
          </div>
        </Col>
      </Row>
      <Row>
        <CopyrightOutlined style={{ paddingTop: "10px", marginRight: "10px" }} />
        <Text className={style.FooterText}>2025 All rights reserved.</Text>
      </Row>
    </Footer>
  );
};

export default Index;
