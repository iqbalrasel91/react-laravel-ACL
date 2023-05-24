import {useDocumentTitle} from "../../../shared/hooks/documentTitle/useDocumentTitle";
import {Breadcrumb, Button, Card, Col, Form, Input, notification, Radio, Row, Select, Skeleton, Space} from 'antd';
import {HomeOutlined, UnorderedListOutlined} from '@ant-design/icons';
import {Link, useParams} from "react-router-dom";
import useFetch from "../../../shared/hooks/fetchHook/useFetch.js";
import axiosServer from "../../../utils/server/axiosServer";
import errorHandler from "../../../utils/errorHanlder";
import {API_USER_BY_ID, API_USER_UPDATE} from "../../../utils/api/settings";


const {Option} = Select;
export default function EditUser() {
    useDocumentTitle("Edit User")

    const [form] = Form.useForm();
    const {id} = useParams();

    const fetchUser = useFetch({
        url: API_USER_BY_ID(id),
        initialRequest: true
    });

    console.log(fetchUser.data);


    const initialState = {
        firstName:fetchUser.data?.firstName,
        lastName: fetchUser.data?.lastName,
        username: fetchUser.data?.username,
        gender: fetchUser.data?.gender,
    }


    const onFinish = (values) => {
        axiosServer.put(API_USER_UPDATE(fetchUser.data.id), values).then((res) => {
            notification.success({
                message: 'Success',
                description: 'User successfully updated'
            });
        }).catch((err) => {
            errorHandler(err)
        });
    };


    return (
        <>
            <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>
                    <Link to="/admin/dashboard"><HomeOutlined/></Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Edit User</Breadcrumb.Item>
            </Breadcrumb>

            <Card title="Edit User" extra={<Link to="/admin/users"> <b><UnorderedListOutlined/> List</b></Link>}>

                {fetchUser.isLoading ? (
                    <Skeleton active/>
                ) : (
                    <Form form={form} layout="vertical" onFinish={onFinish} autoComplete="off"
                          initialValues={initialState}>
                        <Row gutter={20}>
                            <Col span={8} className="gutter-row">
                                <Form.Item name="firstName" label="First Name"
                                           rules={[{required: true, message: 'Please input first name!'}]}>
                                    <Input placeholder="Enter First Name"/>
                                </Form.Item>
                            </Col>

                            <Col span={8} className="gutter-row">
                                <Form.Item name="lastName" label="Last Name"
                                           rules={[{required: true, message: 'Please input last name!'}]}>
                                    <Input placeholder="Enter Last Name"/>
                                </Form.Item>
                            </Col>

                            <Col span={8} className="gutter-row">
                                <Form.Item name="username" label="User Name"
                                           rules={[{required: true, message: 'Please input user name!'}]}>
                                    <Input placeholder="Enter user Name"/>
                                </Form.Item>

                            </Col>
                        </Row>


                        <Row gutter={20}>
                            <Col span={8} className="gutter-row">
                                <Form.Item
                                    name="gender"
                                    label="Gender"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please select gender!',
                                        },
                                    ]}
                                >
                                    <Select placeholder="select your gender">
                                        <Option value="male">Male</Option>
                                        <Option value="female">Female</Option>
                                    </Select>
                                </Form.Item>
                            </Col>

                            <Col span={8} className="gutter-row" style={{padding: '0 20px'}}>
                                <Form.Item
                                    label="Status"
                                    name="status"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please select Status!',
                                        },
                                    ]}>
                                    <Radio.Group>
                                        <Radio value="Active"> Active </Radio>
                                        <Radio value="Inactive"> Inactive </Radio>
                                    </Radio.Group>
                                </Form.Item>
                            </Col>
                        </Row>

                        <Form.Item>
                            <Space>
                                <Button type="primary" htmlType="submit">
                                    Save
                                </Button>
                            </Space>
                        </Form.Item>
                    </Form>
                )}
            </Card>

        </>
    )
}