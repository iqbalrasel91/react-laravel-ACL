import {useDocumentTitle} from "../../../shared/hooks/documentTitle/useDocumentTitle";
import {Breadcrumb, Button, Card, Col, Form, Input, Radio, Row, Select, Space, notification, Divider} from 'antd';
import {HomeOutlined, UnorderedListOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";
import axiosServer from "../../../utils/server/axiosServer";
import errorHandler from "../../../utils/errorHanlder";
import { API_USER_CREATE } from "../../../utils/api/settings";


const {Option} = Select;
export default function CreateUser() {
    useDocumentTitle("Create User")

    const [form] = Form.useForm();

    const onFinish = (values) => {
        axiosServer.post(API_USER_CREATE, values).then((res) => {
            notification.success({
                message: 'Success',
                description: 'User successfully created'
            });
            form.resetFields();
        }).catch((err) => { errorHandler(err)});
    };

    return (
        <>
            <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>
                    <Link to="/admin/dashboard"><HomeOutlined/></Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Create User</Breadcrumb.Item>
            </Breadcrumb>

            <Card title="Create User" extra={<Link to="/admin/users"> <b><UnorderedListOutlined/> List</b></Link>} >
                <Form form={form} layout="vertical" onFinish={onFinish} autoComplete="off">
                    <Row gutter={20} >
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

                        <Col span={8} className="gutter-row" style={{ padding: '0 20px' }}>
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

                    <Divider orientation="left"></Divider>
                    <Form.Item>
                        <Space>
                            <Button type="primary" htmlType="submit">
                                Save
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Card>

        </>
    )
}