import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {},
  Appbar: {
    // backgroundColor: '#1462aa',
    backgroundColor: '#fff',
    // color: '#B033fa',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    cursor: 'pointer',

    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  NavItem: {
    display: 'block',
    color: '#000',
    cursor: 'pointer',
    fontWeight: 700,
    textDecoration: 'none',
    fontSize: 17,
    '&:hover': {
      // borderBottom: '2px solid #B033fa',
      color: 'deepskyblue',
      transition: '0.3s',
    },
  },
  darkBtn: {
    overflow: 'unset !important',
    '&button': {},
  },
  RegisterBtn: {
    '&.MuiButton-root': {
      borderRadius: 20,
      borderWidth: 2,
      textTransform: 'none',
      fontWeight: 'bold',
      // transition: '0.6s',
    },
    '&.MuiButton-outlinedPrimary:hover': {
      backgroundColor: theme.palette.primary.dark,
      color: '#fff',
    },
  },

  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexGrow: '1',
    },
  },

  sectionMobile: {
    display: 'flex',
    marginLeft: 'auto',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  MobileMenu: {
    height: 500,
  },
  NavLinks: {
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1,
    padding: '0px 10px',
    flexBasis: '75%',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'flex-end',
      flexBasis: '40%',
    },
  },
  NavActions: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'flex-end',
    flexBasis: '35%',
    // maxWidth: 300,
    minWidth: 200,
  },
  NavLink: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
    marginInline: 20,
    // width: 120,
    '&.activeLink': {
      paddingBottom: 10,
      // width: 80,
      borderBottom: `2px solid ${theme.palette.primary.main}`,
      fontWeight: 'bold',
    },
  },
}));

export default useStyles;
