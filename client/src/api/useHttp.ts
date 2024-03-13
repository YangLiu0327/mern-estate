import { useState, useCallback} from 'react';
import axios, { AxiosRequestConfig } from 'axios';

interface HttpType {
    loading: boolean;
    error: string | null;
    sendRequest: (requestConfig: AxiosRequestConfig) => Promise<any>;
}

const useHttp = (): HttpType => {
    const [loading, setLoading ] = useState<boolean>(false);
    const  [error, setError] = useState<string | null>(null);

    const sendRequest = useCallback(
        async(requestConfig: AxiosRequestConfig) => {
            setLoading(true);
            setError(null);

            try {
                const response = await axios({
                    baseURL: 'http://localhost:3000',
                    withCredentials: true,
                    ...requestConfig
                });
                setLoading(false);
                return response.data;
            }catch(error) {
                const errorMessage = error.response?.data?.message || error.message || 'An error occurred';
                setError(errorMessage);
                throw new Error(errorMessage);
            } finally {
                setLoading(false);
            }
        },[]
    );
    return {
        loading,
        error,
        sendRequest
      };
}

export default useHttp;