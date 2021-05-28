import { Card, Table } from 'antd';

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      filters: [
        {
          text: 'London',
          value: 'London',
        },
        {
          text: 'New York',
          value: 'New York',
        },
      ],
    }
  ];

const data: any[] = [];
for (let i = 1; i <= 10; i++) {
  data.push({
    key: i,
    name: 'John Brown',
    age: `${i}2`,
    address: `New York No. ${i} Lake Park`,
    description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
  });
}
const tableColumns = columns.map(item => ({ ...item }));

const TopSell = () => (
<Card title="Top Selling Product">
<Table
          showHeader={false}
          columns={tableColumns}
          dataSource={data}
          pagination={false}
        />
</Card>
);


export default TopSell;