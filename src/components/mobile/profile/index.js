import React, { useState } from 'react';
import { Button, Card, Col, Form, Row } from 'antd';
import InputTextField from '@/components/common/InputTextField';
import CropImageField from '@/components/common/CropImageField';
import apiConfig from '@/constants/apiConfig';
import { sendRequest } from '@/services/api';
import { showErrorMessage, showSucsessMessage } from '@/services/notifyService';
import styles from './index.module.scss';
import { useSession } from 'next-auth/react';
const ProfileMobile = ({ data }) => {
    const { profile } = data;
    const session = useSession();
    const [loading, setLoading] = useState(false);
    const [avatar, setAvatar] = useState(profile.avatar || '');
    const handleSubmit = async (values) => {
        const res = await sendRequest(
            {
                ...apiConfig.account.updateProfile,
                ignoreAuth: false,
            },
            {
                data: {
                    ...values,
                    id: profile.id,
                    avatarPath: avatar,
                },
            },
            null,
            session.data.user.accessToken
        );
        if (res.data.result) {
            showSucsessMessage(res.data.message);
        } else showErrorMessage(res.data.message);
    };

    const handleUpload = async (file, onSuccess, onError) => {
        setLoading(true);
        const res = await sendRequest(
            {
                ...apiConfig.file.upload,
                ignoreAuth: false,
            },
            {
                data: {
                    file,
                    type: 'AVATAR',
                },
            },
            null,
            session.data.user.accessToken
        );
        if (res.data.result) {
            setAvatar(res.data.data.filePath);
            setLoading(false);
        }
    };
    return (
        <section className="container" style={{ display: 'flex', justifyContent: 'center' }}>
            <Form
                onFinish={handleSubmit}
                // ref={this.formRef}
                initialValues={profile}
                layout="vertical"
                // onValuesChange={this.onValuesChange}
                style={{ width: '30rem', marginTop: '2rem' }}
                className={styles.form}
            >
                    <Row gutter={[16, 0]} justify="center">
                        <Col span={4}>
                            <CropImageField
                                loading={loading}
                                uploadFile={handleUpload}
                                name="avatar"
                                imageUrl={avatar}
                            />
                        </Col>
                    </Row>
                    <Row justify="center">
                        <Col span={22}>
                            <InputTextField size='large' name="email" label="Email" />
                        </Col>
                    </Row>

                    <Row justify="center">
                        <Col span={22}>
                            <InputTextField  size='large' name="username" label="User Name" />
                        </Col>
                    </Row>
                    <Row justify="center">
                        <Col span={22}>
                            <InputTextField  size='large' name="phone" label="Phone" />
                        </Col>
                    </Row>
                    <Row justify="center">
                        <Col span={22}>
                            <InputTextField  size='large' name="fullName" label="Full Name" required />
                        </Col>
                    </Row>
                    <Row justify="center">
                        <Col span={22}>
                            <Button
                                // loading={loading}
                                className="profile-form-button"
                                type="primary"
                                htmlType="submit"
                                style={{ width: '100%', height:'3rem', fontSize:'1.5rem' }}
                                // icon={<SaveOutlined />}
                            >
                                Save
                            </Button>
                        </Col>
                    </Row>
            </Form>
        </section>
    );
};

export default ProfileMobile;
