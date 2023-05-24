import {useDocumentTitle} from "../../../shared/hooks/documentTitle/useDocumentTitle";
import {Breadcrumb, Card, Space, Table, Tag} from 'antd';
import {HomeOutlined, PlusCircleOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";

export default function Role() {
    useDocumentTitle("Role List")
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: (_, {tags}) => (
                <>
                    {tags.map((tag) => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a>Invite {record.name}</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];
    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];
    return (
        <>
            <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>
                    <Link to="/admin/dashboard"><HomeOutlined/></Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Role List</Breadcrumb.Item>
            </Breadcrumb>
            <Card title="Role List" bordered={false} extra={<Link to="/admin/role/create"><b><PlusCircleOutlined/> Create New</b></Link>}>
                <Table columns={columns} dataSource={data}/>
            </Card>
        </>
    )
}