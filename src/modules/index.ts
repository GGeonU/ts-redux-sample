import { combineReducers } from "redux";
import player from "./player";
import {playerRequestSaga} from "./saga";
import {all} from 'redux-saga/effects'

const rootReducer = combineReducers({
  player,
});

export function* RootSaga(){
  yield all([playerRequestSaga()])
}

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;