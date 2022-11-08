import { makeStyles } from '@mui/styles'

export default makeStyles({
  media: {
    height: 200,
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100% !important',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    // border: '1px solid grey',
    borderRadius: '8px !important',
    boxShadow: '1px 1px 15px 1px #999999 !important',
  },
  activeCard: {
    borderBottom: '10px solid #22289a',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px !important',
  },
  title: {
    marginLeft: '10px !important',
    marginRight: '10px !important',
    textOverflow: 'ellipsis !important',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  description: {
    textAlign: 'justify',
    paddingTop: '0 !important',
    paddingBottom: '0 !important',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 3,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  btn: {
    backgroundColor: '#3AB4F2',
    padding: '4px 8px',
    color: 'white !important',
    borderRadius: 100,
    fontSize: '12px !important',
    fontWeight: 'bold !important',
  },
})
