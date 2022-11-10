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
    justifyContent: 'center',
    alignItems: 'center',
  },
  newsLogo: {
    height: '5vw',
    width: '5vw',
    // margin: '3% 0',
    outline: 'none',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '4vw',
    marginLeft: '20px',
    marginBottom: '0',
    // padding: '0',
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '90%',
    backgroundColor: '#5F9DF7',
    padding: '10px',
    marginTop: '30px',
    marginBottom: '40px',
    borderRadius: '10px',
    borderLeft: '7px',
    borderLeftColor: 'blue',
    borderLeftStyle: 'solid',
    borderRight: '7px',
    borderRightStyle: 'solid',
    borderRightColor: 'blue',
  },
}))
