import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  console.log(id);
  const API_KEY = "bf3bd40d";
  const[detail,setDetail] = useState(null);

  useEffect(() => {
      async function fetchDetails(){
       try {
         const response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`);
         
         const data = await response.json();
         console.log(data)
         setDetail(data);
       } catch (error) {
        console.error("Error fetching movie details:", error);
      }
      }

      fetchDetails()
  },[id])


  if (!detail) {
    return <div>Loading...</div>;
  }


  return (
    <div className='movie-details'>
       <h1>{detail.Title}</h1>
      <img src={detail.Poster} alt={detail.Title} />
      <p><strong>Year:</strong> {detail.Year}</p>
      <p><strong>Genre:</strong> {detail.Genre}</p>
      <p><strong>Director:</strong> {detail.Director}</p>
      <p><strong>Plot:</strong> {detail.Plot}</p>
      <p><strong>Actors:</strong> {detail.Actors}</p>
     
    </div>
  );
}

export default MovieDetails
