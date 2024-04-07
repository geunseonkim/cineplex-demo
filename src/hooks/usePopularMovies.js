import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

// api를 호출하는 hook을 react query를 통해.
// hook을 만드는 이점: 나중에 그대로 가져다 쓸 수 있다.
// 컴포넌트를 비즈니스 로직과 UI 로직으로 분리할 수 있다.

const fetchPopularMovies = () => {
    return api.get(`/movie/popular`);
}

export const usePopularMoviesQuery = () => {
    return useQuery({
        queryKey:['movie-popular'],
        queryFn:fetchPopularMovies,
        select:(result)=>result.data // result가 있다면 result의 data만 선택하겠다.
    })
}