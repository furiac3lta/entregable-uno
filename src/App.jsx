import './App.css'
import Button from './components/Button'
import Phrases from './components/Phrases'
import phrases from './utils/phrases.json'
import getRandomPhrase from './utils/getRandomPhrase';
import { useState } from 'react';
import Author from './components/Author';

const imgs = [1,2,3,4]

function App() {

const [randomPhrase, setRandomPhrase] = useState(getRandomPhrase(phrases))
const [numberImg, setNumberImg] = useState(getRandomPhrase(imgs))

const appStyle = {
  backgroundImage: `url('/background/fondo${numberImg}.jpg')`  
}

  return (
    <div style={appStyle}className="App">
      <h1 className='title'>GALLETAS DE LA FORTUNA</h1>
     <Phrases ramdomPhrase = {randomPhrase} />
     <Button setRandomPhrase = {setRandomPhrase} setNumberImg={setNumberImg}/>
     <Author ramdomPhrase = {randomPhrase} />
    </div>
  )
}

export default App
