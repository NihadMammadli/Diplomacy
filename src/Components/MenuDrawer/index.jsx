import { Menu, Drawer, Collapse, Typography, Image } from "antd";
import DiplomacyLogo from "../../Assets/Logo/DiplomacyLogo.png";
import { CloseOutlined, DownOutlined, RightOutlined } from "@ant-design/icons";

const { Panel } = Collapse;
const { Text } = Typography;

import "./styles.scss";
import style from "./style.module.scss";

const ImageCarousel = ({ open, openDrawer, items }) => {
  return (
    <Drawer placement="bottom" closable={true} onClose={openDrawer} open={open} height="100%">
      <div className={style.DrawerHeader}>
        <div className={style.DiplomacyLogo}>
          <Image
            style={{ backgroundColor: "#0d1429", borderRadius: "3vmin" }}
            width={"20%"}
            preview={false}
            src={DiplomacyLogo}
          />
        </div>
        <div onClick={openDrawer} className={style.DrawerCloseIcon}>
          <CloseOutlined style={{ color: "#ffffff" }} />
        </div>
      </div>
      <Collapse className={style.DrawerCollapse}>
        {items.map(({ header, submenu }) => (
          <Panel
            header={
              <Text className={style.MenuText}>
                {header.charAt(0).toUpperCase() + header.slice(1).toLowerCase()}
              </Text>
            }
            expandIcon={({ isActive }) =>
              isActive ? (
                <DownOutlined style={{ color: "#ffffff" }} />
              ) : (
                <RightOutlined style={{ color: "#ffffff" }} />
              )
            }
            key={header}
          >
            <Menu>
              {submenu.map(({ key, label, path }) => (
                <Menu.Item key={key} onClick={() => navigate(path)}>
                  <Text className={style.SubMenuText}>{label}</Text>
                </Menu.Item>
              ))}
            </Menu>
          </Panel>
        ))}
      </Collapse>
    </Drawer>
  );
};

export default ImageCarousel;
