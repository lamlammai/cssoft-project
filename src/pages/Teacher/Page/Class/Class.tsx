import { Card } from "antd";
import avtclass from "@/utils/class.png";
import "./Class.scss";

export default function Class() {
  return (
    <>
      <div className="Class-wrapper">
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="class" src={avtclass} />}
        >
          <Card title="Lớp Kid1" bordered={false}>
            Thời gian : 7h30 -12h Thứ 2-6
          </Card>
        </Card>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="class" src={avtclass} />}
        >
          <Card title="Lớp Kid1" bordered={false}>
            Thời gian : 7h30 -12h Thứ 2-6
          </Card>
        </Card>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="class" src={avtclass} />}
        >
          <Card title="Lớp Kid1" bordered={false}>
            Thời gian : 7h30 -12h Thứ 2-6
          </Card>
        </Card>
      </div>

    </>
  );
}
