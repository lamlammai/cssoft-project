import { Table, Space } from "antd";

const { Column, ColumnGroup } = Table;

const data = [
  {
    key: "1",
    firstName: "John",
    lastName: "Brown",
    class: "kid1",
    age: 12,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    firstName: "Jim",
    lastName: "Green",
    class: "kid1",
    age: 10,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    firstName: "Joe",
    lastName: "Black",
    class: "kid1",
    age: 11,
    address: "Sidney No. 1 Lake Park",
  },
];

export default function InfoSV() {
  return (
    <>
      <Table dataSource={data}>
        <ColumnGroup title="Name">
          <Column title="First Name" dataIndex="firstName" key="firstName" />
          <Column title="Last Name" dataIndex="lastName" key="lastName" />
        </ColumnGroup>
        <Column title="Age" dataIndex="age" key="age" />
        <Column title="Address" dataIndex="address" key="address" />
        <Column title="Class" dataIndex="class" key="class" />
        <Column
          title="Action"
          key="action"
          render={(record:any) => (
            <Space size="middle">
              <a>Invite {record.lastName}</a>
              <a>Delete</a>
            </Space>
          )}
        />
      </Table>
    </>
  );
}
