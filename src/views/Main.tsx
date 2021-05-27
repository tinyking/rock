import { Layout } from 'antd';
import RockHeader from '../components/RockHeader';

const { Header, Footer, Sider, Content } = Layout;

const Main = () => (
    <Layout>
    <Sider theme="light">Sider</Sider>
    <Layout>
      <Header>
          <RockHeader />
      </Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  </Layout>
);

export default Main;