import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Card, Checkbox, Col, DatePicker, Form, Input, Radio, Row, Select, Typography } from 'antd';
import React from 'react';


const CustomerView: React.FC = () => {

    return (
        <>
        <Row>
            <Col>
                <Breadcrumb>
                    <Breadcrumb.Item href="">
                        <HomeOutlined />
                        <span>Customers</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>Customer View</Breadcrumb.Item>
                </Breadcrumb>
            </Col>
        </Row>
        <Row gutter={24}>
        <Col span={8}>
            <Card ></Card>
        </Col>
        <Col span={16}><Card ></Card></Col>
        </Row>
        </>
    );
}

export default CustomerView;