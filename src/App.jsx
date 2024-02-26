import { Footer } from './Components/Footer.jsx'

import { useState, useEffect } from 'react'
import { fetchApi } from './api/data'
import { fetchData } from './api/data'
import {Quote} from './Components/Quote.jsx'
import { Navbar } from './Components/Navbar.jsx'

import './App.css'

function App() {

  const [currentQuote, changeQuote] = useState(['', ''])

  const generateWikiLink = (currentQuote) => {
    const LINK_PREFIX = `https://en.wikipedia.org/wiki/`
    return `${LINK_PREFIX}${currentQuote[1]}`
  }
  const citeLink = generateWikiLink(currentQuote);

  useEffect(() => {
    // fetchApi()
    // .then(res => res) //resolved?
    // .then(data => {
    //   const quote = data[0];
    //   changeQuote([quote.quote, quote.author]) // since it returns an array 

    // }) //handle recieved data
    // .catch(err => console.log(err))
    
    //much better syntax:
    // const fetchData = async () => {
    //   try {
    //     const data = await fetchApi();
    //     const quote  = data[0];
    //     changeQuote([quote.quote, quote.author])
    //   } catch(err) {
    //     console.log(err);
    //   }
    // };

    fetchData(changeQuote); //callback

  }, []) // Never forget about this arr!

  return (
    <div className='App'>
      
      <Navbar/>
      <Quote currentQuote={currentQuote[0]} quoteAuthor={currentQuote[1]} citeLink={citeLink} changeFunc={() => fetchData(changeQuote)}/>
      <Footer/>
    </div>
  )
}

export default App
