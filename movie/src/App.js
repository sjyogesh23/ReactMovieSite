import './App.css';
import logoimg from './images/logoimg.png';
import { useState, useEffect } from 'react';
import MovieBox from './components/MovieBox';
const App = () => {
 //7a031cdd
 const api = 'https://www.omdbapi.com?apikey=7a031cdd';
 
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

 const searchMovies = async(title) =>{
  const response = await fetch(`${api}&s=${title}`)
  const data = await response.json();
  setMovies(data.Search);
 } 

  useEffect(()=>(
    searchMovies("Spiderman")
  ),[])



  useEffect(()=>(
    settheme("Light")
  ),[])

  let [theme,settheme] = useState();

  return (

    <div className="app">
      <div className='(theme==="Light")?"Darktheme":"Lighttheme" header'>
        <img className="logo" src={logoimg} alt=''/>


        <div className="searchbox">
          <input className='searchinput' type='text' placeholder='Search for movie'
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}></input>
          <button className='searchlogo' alt="search" onClick={()=>searchMovies(searchTerm)}>Search</button>
        </div>


        <button className='themebtn'onClick={() => settheme((prev) => (prev==="Light")?"Dark":"Light")}>{theme}</button>
      </div>
      

      <div className={(theme==="Light")?"Darktheme":"Lighttheme"}>
        
        {
          movies?.length>0?(
            <div className='container'>{
              movies.map((movie)=>(<MovieBox movie={movie}/>))
            }
            </div>
          ) :(
            <div>
              <h2>No movies founded</h2>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default App;
