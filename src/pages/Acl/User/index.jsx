import {useDocumentTitle} from "../../../shared/hooks/documentTitle/useDocumentTitle";
import {Breadcrumb, Card, Skeleton, Table, Image} from 'antd';
import {HomeOutlined, PlusCircleOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";
import EditButtonComponent from "../../../components/Common/EditButtonComponent";
import useListFetch from "../../../shared/hooks/listHook/useListFetch";
import { API_USER_LIST } from "../../../utils/api/settings";

export default function Role() {
    useDocumentTitle("User List")
    const columns = [
        {
            title: 'S/L',
            dataIndex: 'sl',
            key: 'sl',
            width: '100px',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            width: '100px',
            render: (row) => (
                <>
                    <EditButtonComponent url={`/admin/user/edit/${row.id}`} />
                </>
            ),
        },
        {
            title: 'User Name',
            dataIndex: 'username',
            key: 'username',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: (image) => (
                <>
                    <Image
                        width={50}
                        src={image}
                    />
                </>
            ),



        }

    ];

    // call list api
    const fetchList = useListFetch({
        url: API_USER_LIST
    });
   // console.log(fetchList);
    // map data
    const items = fetchList?.data?.users?.map((element, sl) => {
        return {
            key: sl,
            sl: ++sl,
            action: element,
            username: element.username,
            email: element.email,
            image: element.image,
        }
    }) || [];



    return (
        <>
            <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>
                    <Link to="/admin/dashboard"><HomeOutlined/></Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>User List</Breadcrumb.Item>
            </Breadcrumb>


            <Card title="User List" bordered={false} extra={<Link to="/admin/user/create"><b><PlusCircleOutlined/> Create New</b></Link>}>
                {fetchList.isLoading ? (
                    <Skeleton active />
                ) : (
                <Table columns={columns} dataSource={items}/>
                )}
            </Card>

        </>
    )
}