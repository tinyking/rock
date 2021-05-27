import { Layout } from 'antd';
import RockHeader from '../components/RockHeader';
import Dashboard from './Dashboard';

const { Header, Footer, Sider, Content } = Layout;

const Main = () => (
    <Layout>
    <Sider theme="light">Sider</Sider>
    <Layout>
      <Header>
          <RockHeader />
      </Header>
      <Content>
          <div className="main">
             <Dashboard />
          </div>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  </Layout>
);

export default Main;