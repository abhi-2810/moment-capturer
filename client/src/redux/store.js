import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { postsReducer } from './reducers/postsReducer';
import { authReducer } from './reducers/authReducer';

const reducer = combineReducers({
    posts: postsReducer,
    auth: authReducer
});

export const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
);
