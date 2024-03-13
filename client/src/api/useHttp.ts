import { useState, useCallback} from 'react';
import axios from 'axios'; // todo

interface requestType {
    medthod?: string;
    url: string;
    baseURL?: string;
    headers?: object;
    data?: object;
}
interface httpType {
    loading: boolean;
    error: string | null;
    sendRequest: (
        requestConfig: requestType,
        applyData: any,
        errorCallback?: (errorMessage: string) => void,
    ) => Promise<void>
}

const useHttp = (): httpType => {
    const [loading, setLoading ] = useState<boolean>(false);
    const  [error, setError] = useState<string | null>(null);

    const sendRequest = useCallback(
        async(requestConfig, applyData, errorCallback) => {
            setLoading(true);
            setError(null);

            try {
                const response = await axios({
                    method: requestConfig.method ? requestConfig.method : 'GET',
                    url: requestConfig.url,
                    baseURL: requestConfig.baseURL ?
                    requestConfig.baseURL :
                    'http://localhost:3000',
                    headers: requestConfig.headers || {},
                    data: requestConfig.data || {},
                    withCredentials: true
                });
                if (response.status !== 200) {
                    throw new Error('Request failed!');
                  }
                  applyData(response.data);
            }catch(err) {
                const errorMessage = err.response?.data?.message || err.message;
                setError(errorMessage);
                errorCallback(errorMessage);
            }
            setLoading(false);
        },[]
    );
    return {
        loading,
        error,
        sendRequest
      };
}

export default useHttp;