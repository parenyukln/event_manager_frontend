import { Layout, Menu } from 'antd';
import { Link } from '@reach/router';
import {
    AppstoreOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

export const Aside = () => {
    return (
        <Sider
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
            }}
        >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<VideoCameraOutlined />}>
                    <Link to="/projects">Проекты</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<AppstoreOutlined />}>
                    <Link to="/calendar">Календарь событий</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<UserOutlined />}>
                    <Link to="/profile">Мой профиль</Link>
                </Menu.Item>
            </Menu>
        </Sider>
    );
};
