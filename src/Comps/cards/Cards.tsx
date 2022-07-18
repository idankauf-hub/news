import React from 'react'
import Card from '../card/Card';
import { CardsContainer } from './style'

const Cards = () => {
  return (
    <CardsContainer>
        {[...Array(10)].map((_, i) => {
  return <Card></Card>;
})}
    </CardsContainer>
  )
}

export default Cards