import { Card, Col, Row } from "antd";

export default function Schedule() {
  return (
    <>
      <h3>Thời khóa biểu ngày 16/11/2/21</h3>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            <p>Lớp: </p>
            <p>Thời gian:</p>
            <p>Phòng: </p>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            <p>Lớp: </p>
            <p>Thời gian:</p>
            <p>Phòng: </p>
          </Card>
        </Col>
      </Row>
    </>
  );
}
