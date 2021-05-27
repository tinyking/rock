import { MenuOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import RockNotification from './RockNotification';


const RockHeader = () => (
    <Row>
      <Col flex={2}>
        <span className="btn-nav">
            <MenuOutlined />
        </span>
      </Col>
      <Col flex={3}>
        <RockNotification />
      </Col>
    </Row>
);

export default RockHeader;