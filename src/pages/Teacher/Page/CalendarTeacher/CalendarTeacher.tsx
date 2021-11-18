import {
  Form,
  Input,
  Button,
} from "antd";

const CalendarTeacher = () => (
  <>
    <h3>Đăng kí lịch: </h3>
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
    >
      <Form.Item label="Thời gian: ">
        <Input />
      </Form.Item>
      <Form.Item label="Thứ: ">
        <Input />
      </Form.Item>
      <div className="submit-form">
        <Button type="primary">Hoàn tất</Button>
        <Button type="dashed">Trở lại</Button>
      </div>
    </Form>
  </>
  );
export default CalendarTeacher;
