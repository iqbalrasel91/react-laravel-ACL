import React, { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import { Card, Col, Row } from "antd";
import LoginPage from '../pages/LoginPage';
import Cookies from "js-cookie";
// import '../assets/auth.css';

const PublicLayout = () => {

    useEffect(() => {
        const token = Cookies.get("_jwtToken");
         if (token) {
             window.location = "/admin";
         }
    }, [])

    return (
        <div>
            <Row justify="center" align="middle" style={{ marginTop: '100px' }}>
                <Col xxl={8} xl={8} lg={8} md={12} sm={24} xs={24}>
                    <Card>
                        <Routes>
                            <Route path={'/'} element={<LoginPage />} />
                            <Route path={'/login'} element={<LoginPage />} />
                            {/* <Route path={'/signup'} element={<SignUpPage />} />) */}
                            {/* <Route path={'/forgot-password'} element={<ForgotPasswordPage />} />) */}
                        </Routes>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default PublicLayout;