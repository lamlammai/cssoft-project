import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  InputNumber,
} from "antd";
import "./InfoTeacher.scss";

const InfoTeacher = () => (
  <>
    <div className="Info-wrapper">
      <h3>Thông tin cá nhân: </h3>
      <Form
        className="From-info"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
      >
        <Form.Item label="Họ Tên" className="info-name">
          <Input />
        </Form.Item>
        <Form.Item label="Giới tính" className="info-sex">
          <Select>
            <Select.Option value="Nam">Nam</Select.Option>
            <Select.Option value="Nữ">Nữ</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          className="info-email"
          name="email"
          label="E-mail"
        >
          <Input />
        </Form.Item>
        <Form.Item label="Ngày sinh" className="info-date">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Số Điện thoại" className="info-number">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Trình độ" className="info-exo">
          <Input />
        </Form.Item>
      </Form>
      <Button type="primary" className="info-submit">Hoàn Tất</Button>
    </div>
  </>
  );
export default InfoTeacher;
