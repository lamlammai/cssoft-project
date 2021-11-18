import { Layout, Menu } from "antd";
import logo from "@/utils/logo.png";
import avt from "@/utils/avt.png";
import { BellOutlined } from "@ant-design/icons";
import "./Header.scss";

const { Header } = Layout;

export default function HeaderLayout() {
  return (
    <>
      <Layout>
        <Header className="header">
          <div className="header-left">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <Menu theme="dark" mode="horizontal" className="Menu-left" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">Home</Menu.Item>
              <Menu.Item key="2">Contact</Menu.Item>
              <Menu.Item key="3">ABC</Menu.Item>
            </Menu>
          </div>
          <Menu theme="dark" className="Menu-right" mode="horizontal">
            <Menu.Item key="4">
              <BellOutlined className="noti" />
            </Menu.Item>
            <Menu.Item key="5">
              <img alt="avt" src={avt} />
              <span>Mai Lam</span>
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>
    </>
  );
}
