import React from 'react';
import { Button, Form } from 'antd';

import { UserOutlined, LockOutlined } from '@ant-design/icons';

import styles from './index.module.scss';
import InputTextField from '@/components/common/InputTextField';
import { brandName } from '@/constants';
import { Typography } from 'antd';
const { Title } = Typography;

const Login = ({ onFinish, loading }) => {
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginForm}>
                <Title level={3}>LOGIN</Title>
                <Form
                    name="login-form"
                    onFinish={onFinish}
                    initialValues={{
                        username: 'test',
                        password: 'admin123654',
                    }}
                    layout="vertical"
                >
                    <InputTextField
                        name="username"
                        inputProps={{ prefix: <UserOutlined /> }}
                        // label={intl.formatMessage(message.username)}
                        placeholder="Username"
                        size="large"
                        required
                    />
                    <InputTextField
                        name="password"
                        inputProps={{ prefix: <LockOutlined /> }}
                        // label={intl.formatMessage(message.password)}
                        placeholder="Password"
                        size="large"
                        required
                        type="password"
                    />

                    <Button
                        loading={loading}
                        type="primary"
                        size="large"
                        htmlType="submit"
                        style={{ width: '100%', backgroundColor: '#9f224e' }}
                    >
                        Login
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Login;
