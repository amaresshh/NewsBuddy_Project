import { makeStyles } from '@mui/styles'
import './mediaQuery.css'

export default makeStyles(() => ({
  container: {
    backgroundColor: '#81C6E8',
    // backgroundColor: 'yellow',
    minHeight: '100vh',
    minWidth: '100vw',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '400',
    overflowX: 'hidden',
  },
  section: {
    backgroundColor: 'white',
    padding: '1.5rem',
    minHeight: '400px',
    minWidth: '800px',
    // maxWidth: '80%',
    border: '2px solid #00ABB3',
    borderRadius: '10px',
    display: 'flex',
  },
  leftSide: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '10px',
    // backgroundColor: 'red',
  },
  rightSide: {
    // backgroundColor: 'yellow',
    width: '100%',
    padding: '0 20px',
    borderLeft: '1px solid #B2B2B2',
    // borderRadius: '10px',
  },
  image: {
    height: '300px',
    marginTop: 'auto',
  },
  label: {
    color: 'grey',
  },
}))
