import React, { useState } from 'react';
import { Button, Card, Col, Form, Row } from 'antd';
import InputTextField from '@/components/common/InputTextField';
import CropImageField from '@/components/common/CropImageField';
import apiConfig from '@/constants/apiConfig';
import { sendRequest } from '@/services/api';
import { showErrorMessage, showSucsessMessage } from '@/services/notifyService';
const Profile = ({ data }) => {
    const { profile, session } = data;
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
            session
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
            session
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
                style={{ width: '400px' }}
            >
                <Card title="Profile" bordered={false}>
                    <Row gutter={[16, 0]}>
                        <Col span={22}>
                            <CropImageField
                                loading={loading}
                                uploadFile={handleUpload}
                                name="avatar"
                                label="Avatar"
                                imageUrl={avatar}
                            />
                        </Col>
                    </Row>
                    <Col span={22}>
                        <InputTextField name="email" label="Email" />
                    </Col>
                    <Col span={22}>
                        <InputTextField name="username" label="User Name" />
                    </Col>
                    <Col span={22}>
                        <InputTextField name="phone" label="Phone" />
                    </Col>
                    <Col span={22}>
                        <InputTextField name="fullName" label="Full Name" required />
                    </Col>
                    <Col span={22}>
                        <Button
                            // loading={loading}
                            // className="profile-form-button"
                            type="primary"
                            htmlType="submit"
                            style={{ width: '100%' }}
                            // icon={<SaveOutlined />}
                        >
                            Save
                        </Button>
                    </Col>
                </Card>
            </Form>
        </section>
    );
};

export default Profile;
