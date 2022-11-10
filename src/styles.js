import { makeStyles } from '@mui/styles'

export default makeStyles((theme) => ({
  container: {
    backgroundColor: '#CDF0EA',
    // backgroundColor: 'red',
    minHeight: '100vh',
    marginBottom: '20px',
    backgroundRepeat: 'repeat-x',
    paddingBottom: '40px',
  },
  logoContainer: {
    padding: '0 5%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    // backgroundColor: 'red !important',
  },
  alanLogo: {
    height: '25vh',
    width: '50vh',
    borderRadius: '38% !important',
    padding: '0 5%',
    margin: '3% 0',
  },
}))
