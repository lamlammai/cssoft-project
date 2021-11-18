// libs
import { Layout, Breadcrumb, Pagination } from "antd";
import { Link } from "react-router-dom";
import HeaderLayout from "@/pages/Teacher/Component/Header/Header";
import "./style-class.scss";
import RouterManager from "./routers/router";

const { Content } = Layout;

export default function ClassManager() {
  return (
    <>
      <div className="Class-wraper">
        <Layout>
          <HeaderLayout />
          <Content style={{ padding: "0 50px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>
                <Link to="/listclass">Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <RouterManager />
          </Content>
          <Pagination className="Pagination" defaultCurrent={1} total={50} />
        </Layout>
      </div>
    </>
  );
}
