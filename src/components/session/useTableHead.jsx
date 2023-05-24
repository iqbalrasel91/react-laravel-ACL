import {Tag} from "antd";
import React from "react";
import {Button, Tooltip} from "antd";
import {EditOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
// import EditButtonComponent from "../../../Common/EditButtonComponent";

export default function useTableHead() {
    return [
        {
            title: 'S/L',
            dataIndex: 'sl',
            key: 'sl',
            width: '70px',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            width: '50px',
            render: (row) => (
                <Tooltip title={ 'Edit' } placement="right">
                <Link to={`/admin/address/${row.id}/edit`}>
                    <Button type="primary"   icon={<EditOutlined />} size='small' />
                </Link>
                </Tooltip>
            ),
        },
        {
            title: 'Sesion For',
            dataIndex: 'session_for',
            key: 'session_for',
        },
        {
            title: 'Invoce Status',
            dataIndex: 'invoice_status',
            key: 'invoice_status',
        },
        {
            title: 'Session Medium',
            dataIndex: 'session_medium',
            key: 'session_medium',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            width: '80px',
            render: (status) => (
                <>
                    <Tag color={ status === 'Pending' ? 'blue' : 'red'}>
                        { status }
                    </Tag>
                </>
            ),
        },
    ];
};
