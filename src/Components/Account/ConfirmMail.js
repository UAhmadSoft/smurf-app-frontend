import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import { API_BASE_URL } from 'Utils/constants';

const ConfirmMail = ({ match, history }) => {
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    (async () => {
      const { token } = match.params;
      try {
        const res = await axios.patch(
          `${API_BASE_URL}/auth/confirmMail/${token}`
        );

        setFetching(false);
        toast.success('Account Verified ...Redirecting');
        setTimeout(() => {
          history.push('/');
        }, 3000);
      } catch (err) {
        let errMsg = 'Something Went Wrong !';
        if (
          (errMsg =
            err.response &&
            err.response.data &&
            err.response.data.message)
        ) {
          errMsg = err.response.data.message;
        }

        console.log(`err`, err);
        toast.error(errMsg);
        setTimeout(() => {
          history.push('/');
        }, 1000);
      }
    })();
  }, []);

  return (
    <div>
      {fetching ? (
        <>
          <h1 align='center'>Authenticating</h1>
          <div className='loader'></div>
        </>
      ) : (
        <h3 align='center'>Account Verified ... Redirecting</h3>
      )}
    </div>
  );
};

export default withRouter(ConfirmMail);
