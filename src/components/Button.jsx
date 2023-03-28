import React from 'react'
import getRandomPhrase from '../utils/getRandomPhrase';
import phrase from '../utils/phrases.json'
const Button = ({setRandomPhrase, setNumberImg}) => {
 
const handleClick = () =>{
  const newPhrase = getRandomPhrase(phrase)
setRandomPhrase(newPhrase)
setNumberImg(getRandomPhrase([1,2,3,4]))
}
  return (
    <>
      <button onClick={handleClick}>Ver Otro</button>
    </>
  
  )
}

export default Button
