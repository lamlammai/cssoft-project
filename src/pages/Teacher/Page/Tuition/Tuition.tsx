import {
  Form,
  Input,
  Button,
} from "antd";

const Tuition = () => (
  <>
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
    >

      <Form.Item label="Học phí: ">
        <Input />
      </Form.Item>
      <Form.Item label="Còn nợ: ">
        <Input />
      </Form.Item>
      <h3>Đóng học phí: </h3>
      <Form.Item label="Số tài khoản: ">
        <Input />
      </Form.Item>
      <Form.Item label="Chủ tài khoản: ">
        <Input />
      </Form.Item>
      <Form.Item label="Ngân hàng: ">
        <Input />
      </Form.Item>
      <div className="submit-form">
        <Button type="primary">Hoàn tất</Button>
        <Button type="dashed">Trở lại</Button>
      </div>
    </Form>
  </>
  );
export default Tuition;
