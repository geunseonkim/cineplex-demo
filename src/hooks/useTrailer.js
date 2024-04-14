import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchTrailer = ({id}) => {
    return api.get(`/movie/${id}/videos?`)
}

export const useTrailerQuery = ({id}) => {
    return useQuery ({
        queryKey: ['movie=trailer', id],
        queryFn: ()=>fetchTrailer({id}),
        select: (result)=>result.data
    })
}