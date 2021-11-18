import { Checkbox } from "antd";
import "./Attendance.scss";

interface DataType {
  key: React.Key;
  name: string;
  id: string;

}

const data: DataType[] = [
  {
    key: "1",
    name: "Lam",
    id: "Kid1",
  },
  {
    key: "2",
    name: "Lam2",
    id: "Kid2",
  },
  {
    key: "3",
    name: "Lam3",
    id: "Kid3",
  },
  {
    key: "4",
    name: "Lam4",
    id: "Kid4",
  },
];
// rowSelection object indicates the need for row selection
function Attendance() {
  return (
    <>
      <div className="Attendance-wrapper">
        <h3>Điểm danh lớp: </h3>
        <table>
          <tr>
            <th>STT</th>
            <th>Mã SV</th>
            <th>Họ Tên</th>
            <th>Điểm danh</th>
            <th>Có phép</th>
          </tr>
          {data.map(item => (
            <tr>
              <td>{item.key}</td>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td><Checkbox /></td>
              <td><Checkbox /></td>
            </tr>
        ))}
        </table>
      </div>

    </>
  );
}
export default Attendance;
