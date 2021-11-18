import { Tabs } from "antd";
import CalenderTeacher from "../CalendarTeacher/CalendarTeacher";

const { TabPane } = Tabs;

function callback(key: any) {
  // eslint-disable-next-line no-console
  console.log(key);
}

const CalendarStudent = () => (
  <>
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="Đăng ký lịch" key="1">
        <CalenderTeacher />
      </TabPane>
      <TabPane tab="Chuyển lớp" key="2">
        Đây là tab xin chuyển lớp
      </TabPane>
      <TabPane tab="Bảo lưu" key="3">
        Đây là tab xin bảo lưu
      </TabPane>
    </Tabs>

  </>
  );
export default CalendarStudent;
