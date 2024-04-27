import React from 'react'
import { Row, Col, Typography, Card, Form, Input, Button, Flex , } from 'antd';
import { Link } from 'react-router-dom';
import Loginimg from '../assets/login-img.jpg';


const Login = () => {
const handleLogin = async (values) => {
  console.log(values);
}


  return (
    <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
    <Col>
        <Card className="form-container">
          <Flex>  <img src={Loginimg} alt="Login" className="login-image" /></Flex>
            <Typography.Title level={3} strong className="title">
               Sign In
            </Typography.Title>
            <Typography.Text type="secondary" strong className="slogan">
               
            </Typography.Text>
            <Flex justifyContent="center">
                <Form
                    layout="vertical"
                    onFinish={handleLogin}
                    autoComplete="off"
                    style={{ width: '70%' }}
                >
                  
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
                    
                    <Form.Item>
                        <Button 
                    //   type={'${loading ? "default" : "primary"}'}
                         htmlType="submit" 
                         className='btn'>
               
                            Sign In
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        <Link to={"/"}>
                            <Button size='large' type="primary" htmlType="submit" className='btn'>
                                Create an account
                            </Button>
                        </Link>
                    </Form.Item>
                </Form>
              
            </Flex>
        </Card>
    </Col>
</Row>
  )
}

export default Login
