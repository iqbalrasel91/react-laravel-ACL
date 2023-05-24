import React from 'react';
import {Button, Tooltip} from "antd";
import {EditOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

export default function EditButtonComponent ({title = 'Edit', url}) {
    return (
        <>
            <Tooltip title={ title } placement="right">
                <Link to={url}>
                    <Button type="primary"   icon={<EditOutlined />} size='small' />
                </Link>
            </Tooltip>
        </>
    )
};
