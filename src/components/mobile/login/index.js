import React from 'react';
import { Button, Col, Form, Row } from 'antd';

import { UserOutlined, LockOutlined } from '@ant-design/icons';

import styles from './index.module.scss';
import InputTextField from '@/components/common/InputTextField';
import { brandName } from '@/constants';
import { Typography } from 'antd';
import classNames from 'classnames';
const { Title } = Typography;

const LoginMobile = ({ onFinish, loading }) => {
    return (
        <div className={styles.loginPage}>
            <div className={classNames(styles.loginForm, 'loginForm')}>
                <Title level={1}>LOGIN</Title>
                <Form
                    name="login-form"
                    onFinish={onFinish}
                    initialValues={{
                        username: 'son',
                        password: 'v3[rrQ',
                    }}
                    layout="vertical"
                >
                    <Row style={{ marginBottom: 25 }}>
                        <Col span={24}>
                            <InputTextField
                                name="username"
                                inputProps={{
                                    prefix: <UserOutlined />,
                                    style: {
                                        height: '80px',
                                        fontSize: '32px',
                                    },
                                }}
                                // label={intl.formatMessage(message.username)}
                                placeholder="Username"
                                size="large"
                                required
                            />
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: 35 }}>
                        <Col span={24}>
                            <InputTextField
                                name="password"
                                inputProps={{
                                    prefix: <LockOutlined />,
                                    style: {
                                        height: '80px',
                                        fontSize: '32px',
                                    },
                                }}
                                // label={intl.formatMessage(message.password)}
                                placeholder="Password"
                                size="large"
                                required
                                type="password"
                            />
                        </Col>
                    </Row>

                    <Button
                        loading={loading}
                        type="primary"
                        size="large"
                        htmlType="submit"
                        style={{ width: '100%', height: 80, fontSize: 32, backgroundColor: '#9f224e' }}
                    >
                        Login
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default LoginMobile;
