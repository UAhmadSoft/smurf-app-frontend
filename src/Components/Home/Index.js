import React from 'react';
import Navbar from './Navbar';

import useStyles from 'Styles/Home/Index.Styles';

const Index = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar />
      <main className={classes.main}></main>
    </div>
  );
};

export default Index;
