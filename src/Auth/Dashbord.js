import React from 'react'
import {Avatar, Button, Card, Flex, Typography} from 'antd';
import{useAuth} from '../Auth/Contexts/AuthContext';
import UserOutlined from '@ant-design/icons/UserOutlined';
import './Dashbord.css'
const Dashbord = () => {

    const {userData, logout} = useAuth();
    const HandleLogout = async () => {
        await logout();
    };
   

return(
    <Card className='profile-card'>
        <Flex vertical gap="small" align='center'>
            <Avatar size={150} icon={<UserOutlined />}  className='avatar'/>
            <Typography.Title level={2} 
            strong 
            className='username'
            >
                {userData.name}
            </Typography.Title>
<Typography.Text type="secondary" strong className='email'>
    {userData.email} 
    </Typography.Text>
<Typography.Text type="secondary" strong className='role'>
    Role :{ userData.role}
    </Typography.Text>


            <Button onClick={HandleLogout}></Button>
        </Flex>
    </Card>
)
}
export default Dashbord