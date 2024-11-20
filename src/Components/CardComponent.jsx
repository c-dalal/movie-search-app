import React from 'react'
import { useNavigate } from 'react-router-dom';

const CardComponent = ({title,type,id,year,img}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${id}`); 
  };

  return (
    <>
    <div className='card-component'  onClick={handleClick}>
          <img src={img}/>
      <span className='movie-title'>{title}</span>
      <span className='movie-release-year'>Release Year : {year}</span>
      <span className='movie-type'>Type : {type}</span>
 
 
    </div>
    </>
  )
}

export default CardComponent
