import { DownloadOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Row, Space, Typography } from 'antd';
import React, { useState } from 'react';
import CustomersMap from './CustomersMap';
import CustomersReport from './CustomersReport';
import TopCustomers from './TopCustomers';

const { Title } = Typography;
const { RangePicker } = DatePicker;

const Customer: React.FC = () => {
    return (
        <>
        <Row justify="space-between">
            <Col span={4}> <Title level={3}>Customers Analytics</Title></Col>
            <Row justify="end">
                <Space>
                    <RangePicker />
                    <Button type="primary" icon={<DownloadOutlined />}>
                        Export
                    </Button>
                </Space>
            </Row>
        </Row>

        {/**start */}
        <Row gutter={16}>
            <Col span={18}>
                <CustomersReport />
            </Col>
            <Col span={6}>
                <CustomersMap />
            </Col>
        </Row>

        <Row>
            <Col span={24}>
                <TopCustomers />
            </Col>
        </Row>
        </>
    );
};


export default Customer;