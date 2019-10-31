import {put, call, takeLatest} from 'redux-saga/effects'
import {
	REQUEST_PLAYER_INFO,
	REQUEST_PLAYER_INFO_FAILURE,
	REQUEST_PLAYER_INFO_SUCCESS,
} from "./player";
import * as request from './request'
import {AnyAction} from "redux";

function* playerRequest(action: AnyAction){
	try{
		const response = yield call(request.requestPlayer, action.payload);
		console.log('aaa', response);
		yield put({
			type: REQUEST_PLAYER_INFO_SUCCESS,
			payload: response,
		})
	} catch (e) {
		yield put({
			type: REQUEST_PLAYER_INFO_FAILURE,
			payload: e,
			error: true,
		})
	}
}

export function* playerRequestSaga() {
	yield takeLatest(REQUEST_PLAYER_INFO, playerRequest);
}