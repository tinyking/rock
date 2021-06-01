import { EditOutlined, HomeOutlined, MessageOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Breadcrumb, Button, Card, Checkbox, Col, DatePicker, Divider, Form, Input, Radio, Row, Select, Space, Typography } from 'antd';
import React from 'react';

const {Title, Text} = Typography;

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
        <Col span={6}>
            <Card>
                <Row gutter={24} justify="start" align="middle">
                    <Col span={4}><Avatar size="large" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></Col>
                    <Col>
                        <Title level={3}>Kate Smith</Title>
                        <Text type="secondary">Botsford and Sons</Text>
                    </Col>
                </Row>
                <Row justify="space-around">
                    <Col>
                    <Space>
                    <Button type="primary" icon={<MessageOutlined />}>Message</Button>
                    <Button type="primary" icon={<EditOutlined />}>Edit Profile</Button>
                    </Space>
                    </Col>
                </Row>
                <Divider />
            </Card>
        </Col>
        <Col span={18}><Card ></Card></Col>
        </Row>
        </>
    );
}

export default CustomerView;