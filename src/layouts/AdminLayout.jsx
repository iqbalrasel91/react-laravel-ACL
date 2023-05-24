import { LockOutlined, LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Col, Layout, Menu, Popover, Row, Switch } from 'antd';
import Cookies from "js-cookie";
import { useEffect, useState } from 'react';
import { Link, Route, Routes, useLocation, } from "react-router-dom";
import { useGlobalContext } from '../context/GlobalContext';
import { clearCookies } from '../utils/server/axiosServer';
import { routers } from '../router';
import Sidebar from './Partials/Sidebar';
import useAdminMenu from './Partials/useAdminMenu';

const { Header, Sider,Footer } = Layout;

const AdminLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const menu = useAdminMenu();
    const rootSubmenuKeys = Object.values(menu.rootMenus);
    const [openKeys, setOpenKeys] = useState(['admin-dashboard']);
    const { getGlobalState, setGlobalState } = useGlobalContext();
    const location = useLocation();
    const { rootMenu } = location.state || ''

    useEffect(() => {

        const token = Cookies.get("_jwtToken");
        // const _jwtUserType = Cookies.get("_jwtUserType");
        // console.log(token);
        if (!token) window.location = "/login";

        setOpenKeys([rootMenu]);
        const _userInfo = JSON.parse(localStorage.getItem("_userInfo") || "{}");
        setGlobalState((prevState) => ({
            ...prevState,
            userAuth: true,
            userProfile: {
                userInfo: _userInfo,
            },
        }));
    }, [])

    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    const logout = () => {
        clearCookies();
        window.location = "/";
    }



    const toggleCollapsed = () => setCollapsed(!collapsed)

    return (
        <Layout>
            <Header className="header">
                <div style={{ display: "flex", justifyContent: 'space-between' }}>
                    <div>
                        <Button
                            type="primary"
                            onClick={toggleCollapsed}
                            style={{
                                marginBottom: 16,
                            }}
                        >
                            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        </Button>

                        <img className="logo" src="https://sslwireless.com/wp-content/uploads/2020/05/ssl-wireless-logo.png"/>

                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', height: '100%', alignItems: 'center' }}>
                        {/* <div style={{ marginRight: '5px' }}>
                            <Switch checkedChildren="En" unCheckedChildren="Arb" defaultChecked={true} onChange={onChange} />
                        </div> */}

                        <div>
                            <span style={{ fontWeight: 700, color: '#fff', marginRight: '5px' }}> {getGlobalState?.userProfile?.userInfo?.username || ''}</span>
                            <Popover placement="bottomLeft" title="Account" content={
                                <>
                                    <div>
                                        <p>
                                            <Link to="/admin/change-password"><LockOutlined /> Change Password</Link>
                                        </p>
                                        <p style={{ cursor: "pointer" }} onClick={() => logout()}><LogoutOutlined /> Logout</p>
                                    </div>
                                </>
                            } trigger="click">
                                <Avatar style={{ cursor: "pointer" }} icon={<UserOutlined />} />
                            </Popover>
                        </div>
                    </div>
                </div>
            </Header>
            <Layout>
                <Sider
                    width={250}
                    className="site-layout-background"
                    trigger={null}
                    collapsible
                    collapsed={collapsed}
                    breakpoint="lg"
                    onBreakpoint={(broken) => {
                        setCollapsed(broken)
                    }}
                >
                 {/* <Sidebar /> */}

                 <Menu
                        theme='light'
                        mode="inline"
                        openKeys={openKeys}
                        onOpenChange={onOpenChange}
                        defaultSelectedKeys={['dashboard']}
                        style={{ height: '100vh' }}
                        items={menu.menus}
                    />
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Routes>
                        {routers.map((route, key) => {
                            return <Route path={route.path} key={key} element={route.element} />
                        })}
                    </Routes>
                </Layout>

            </Layout>
            <Footer style={{ textAlign: 'center' }}>SSL Wireless ©2023</Footer>
        </Layout>
    );
};

export default AdminLayout;