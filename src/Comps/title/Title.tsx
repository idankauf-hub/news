import React from 'react'
import { TitleText } from './style'

interface TitleProps{
    city:string;
}
const Title: React.FC<TitleProps> = ({city}) => {
  return (
    <TitleText>Top Headlines in {city}</TitleText>
  )
}

export default Title