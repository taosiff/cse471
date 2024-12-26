import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useAllPendingRequests = () => {
    const {data : allPendingRequests = [], refetch: allPendingRequestsRefetch, isLoading} = useQuery({
        queryKey: ['allPendingRequests'],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/all-pending-events`);
            return res.data
        },
    }
    )

    return [allPendingRequests, allPendingRequestsRefetch, isLoading]
};

export default useAllPendingRequests;