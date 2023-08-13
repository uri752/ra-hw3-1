import React from 'react'
import Star from './../Star/Star'

export default function Stars(props) {
  const {count} = props;
  return (
    //{...Array(count).map( (star,index) => <Star key={index}/> )}
    <div className='stars'>
    {[...Array(count)].map( (star,index) => <Star/> )}
    </div>
  ) 
}
