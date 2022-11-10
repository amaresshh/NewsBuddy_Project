import React, { useEffect, useState } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
import NewsCards from './components/NewsCards/NewsCards'
// import classNames from 'classnames'
import useStyles from './styles.js'
import researchImg from './Images/Logo/logo.jpg'
import wordsToNumbers from 'words-to-numbers'
import NavBar from './components/LandingPage/NavBar'
// import { Alert } from '@mui/material'

const alanKey =
  'c4db81d3452c51abf7f3b28e2026db8c2e956eca572e1d8b807a3e2338fdd0dc/stage'

const AlanNews = () => {
  const classes = useStyles()

  const [newsArticles, setNewsArticles] = useState([])
  const [activeArticle, setActiveArticle] = useState(-1)

  // window.onload(alert('invoked'))

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        if (command === 'newHeadlines') {
          setNewsArticles(articles)
          setActiveArticle(-1)
        } else if (command === 'highlight') {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1)
        } else if (command === 'open') {
          const parsedNumber =
            number.length > 2 ? wordsToNumbers(number, { fuzzy: true }) : number
          const article = articles[parsedNumber - 1]

          if (parsedNumber > 20) {
            alanBtn().playText('Please try that again.')
          } else if (article) {
            window.open(articles[number - 1].url, '_blank')
            alanBtn().playText('Opening...')
          }

          window.open(articles[number].url, '_blank')
        }
      },
    })
  }, [])

  return (
    <div className={classes.container}>
      <NavBar />
      <div className={classes.logoContainer}>
        <img src={researchImg} className={classes.alanLogo} alt="Logo Image" />
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  )
}

export default AlanNews
