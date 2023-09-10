import React from 'react'
import Star from '../Star/Star'
import { IFilm } from '../../types'

interface IStarProps {
  count: number
}

export default function Stars(props: IStarProps) {
  const {count} = props;
  return (
    //{...Array(count).map( (star,index) => <Star key={index}/> )}
    <div className='stars'>
    {[...Array(count)].map( (star,index) => <Star/> )}
    </div>
  ) 
}
