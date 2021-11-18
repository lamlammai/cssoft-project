// libs
import { Card, Input } from "antd";
import { Link } from "react-router-dom";
import "@/pages/Class/ListClass/ListClass.scss";

const { Search } = Input;
// eslint-disable-next-line no-console
const onSearch = (value: any) => console.log(value);

export default function ListClass() {
  return (
    <>
      <div className="List-wraper">
        <div className="site-layout-content">
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            enterButton
          />
          <div className="list-class">
            <Link to="/ClassItem">
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img alt="example" src="https://i.imgur.com/NnL4rTP.png" />
                }
              >
                <p>Lớp: Kid1</p>
                <p>Ngày kết thúc: 20/12/2021</p>
                <p>Lịch học: Thứ 4-6</p>
              </Card>
            </Link>
            <Link to="/ClassItem">
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img alt="example" src="https://i.imgur.com/cghnABQ.png" />
                }
              >
                <p>Lớp: Kid1</p>
                <p>Ngày kết thúc: 20/12/2021</p>
                <p>Lịch học: Thứ 4-6</p>
              </Card>
            </Link>
            <Link to="/ClassItem">
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img alt="example" src="https://i.imgur.com/niPt31D.png" />
                }
              >
                <p>Lớp: Kid1</p>
                <p>Ngày kết thúc: 20/12/2021</p>
                <p>Lịch học: Thứ 4-6</p>
              </Card>
            </Link>
          </div>
          <div className="list-class">
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img alt="example" src="https://i.imgur.com/P1orXEz.png" />
              }
            >
              <p>Lớp: Kid1</p>
              <p>Ngày kết thúc: 20/12/2021</p>
              <p>Lịch học: Thứ 4-6</p>
            </Card>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img alt="example" src="https://i.imgur.com/CvmIXAk.png" />
              }
            >
              <p>Lớp: Kid1</p>
              <p>Ngày kết thúc: 20/12/2021</p>
              <p>Lịch học: Thứ 4-6</p>
            </Card>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img alt="example" src="https://i.imgur.com/CvmIXAk.png" />
              }
            >
              <p>Lớp: Kid1</p>
              <p>Ngày kết thúc: 20/12/2021</p>
              <p>Lịch học: Thứ 4-6</p>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
