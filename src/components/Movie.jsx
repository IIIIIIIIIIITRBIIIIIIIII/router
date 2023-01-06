import React from 'react'
import { Link } from 'react-router-dom'

const Movie = () => {
  const movies = [{id: 1, title: 'breaking bad', img: 'https://m.media-amazon.com/images/M/MV5BYTU3NWI5OGMtZmZhNy00MjVmLTk1YzAtZjA3ZDA3NzcyNDUxXkEyXkFqcGdeQXVyODY5Njk4Njc@._V1_.jpg' },
  {id: 2, title: 'jhon wick', img: 'https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg' },
{id: 3, title:'peaky blindrs', img:'https://fr.web.img3.acsta.net/pictures/22/06/07/11/57/5231272.jpg'}, 
{id: 4, title: 'pulp fiction', img: 'https://www.ecranlarge.com/uploads/image/001/121/7p8x4u3o3p1jzmbqny3zaloby3m-861.jpg'}]
  return (
    <div>

      
      <ul>
      {movies.map((el,i)=>
      <Link to="/Moviedes" state={el}>
        <li >
          <img src={el.img} alt="hi" />
          <h2>{el.title}</h2>
        </li>
        </Link>
        )}
        
       
      </ul>
    </div>
  )
}

export default Movie