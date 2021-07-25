import { makeStyles } from '@material-ui/core/styles';

import img from 'Assets/images/2.png';
// import img from 'Assets/images/3.png'

const useStyles = makeStyles((theme) => ({
  root: {},
  main: {
    backgroundImage: `url(${img})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
}));

export default useStyles;
