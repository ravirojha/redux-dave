import './App.css';
import Counter from "./Reddit";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from 'redux-thunk';
import Reddit from "./Reddit";
import {getPosts} from "./actions";

const initialState = {
    isLoading: false,
    error: null,
    posts: []
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case "GET_POSTS_SUCCESS":
            return {
                ...state,
                posts: action.posts,
                isLoading: false
            }
        case "GET_POSTS_BEGIN":
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case "GET_POSTS_ERROR":
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        default:
            return state;
    }
}

const store = createStore(reducer, applyMiddleware(thunk));
store.dispatch(getPosts());

function App() {
  return (
    <Provider store={store}>
      <Reddit />
    </Provider>
  );
}

export default App;
