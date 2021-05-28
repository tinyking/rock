import { Layout } from 'antd';
import RockHeader from '../components/RockHeader';
import Dashboard from './Dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Suspense } from 'react';

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
             <Router>
                 <Suspense fallback={<div>Loading...</div>}>
                     <Switch>
                         <Route exact path="/" component={Dashboard}></Route>
                     </Switch>
                 </Suspense>
             </Router>
          </div>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  </Layout>
);

export default Main;