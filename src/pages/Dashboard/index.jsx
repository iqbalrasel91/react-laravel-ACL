import React from 'react';
import {Breadcrumb, Card} from "antd";
import {Link} from "react-router-dom";
import {HomeOutlined} from "@ant-design/icons";
import { useDocumentTitle } from '../../shared/hooks/documentTitle/useDocumentTitle';

export default function Dashboard() {

    useDocumentTitle("Dashboard")

    return (
        <>
            <Breadcrumb
                style={{
                    margin: '16px 0',
                }}
            >
                <Breadcrumb.Item>
                    <Link to="/dashboard"><HomeOutlined /></Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            </Breadcrumb>
            <Card title="Dashboard">
                <p>Admin Dashboard</p>
            </Card>
        </>
    );
}