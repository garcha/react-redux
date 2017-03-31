export default function reducer(state={
  tweets: [],
  fetching: false,
  fetched: false,
  error: null,
}, action) {

  // console.log('---------')
  // console.log(action.payload)
  // console.log('---------')

  switch (action.type) {
    case "FETCH_TWEETS":{
      return {...state, fetching: true}
    }
    case "FETCH_TWEETS_REJECTED": {
      return {...state, fetching: false, error: action.payload}
    }
    case "FETCH_TWEETS_FILFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        tweets: action.payload,
      }
    }
    case "ADD_TWEET": {
      return {
        ...state,
        tweet: [...state.tweets, action.payload],
      }
    }
    case "UPDATE_TWEET": {
      const { id, text } = action.payload
      const newTweets = [...state.tweets]
      const tweetToUpdate = newTweets.findIndex(tweet => tweet.id === id)
      newTweets[tweetToUpdate] = action.payload;

      return {
        ...state,
        tweets: newTweets,
      }
    }
    case "DELETE_TWEET":{
      return {
        ...state,
        tweets: state.tweets.filter(tweet => tweet.id !== action.payload),
      }
    }
  }

  return state
}
