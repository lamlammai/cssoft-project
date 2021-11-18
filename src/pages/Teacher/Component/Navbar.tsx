import { Layout, Menu } from "antd";
import {
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Sider } = Layout;
const { SubMenu } = Menu;
export default function Navbar() {
  return (

    <>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={["2"]}
          defaultOpenKeys={["sub2"]}
          style={{ height: "100%", borderRight: 0 }}
        >
          <Menu.Item key="1">
            Trang chủ
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/">Thời khóa biểu</Link>
          </Menu.Item>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="Học viên">
            <Menu.Item key="5"><Link to="/InfoStudent">Thông tin SV</Link></Menu.Item>
            <Menu.Item key="6"><Link to="/point">Điểm thi</Link></Menu.Item>
            <Menu.Item key="7"><Link to="/tuition">Học phí</Link></Menu.Item>
            <Menu.Item key="8"><Link to="/class">Lớp học</Link></Menu.Item>
            <Menu.Item key="9"><Link to="/calendarStudent">Đăng kí lịch học</Link></Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            icon={<NotificationOutlined />}
            title="Quản lý giảng dạy"
          >
            <Menu.Item key="10"><Link to="/attendance">Điểm danh</Link></Menu.Item>
            <Menu.Item key="11"><Link to="/lesson"></Link>Bài giảng</Menu.Item>
            <Menu.Item key="12"><Link to="/info"></Link>Thông Tin Cá Nhân</Menu.Item>
            <Menu.Item key="13"><Link to="/calendarTeacher">Đăng kí lịch dạy</Link></Menu.Item>
            <Menu.Item key="14"><Link to="/sort">Xếp lớp</Link></Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    </>
  );
}
