import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const Main = () => (
    <Layout>
    <Sider theme="light">Sider</Sider>
    <Layout>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  </Layout>
);

export default Main;