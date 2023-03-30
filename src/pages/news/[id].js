import React from 'react';
import axios from 'axios';
import apiConfig from '@/constants/apiConfig';
import NewDetail from '@/components/desktop/new';
import RenderContext from '@/components/common/RenderContext';
import PublicLayout from '@/components/layout/PublicLayout';
import NewDetailMobile from '@/components/mobile/new';
function NewsDetailPage({ ...props }) {
    return (
        <RenderContext
            title="New Detail"
            mobile={{ device: NewDetailMobile }}
            desktop={{ device: NewDetail }}
            {...props}
        />
    );
}

NewsDetailPage.getLayout = function getLayout(page) {
    return <PublicLayout>{page}</PublicLayout>;
};

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

export async function getStaticProps(context) {
    const { params } = context;
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
export default NewsDetailPage;
