import fbSvg from 'Assets/svgs/fbSvg.svg';
import googleSvg from 'Assets/svgs/googleSvg.svg';

const { makeStyles } = require('@material-ui/core');

// eslint-disable-next-line import/no-anonymous-default-export
const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  sectionReg: {
    position: 'relative',
    minHeight: '100vh',
    backgroundColor: '#e2eefb',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 20px',
  },

  containerReg: {
    position: 'relative',
    width: 800,
    height: 550,
    background: '#fff',
    boxShadow: '0 15px 50px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    pointerEvents: 'initial',
    borderRadius: 20,
    [theme.breakpoints.down('sm')]: {
      width: '400px',
    },
  },

  user: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    // alignItems: 'center',
    height: '100%',
    display: 'flex',
    backgroundColor: theme.palette.primary.main,

    //   background: `url(${bg})`,
  },

  imgBx: {
    position: 'relative',
    width: '58%',
    height: '100%',
    textAlign: 'center',
    background: 'transparent',
    marginTop: 30,
    color: '#fff',
    backgroundImage: 'url(/static/media/login.8cc1ab77.svg)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    //   transition: '2.5s',
    '& img': {
      top: 0,
      left: 0,
      width: '88%',
      height: '100%',
      position: 'absolute',
      objectFit: 'contain',
      padding: 27,
    },

    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },

  formBx: {
    [theme.breakpoints.down('sm')]: { width: '100%' },

    width: '32%',
    display: 'flex',
    padding: '20px 40px',
    position: 'relative',
    background: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 1,
    borderRadius: 20,
    textAlign: 'center',
    margin: 4,
    flexDirection: 'column',
    '& .MuiAvatar-root': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  forgotBox: {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'flex-end',
    '& a': {
      fontWeight: 600,
      textDecoration: 'none',
      color: theme.palette.primary.main,
      marginLeft: 10,
      fontSize: 13,
      cursor: 'pointer',
    },
    //   transition: '2.5s',

    '& form': {
      // height: '100%',
    },

    //   '& span': {
    //      fontSize: 12,
    //      color: '#9e9e9e',
    //   },

    '& form h2': {
      fontSize: 20,
      fontWeight: 800,
      textAlign: 'center',
      width: '100%',
      marginBottom: 5,
      color: '#555',
      marginTop: 0,
    },

    '& form input': {
      fontSize: 15,
    },

    //   '& form input': {
    //      position: 'relative',
    //      width: '100%',
    //      padding: 10,
    //      background: '#f5f5f5',
    //      color: '#333',
    //      border: 'none',
    //      outline: 'none',
    //      boxShadow: 'none',
    //      margin: '8px 0',
    //      fontSize: 14,
    //      letterSpacing: 1,
    //      fontWeight: 300,
    //   },

    //   '& form input[type="submit"]': {
    //      maxWidth: 100,
    //      background: '#677eff',
    //      color: '#fff',
    //      cursor: 'pointer',
    //      fontSize: 14,
    //      fontWeight: 500,
    //      letterSpacing: 1,
    //      //  transition: '2.5s',
    //   },

    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },

  link: {
    position: 'relative',
    marginTop: 20,
    fontSize: 12,
    letterSpacing: 1,
    color: '#555',
    textTransform: 'uppercase',
    fontWeight: 300,

    '& a': {
      fontWeight: 600,
      textDecoration: 'none',
      color: '#677eff',
    },
  },

  dropdown: {
    marginTop: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  signupBx: {
    // pointerEvents: 'none',

    '& formBx': {
      left: '100%',
    },

    '& imgBx': {
      left: '-100%',
    },
  },
  signinBx: {
    '& formBx': {
      left: '0%',
    },

    '& imgBx': {
      left: '0%',
    },
  },
  isActive: {
    // pointerEvents: 'initial',
    color: 'white',
    width: '100%',
    height: '100%',
  },
  active: {
    // pointerEvents: 'initial',
    color: 'white',
    '& signupBx': {
      // pointerEvents: 'initial',

      '& formBx': {
        left: 0,
      },

      '& imgBx': {
        left: '0%',
      },
    },

    '& signinBx': {
      '& formBx': {
        left: '100%',
      },

      '& imgBx': {
        left: '-100%',
      },
    },
  },

  button: {
    marginTop: 20,
    marginBottom: 15,
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    borderRadius: 20,

    '&:hover': {
      backgroundColor: theme.palette.primary.dark,

      color: 'white',
    },
  },

  socialLink: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& img': { width: 30, marginRight: 20, cursor: 'pointer' },
  },
  formSpan: {
    fontSize: 12,

    '& a': {
      color: '#f6e336',
      fontWeight: 600,
      textDecoration: 'none',
      fontSize: 15,
      '&:hover': {
        cursor: 'pointer',
      },
    },
  },
}));

export default useStyles;
