import { Button, DatePicker, Form, InputNumber, Select, Slider, Switch } from 'antd';
import { SmileFilled } from '@ant-design/icons';
import Link from 'next/link';
import { accessRouteTypeEnum } from '@/constants';
import { getSession, signOut, useSession } from 'next-auth/react';
import apiConfig from '@/constants/apiConfig';
import withAuth from '@/utils/withAuth';

const FormItem = Form.Item;

const content = {
    marginTop: '100px',
};

function Home() {
    const onDatePickerChange = (date, dateString) => {
        console.log(date, dateString);
    };

    return (
        <div style={content}>
            <div className="text-center mb-5">
                <Link href="#" className="logo mr-0">
                    <SmileFilled style={{ fontSize: 48 }} />
                </Link>

                <p className="mb-0 mt-3 text-disabled">Welcome to the world !</p>
            </div>
            <div>
                <Form layout="horizontal" size={'large'} labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
                    <FormItem label="Input Number">
                        <InputNumber min={1} max={10} style={{ width: 100 }} defaultValue={3} name="inputNumber" />
                    </FormItem>

                    <FormItem label="Switch">
                        <Switch defaultChecked />
                    </FormItem>

                    <FormItem label="Slider">
                        <Slider defaultValue={70} />
                    </FormItem>

                    <FormItem label="Select">
                        <Select
                            defaultValue="lucy"
                            style={{ width: 192 }}
                            options={[
                                {
                                    value: 'jack',
                                    label: 'Jack',
                                },
                                {
                                    value: 'lucy',
                                    label: 'Lucy',
                                },
                                {
                                    value: 'disabled',
                                    disabled: true,
                                    label: 'Disabled',
                                },
                                {
                                    value: 'Yiminghe',
                                    label: 'yiminghe',
                                },
                            ]}
                        />
                    </FormItem>

                    <FormItem label="DatePicker">
                        <DatePicker showTime onChange={onDatePickerChange} />
                    </FormItem>
                    <FormItem style={{ marginTop: 48 }} wrapperCol={{ offset: 8 }}>
                        <Button  htmlType="submit" onClick={signOut}>
                            Sign Out
                        </Button>
                        <Button
                            type="primary"
                            style={{ marginLeft: 8 }}
                            onClick={() => {
                                fetch(`/api?url=${apiConfig.account.getProfile.baseURL}`, {
                                    method: 'GET',
                                    headers: apiConfig.account.getProfile.headers,
                                })
                                    .then((res) => res.json())
                                    .then((data) => console.log(data));
                            }}
                        >
                            Call request
                        </Button>
                    </FormItem>
                </Form>
            </div>
        </div>
    );
}

export default Home;

export const getServerSideProps = withAuth(accessRouteTypeEnum.REQUIRE_LOGIN, ({ session }) => {
    return {
        props: {
            session,
        },
    };
});
