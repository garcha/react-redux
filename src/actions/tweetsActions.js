import axios from "axios"

export function fetchTweets(){
  return function(dispatch){
    axios.get("http://rest.learncode.academy/api/test123/tweets")
      .then((response) => {
        dispatch({type: "FETCH_TWEETS_FILFILLED", payload: response.data})
      })
      .catch((error) => {
        console.log(error)
        dispatch({type: "FETCH_TWEETS_REJECTED", payload: error})
      })
  }
}

export function addTweet(id, text) {
  return{
    type: 'ADD_TWEET',
    payload: {
      id,
      text,
    },
  }
}

export function updateTweet(id, text) {
  return{
    type: 'UPDATE_TWEET',
    payload: {
      id,
      text,
    },
  }
}

export function deleteTweet(id, text) {
  return{
    type: 'DELETE_TWEET',
    payload: id
  }
}
