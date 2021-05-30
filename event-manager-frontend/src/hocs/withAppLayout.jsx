import { Layout } from 'antd';
import { Aside } from '../components/Aside';
const { Header, Content, Footer } = Layout;

export const withAppLayout = (Component) => {
    const WrapperComponent = () => (
        <Layout>
            <Aside />
            <Layout className="site-layout" style={{ marginLeft: 200 }}>
                <Header className="site-layout-background">
                    Event Manager App
                </Header>

                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    <Component />
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Event Manager 2021
                </Footer>
            </Layout>
        </Layout>
    );

    return WrapperComponent;
};
