// libs
import { Layout, Breadcrumb } from "antd";
import HeaderLayout from "@/pages/Teacher/Component/Header/Header";
import Navbar from "@/pages/Teacher/Component/Navbar";
import RouterTeacher from "./routers/router";
// hooks
// actions
// others

// RouterTeacher();// ?
const { Content } = Layout;
export default function Home() {
  return (
    <>
      <HeaderLayout />
      <Layout>
        <Navbar />
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Thời khóa biểu</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <RouterTeacher />
          </Content>
        </Layout>
      </Layout>
    </>
  );
}
