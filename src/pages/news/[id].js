import PublicLayout from '@/components/layout/PublicLayout';
import Head from 'next/head';
import React from 'react';
import axios from 'axios';
import apiConfig from '@/constants/apiConfig';
function NewsDetail({ news }) {
    return (
        <PublicLayout>
            <Head>
                <title>Demo News Detail</title>
            </Head>
            <div>Demo</div>
        </PublicLayout>
    );
}

export async function getStaticPaths() {
    // lấy danh sách các tin tức
    const response = await axios.get(apiConfig.news.getList.baseURL);
    const newsList = response.data.data.data;
    // tạo danh sách các đường dẫn cho các trang chi tiết
    const paths = newsList.map((news) => ({
        params: { id: news.id.toString() },
    }));
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    try {
        // lấy dữ liệu của tin tức có slug là params.slug
        const response = await axios.get(`${apiConfig.news.getById.baseURL}/${params.id}`);
        let news = {};
        if (response.data.result && response.data.data) news = response.data.data;
        return {
            props: {
                news,
            },
        };
    } catch (error) {
        console.error(error);
        return {
            props: {
                news: {},
            },
        };
    }
}

export default NewsDetail;
