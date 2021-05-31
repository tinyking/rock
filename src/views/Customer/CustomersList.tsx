import { AudioOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Col, Input, Row, Space, Typography } from 'antd';
import React from 'react';
import TopCustomers from './TopCustomers';

const { Title } = Typography; 
const { Search } = Input;

const CustomersList: React.FC = () => {

    return (
        <>
        <Row justify="space-between">
        <Col span={4}> <Title level={3}>Customers Analytics</Title></Col>
        <Row justify="end">
            <Space>
                <Search placeholder="Search Customer" allowClear />
                <Button type="primary" icon={<PlusOutlined />}>
                    Add Customer
                </Button>
            </Space>
        </Row>
        </Row>
        <Row>
            <Col span={24}>
                <TopCustomers />
            </Col>
        </Row>
        </>
    );
};


export default CustomersList;