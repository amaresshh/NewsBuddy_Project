import React, { useEffect, useState } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
import NewsCards from './components/NewsCards/NewsCards'
// import classNames from 'classnames'
import useStyles from './styles.js'
import NewsLogo from './Images/NewsLogo.png'
import wordsToNumbers from 'words-to-numbers'
import NavBar from './components/LandingPage/NavBar'
import { useNavigate, Link } from 'react-router-dom'

const alanKey =
  'c4db81d3452c51abf7f3b28e2026db8c2e956eca572e1d8b807a3e2338fdd0dc/stage'

const AlanNews = () => {
  const classes = useStyles()
  const navigate = useNavigate()

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
        } else if (command === 'bitcoin') {
          window.open('./bitcoindata')
        } else if (command === 'contact') {
          window.open('./contact')
        }
      },
    })
  }, [])

  return (
    <div className={classes.container}>
      <NavBar />
      <div className={classes.logoContainer}>
        <div className={classes.box}>
          <img src={NewsLogo} className={classes.newsLogo} alt="Logo Image" />
          <p className={classes.text}>Search Latest News !</p>
        </div>
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  )
}

export default AlanNews
