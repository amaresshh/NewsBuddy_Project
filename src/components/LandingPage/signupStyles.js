import { makeStyles } from '@mui/styles'

export default makeStyles(() => ({
  container: {
    // backgroundColor: '#81C6E8',
    backgroundColor: '#00ABB3',
    minHeight: '100vh',
    minWidth: '100vw',
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
    // backgroundColor: 'red',
  },
  rightSide: {
    // backgroundColor: 'yellow',
    width: '100%',
    padding: '0 20px',
    borderRight: '1px solid #B2B2B2',
    marginRight: '5px',
    // borderRadius: '10px',
  },
  image: {
    height: '300px',
    marginTop: 'auto',
  },
}))
