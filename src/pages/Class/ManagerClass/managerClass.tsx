/* eslint-disable no-console */
// libs
import "./managerClass.scss";
// import RouterClass from "./routers/router";
// eslint-disable-next-line no-console
import { Tabs, Layout } from "antd";

const { TabPane } = Tabs;

function callback(key: any) {
  console.log(key);
}
export default function ClassManager() {
  return (
    <>
      <div className="Class-wraper">
        <Layout>
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </Layout>
      </div>
    </>
  );
}
