import { Table } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Lớp",
    dataIndex: "class",
  },
  {
    title: "Kiểm tra 1",
    dataIndex: "exp1",
    sorter: {
      compare: (a:any, b:any) => a.exp1 - b.exp2,
      multiple: 3,
    },
  },
  {
    title: "Kiêm tra 2",
    dataIndex: "exp2",
    sorter: {
      compare: (a:any, b:any) => a.exp2 - b.exp2,
      multiple: 2,
    },
  },
  {
    title: "Kiêm tra 3",
    dataIndex: "exp3",
    sorter: {
      compare: (a:any, b:any) => a.exp3 - b.exp3,
      multiple: 1,
    },
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    class: "Kids1",
    epx1: 98,
    exp2: 60,
    exp3: 70,
  },
  {
    key: "2",
    name: "Jim Green",
    class: "Kids1",
    epx1: 88,
    exp2: 30,
    exp3: 11,
  },
  {
    key: "3",
    name: "Joe Black",
    class: "Kids1",
    epx1: 100,
    exp2: 60,
    exp3: 40,
  },
  {
    key: "4",
    name: "Jim Red",
    class: "Kids1",
    epx1: 96,
    exp2: 61,
    exp3: 72,
  },
];

function onChange(pagination: any, filters: any, sorter: any, extra: any) {
  // eslint-disable-next-line no-console
  console.log("params", pagination, filters, sorter, extra);
}
export default function Point() {
  return (
    <>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </>
  );
}
