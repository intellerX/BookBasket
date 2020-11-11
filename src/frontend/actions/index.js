import axios from 'axios';

export const setFavorite = payload => ({
  type: 'SET_FAVORITE',
  payload,
});

export const loginRequest = payload => ({
  type: 'LOGIN_REQUEST',
  payload,
});

export const logoutRequest = payload => ({
  type: 'LOGOUT_REQUEST',
  payload,
});

export const registerRequest = payload => ({
  type: 'REGISTER_REQUEST',
  payload,
});

export const deteleFavorite = payload => ({
  type: 'DELETE_FAVORITE',
  payload,
});

export const getVideoSource = payload => ({
  type: 'GET_VIDEO_SOURCE',
  payload,
});

export const setError = payload => ({
  type: 'SET_ERROR',
  payload,
});

export const registerUser = (payload, redirectUrl) => {
  return (dispatch) => {
    axios.post('https://bookbasket1.herokuapp.com/api/user/', payload)
      .then(({ data }) => dispatch(registerRequest(data)))
      .then(() => {
        window.location.href = redirectUrl
      })
      .catch(error => dispatch(setError(error)))
  };
};

export const registerBook = (payload, redirectUrl) => {
  return (dispatch) => {
    axios.post('https://bookbasket1.herokuapp.com/api/books/', payload)
      .then(({ data }) => dispatch(registerRequest(data)))
      .then(() => {
        window.location.href = redirectUrl
      })
      .catch(error => dispatch(setError(error)))
  };
};

export const changePassword = (payload, redirectUrl) => {
  return (dispatch) => {
    axios.patch('https://bookbasket1.herokuapp.com/api/pass/return/', payload)
      .then(({ data }) => dispatch(registerRequest(data)))
      .then(() => {
        window.location.href = redirectUrl
      })
      .catch(error => dispatch(setError(error)))
  };
};

export const loginUser = ({ email, password }, redirectUrl) => {
  return (dispatch) => {

    axios.post('https://bookbasket1.herokuapp.com/api/auth/', {
      email: email,
      password: password,
    }).then(response => {

      console.log(response)
      
      if(response.status === 200) {
        document.cookie = `email=${email}`;
        document.cookie = `name=${email}`;
        document.cookie = `id=${email}`;
        window.location.href = redirectUrl;

      }

    }).catch(e => {
      console.log(e);
    });


    
  }
};

export { setFavorite as default }