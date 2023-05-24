import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form ,Checkbox,Input } from 'antd';
import { Link, useNavigate } from "react-router-dom";
import axiosServer from '../../utils/server/axiosServer';
import errorHandler from '../../utils/errorHanlder';
import { LOGIN } from '../../utils/api/auth';
import '../../assets/css/login.css';
import { setCookiesFromAuthResponse } from '../../utils/server/axiosServer';


const initialState = {
    username: 'kminchelle',
    password: '0lelplR'
}

const Login = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const onFinish = (values) => {
        axiosServer.post(LOGIN, values).then((res) => {
            setCookiesFromAuthResponse(res);
            navigate(`/admin/dashboard`);
        }).catch((err) => { errorHandler(err) });
    };

    return (
        <>
            <div className="login-page">
                <div className="login-box">
                    <div className="illustration-wrapper">
                        <img
                            src="https://openclipart.org/image/400px/327157"
                            alt="Login"/>
                    </div>
                    <Form name="login-form"
                          labelCol={{span: 8,}}
                          wrapperCol={{span: 16,}}
                          onFinish={onFinish}
                          initialValues={initialState}
                          autoComplete="off">

                        <p className="form-title">Welcome back</p>
                        <p>Login to the Dashboard</p>

                        <Form.Item
                            label="Email"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Email!',
                                },
                            ]}>
                            <Input prefix={<MailOutlined className="site-form-item-icon" />}/>
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}>
                            <Input.Password  prefix={<LockOutlined className="site-form-item-icon" />}/>
                        </Form.Item>

                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" className="login-form-button" htmlType="submit"
                                    value='Login' >
                                Submit
                            </Button>

                        </Form.Item>

                    </Form>
                </div>
            </div>

        </>
    );
};
export default Login;