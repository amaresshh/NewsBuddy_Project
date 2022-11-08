import React from 'react'
import useStyles from './styles.js'
import NewsCard from '../NewsCard/NewsCard'
import { Grow, Grid, Typography } from '@mui/material'

const infoCards = [
  {
    color: '#1565c0',
    title: 'News by Categories',
    info:
      'Business, Entertainment, General, Health, Science, Sports, Technology',
    text: 'Give me the latest Technology Articles',
  },
  {
    color: '#4527a0',
    title: 'Articles by Terms',
    info: 'Bitcoin, Web 3.0, Endoplasty...',
    text: "What's up with Bitcoin",
  },
  {
    color: '#283593',
    title: 'Articles by Sources',
    info: 'BBC News, Buzzfeed, ABC News, Wired...',
    text: 'Give me the news from ABC News',
  },
]

const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles()

  if (!articles.length) {
    return (
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
            <div
              className={classes.card}
              style={{ backgroundColor: '#00838f' }}
            >
              <Typography variant="h5">Talk to NewsBuddy!</Typography>
              <Typography variant="h6">
                {/* <strong>Some Sample Commands </strong> */}
                {/*   <div style={{ textAlign: 'justify' }}>
                  <ol>
                    <li>What's up with Tesla?</li>
                    <li>Open Article #4</li>
                    <li>Good job!</li>
                    <li>Go back to the homepage</li>
                  </ol>
                </div> */}
              </Typography>
              <Typography variant="h6">
                Try saying: <br />
                <i>Give me the latest Sports news.</i>
              </Typography>
            </div>
          </Grid>
          {infoCards.map((infoCard) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className={classes.infoCard}
            >
              <div
                className={classes.card}
                style={{ backgroundColor: infoCard.color }}
              >
                <Typography variant="h5">{infoCard.title}</Typography>
                {infoCard.info ? (
                  <Typography variant="h6">
                    <strong>{infoCard.title.split(' ')[2]}</strong>
                    <br />
                    {infoCard.info}
                  </Typography>
                ) : null}
                <Typography variant="h6">
                  Try saying: <br />
                  <i>{infoCard.text}</i>
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    )
  }

  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
            <NewsCard article={article} activeArticle={activeArticle} i={i} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  )
}

export default NewsCards
