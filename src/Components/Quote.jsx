export function Quote({currentQuote, quoteAuthor, citeLink, changeFunc}){ //PROPS ARE ALWAYS PASSED AS AN ARRAY!
  
    //TODO: Display a background with low opacity video behind the quote

    return (
    <>
    <main className='main-content'>
    <blockquote>{currentQuote}</blockquote>
    <a href={citeLink}>
      <cite>-{quoteAuthor}</cite>
    </a>

    <button className="quote-btn" onClick={changeFunc} >Generate New Quote</button>
    </main>
    </>
    )
}
