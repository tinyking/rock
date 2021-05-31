import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Card, Checkbox, Col, DatePicker, Form, Input, Radio, Row, Select, Typography } from 'antd';
import React from 'react';

type RequiredMark = boolean | 'optional';

const { Title } = Typography; 
const { Option } = Select;
const { TextArea } = Input;
const CheckboxGroup = Checkbox.Group;

const AddCustomer: React.FC = () => {

    const [form] = Form.useForm();
    const plainOptions = ['Apple', 'Pear', 'Orange'];

    return (
        <>
        <Row>
            <Col>
                <Breadcrumb>
                    <Breadcrumb.Item href="">
                        <HomeOutlined />
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="">
                        <UserOutlined />
                        <span>Application List</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>Application</Breadcrumb.Item>
                </Breadcrumb>
            </Col>
        </Row>
        <Row justify="space-between">
        <Col span={24}> <Title level={3}>Add New Customer</Title></Col>
        </Row>
        <Form
            form={form}
            layout="vertical"
            >
        <Row>
            <Col span={24}>
                <Card>
                    <Row gutter={24}>
                        <Col span={6}></Col>
                        <Col span={18}>
                    <Row gutter={24}>
                        <Col span={12}>
                            <Form.Item label="FULL NAME" name="fullName">
                                <Input placeholder="Enter full name"></Input>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="GENDER" name="gender">
                            <Radio.Group>
                                <Radio value="MALE">Male</Radio>
                                <Radio value="FEMALE">Female</Radio>
                                <Radio value="Other">Other</Radio>
                            </Radio.Group>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={12}>
                            <Form.Item label="BIRTHDAY" name="birthDay">
                                <DatePicker style={{width: '100%'}}/>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="COMPANY NAME" name="companyName">
                            <Input placeholder="Enter company name"></Input>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={12}>
                            <Form.Item label="EMAIL" name="email">
                                <Input placeholder="Enter email"></Input>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="PHONE" name="phone">
                            <Input placeholder="Enter phone"></Input>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={12}>
                            <Form.Item label="COUNTRY" name="country">
                            <Select placeholder="Select country" style={{ width: '100%' }}>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="disabled" disabled>
                                    Disabled
                                </Option>
                                <Option value="Yiminghe">yiminghe</Option>
                            </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="REGION" name="region">
                            <Select placeholder="Select state or region" style={{ width: '100%' }}>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="disabled" disabled>
                                    Disabled
                                </Option>
                                <Option value="Yiminghe">yiminghe</Option>
                            </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={12}>
                            <Form.Item label="ADDRESS" name="address">
                                <Input placeholder="Enter address"></Input>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="ZIPCODE" name="zipcode">
                            <Input placeholder="Enter zipcode"></Input>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={24}>
                            <Form.Item label="BIO" name="fullName">
                            <TextArea rows={4} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={24}>
                            <Form.Item label="NOTIFICATION TYPE" name="fullName">
                            <CheckboxGroup options={plainOptions} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row justify="end">
                        <Button type="primary">Add Customer</Button>
                    </Row>
                    </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
        </Form>
        </>
    );
}

export default AddCustomer;