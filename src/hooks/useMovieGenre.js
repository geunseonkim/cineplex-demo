import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieGenre = () => {
    return api.get(`/genre/movie/list`)
}

export const useMovieGenreQuery = () => {
    return useQuery({
        queryKey:['movie-genre'],
        queryFn: fetchMovieGenre,
        select: (results) => results.data.genres,
        staleTime: 300000 // 5분. 자주 호출이 될 필요가 없기 때문!
    })
}