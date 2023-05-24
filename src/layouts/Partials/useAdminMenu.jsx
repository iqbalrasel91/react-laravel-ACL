import React from "react";
import {Link} from "react-router-dom";
import {DashboardOutlined, UserSwitchOutlined} from "@ant-design/icons";
// import { useTranslation } from "react-i18next";

export const ERootNavKey = {
    Dashboard: 'dashboard',
    ACL: 'ACL'

}
const useAdminMenu = () => {

    // const { t } = useTranslation();

    return {
        menus: [
            {
                label: <Link to="/admin/dashboard"> Dashboard</Link>,
                key: 'dashboard',
                icon: <DashboardOutlined/>
            },
            {
                label: ERootNavKey.ACL,
                key: ERootNavKey.ACL,
                icon: <UserSwitchOutlined/>,
                children: [
                    {
                        label: <Link to="/admin/roles" state={{rootMenu: ERootNavKey.ACL}}> Roles</Link>,
                        key: 'role-list'
                    },
                    {
                        label: <Link to="/admin/users" state={{rootMenu: ERootNavKey.ACL}}> Users </Link>,
                        key: 'user-list'
                    }
                ],
            },
        ],
        rootMenus: ERootNavKey
    }
};

export default useAdminMenu;