import { Card, Table } from 'antd';
import React from 'react';

const TopCustomers: React.FC = () => {

    const dataSource = [
        {
          key: '1',
          name: '胡彦斌',
          age: 32,
          address: '西湖区湖底公园1号',
        },
        {
          key: '2',
          name: '胡彦祖',
          age: 42,
          address: '西湖区湖底公园1号',
        },
      ];

      const columns = [
          {
              title: 'No',
              dataIndex: 'key',
              key: 'key',
          },
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '年龄',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: '住址',
          dataIndex: 'address',
          key: 'address',
        },
      ];

    return (
        <>
        <Card title="Top Customers" className="card-table">
        <Table rowSelection={{type: 'checkbox'}} dataSource={dataSource} columns={columns} /> 
        </Card>
        </>
    );
}

export default TopCustomers;