import React, { useEffect, useState } from 'react'
import SearchBar from '../Components/SearchBar'
import CardComponent from '../Components/CardComponent';

const Homepage = () => {
   const API_KEY = "bf3bd40d";
  // const API_KEY = process.env.API_KEY;

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      const response = await fetch(`http://www.omdbapi.com/?s=movie&apikey=${API_KEY}`);
      const data = await response.json();
      if (data.Search) {
          console.log(data.Search)
         setMovies(data.Search); // Log popular movies
     
      } else {
        console.error("Error fetching movies:", data.Error);
        return [];
      }
    };
    
    fetchPopularMovies();
  },[])



  useEffect(() => {
    const fetchSearchedMovies = async () => {
      if (!searchTerm) {
        setSearchedMovies([]); // Clear search results if input is empty
        return;
      }
      setLoading(true); 
      try {
        const response = await fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`);
        const data = await response.json();
        console.log(data.Search);
        if (data.Search) {
          setSearchedMovies(data.Search);
        } else {
          setSearchedMovies([]); // Clear results if no matches
          
        }
      } catch (error) {
        console.error("Error fetching searched movies:", error);
        setLoading(false)
      }finally {
        setLoading(false); // Always stop loading after fetch
      }
    };

    const timeoutId = setTimeout(fetchSearchedMovies, 500); // Debounce API calls
    return () => clearTimeout(timeoutId); // Cleanup timeout
  }, [searchTerm]);


  return (
    <div className='main'>
      <h1>Movie Search App</h1>
        <SearchBar onSearch={setSearchTerm}/>
     
        {loading ? (
        <p>Loading...</p>
      ) :  (<div className="movie-box">
       
        {searchTerm ? (
          searchedMovies.length > 0 ? (
            searchedMovies.map((movie) => (
              <div key={movie.imdbID} className="card-container">
                <CardComponent
                  title={movie.Title}
                  year={movie.Year}
                  id={movie.imdbID}
                  type={movie.Type}
                  img={movie.Poster}
                />
              </div>
            ))
          ) : (
            <p>No results found.</p>
          )
        ) : (
          movies.map((movie) => (
            <div key={movie.imdbID} className="card-container">
              <CardComponent
                title={movie.Title}
                year={movie.Year}
                id={movie.imdbID}
                type={movie.Type}
                img={movie.Poster}
              />
            </div>
          ))
        )}
      </div>)}
    </div>
  )
}

export default Homepage
