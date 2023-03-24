import apiConfig from '@/constants/apiConfig';
import { getCacheAccessToken } from '@/services/userService';
import { selectProfile, setProfile } from '@/stores/slices/authSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useFetch from './useFetch';

function useAuth() {
    const dispatch = useDispatch();
    const profile = useSelector(selectProfile);
    const token = getCacheAccessToken();

    const { execute, loading } = useFetch(apiConfig.account.getProfile, {
        immediate: false,
        mappingData: ({ data }) => data,
    });

    useEffect(() => {
        if (!profile && token) {
            execute({
                onCompleted: ({ data }) => {
                    console.log('data', data);
                    dispatch(setProfile(data));
                },
                onError: () => {
                    console.log('error');
                    // dispatch(setProfile(null));
                },
            });
        }
    }, [dispatch, execute, profile, token]);

    return { profile, loading: loading, isAuthenticated: !!profile, token };
}

export default useAuth;
