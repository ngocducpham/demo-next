import apiConfig from '@/constants/apiConfig';
import { sendRequest } from '@/services/api';
import { getToken } from 'next-auth/jwt';

export default async function handler(req, res) {
    const { accessToken } = await getToken({ req });
    let request;
    try{
        request = await sendRequest(
            {
                baseURL: req.query.url,
                method: req.method,
                headers: {
                    'Content-Type': req.headers['content-type'],
                    Authorization: `Bearer ${accessToken}`,
                },
                ignoreAuth: true,

            },
            {
                data: req.body,
            },
        );
    }catch{
        res.status(401).json({ message: 'Unauthorized' });
    }
    res.status(request.status).json(request.data);
}
