import "./App.scss";
import { BrowserRouter ,Routes, Route} from "react-router-dom";
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import MovieDetails from './component/MovieDetails/MovieDetail';
import PageNotFound from './component/Pagenotfound/PageNotFound';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <div className="container">
      <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/movie/:imdbID" element={<MovieDetails/>}/>
        <Route path="/pagenotfound" element={<PageNotFound/>}/>
        
      </Routes>
      </div>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
