import { Alert, Row, Col, Typography, Card, Form, Input, Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import register from '../assets/register.jpg';
import useSignup from '../Auth/Hooks/useSignup';


const Register = () => {
    const { loading, error, registerUser } = useSignup;

    const handleRegister = (values) => {
        registerUser(values);
    };

    return (
        <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
            <Col>
                <Card className="form-container">
                    <Typography.Title level={3} strong className="title">
                        Create an account
                    </Typography.Title>
                    <Form
                        layout="vertical"
                        onFinish={handleRegister}
                        autoComplete="off"
                        style={{ width: '70%' }}
                    >
                        <Form.Item
                            label="Full Name"
                            name="name"
                            rules={[{ required: true, message: 'Please enter your full name!' }]}
                        >
                            <Input placeholder="Enter your full name!" />
                        </Form.Item>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Please enter your email!' }]}
                        >
                            <Input placeholder="Enter your email!" />
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please enter your password!' }]}
                        >
                            <Input.Password size='large' placeholder="Enter your password!" />
                        </Form.Item>
                        <Form.Item
                            label="Confirm your password"
                            name="passwordConfirm"
                            rules={[{ required: true, message: 'Please confirm your password!' }]}
                        >
                            <Input.Password size='large' placeholder="Re-enter your password!" />
                        </Form.Item>

                        {error && (
                            <Alert
                                description={error}
                                type="error"
                                showIcon
                                closable
                                className="alert"
                            />
                        )}

                        <Form.Item>
                            <Button
                                type={`${loading ? 'default' : 'primary'}`}
                                size='large'
                                htmlType="submit"
                                className='btn'
                            >
                                {loading ? 'Creating Account...' : 'Create Account'}
                            </Button>
                        </Form.Item>
                        <Form.Item>
                            <Link to={"/login"}>
                                <Button size='large' type="primary" className='btn'>
                                    Sign in
                                </Button>
                            </Link>
                        </Form.Item>
                    </Form>
                    <img src={register} alt="Register" className="auth-image" />
                </Card>
            </Col>
        </Row>
    );
};

export default Register;
