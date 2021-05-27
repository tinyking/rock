import React, { useState } from 'react';
import { Row, Col, Card, Drawer, Button } from 'antd';
import TopSell from './TopSell';

const Dashboard: React.FC = () => {

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

return (
    <>
    <div className="dashboard">
        <Row gutter={16}>
            <Col className="gutter-row" span={6}>
            <Card>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
                <Button onClick={showDrawer}>ss</Button>
            </Card>
            </Col>
            <Col className="gutter-row" span={6}>
            <Card>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
            </Col>
            <Col className="gutter-row" span={6}>
            <Card>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
            </Col>
            <Col className="gutter-row" span={6}>
            <Card>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
            </Col>
        </Row>

        <Row gutter={16} style={{ marginTop: 16}}>
            <Col className="gutter-row" span={24}>
                <TopSell />
            </Col>
        </Row>

        <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        visible={visible}
        width={800}
        >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        </Drawer>
    </div>
    </>
    );

};


export default Dashboard;