import { call } from 'redux-saga/effects'


function* sagaApiExample (api, params) {
  const {response, error} = yield call(api, ...params)

  if (response) {
    // the server responded successfully
    const { code, description, result } = response.data;

    if (code === 1) {
      yield code
    }
    else if (code === 2) {
      yield code
    }
    else {
      yield code
    }
    return result
  }
  else {
    const { response, request, message } = error

    if (response) {
      // the request was made and the server responded with a status code that falls out of the range of 2xx
      const {data, status, headers} = response
      yield status
    }
    else if (request) {
      // the request was made but no response was received
      yield request
    }
    else if (message) {
      // something happened in setting up the request that triggered an error
      yield message
    }
    return error
  }
