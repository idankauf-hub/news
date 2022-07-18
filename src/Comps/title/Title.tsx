import React from 'react'
import { TitleText } from './style'

interface TitleProps{
    subject:string;
    city:string;
}
const Title: React.FC<TitleProps> = ({subject,city}) => {
  return (
    <TitleText>{subject} in {city}</TitleText>
  )
}

export default Title