export function Quote({currentQuote, quoteAuthor, citeLink}){ //PROPS ARE ALWAYS PASSED AS AN ARRAY!
  
    return (
    <>
    <main className='main-content'>
    <blockquote>{currentQuote}</blockquote>
    <a href={citeLink}>
      <cite>-{quoteAuthor}</cite>
    </a>
    </main>
    </>
    )
}