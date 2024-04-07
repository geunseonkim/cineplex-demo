import './App.css';
import { Routes, Route } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Homepage from './pages/Homepage/Homepage';
import MovieDetail from './pages/MovieDetail/MovieDetail';
import Movies from './pages/Movies/Movies';
import NotFound from './pages/NotFound/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';


// '메인' 홈페이지          /
// 무비 '디테일' 페이지      /movies              (?q=search)
// 무비 '전체' '서치' 페이지. /movies/:id
// '추천'                 /movies/:id/recommendation
// '리뷰'                 /movies/:id/reviews

function App() {
  return (
    <div>
      <Routes>
        
        <Route path="/" element={<AppLayout/>}>
          <Route index element={<Homepage/>}/>
          <Route path="movies">
            <Route index element={<Movies/>}/>
            <Route path=":id" element={<MovieDetail/>}/>
          </Route>
        </Route>

        <Route path="*" element={<NotFound/>}></Route>

      </Routes>
    </div>
  );
}

export default App;


// 아래 부분을 sub Route ~ nested route로 바꿔줬다.
// <Route path="/movies" element={<Movies/>}/>
// <Route path="/movies/:id" element={<MovieDetail/>}/>