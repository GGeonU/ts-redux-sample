import {put, call, takeLatest} from 'redux-saga/effects'
// import {Types} from "./player";
import * as request from './request'
import {AnyAction} from "redux";
import {Types} from "./player";

function* playerRequest(action: AnyAction){
	try{
		const response = yield call(request.requestPlayer, action.payload);
		console.log('aaa', response);
		yield put({
			type: Types.REQUEST_PLAYER_INFO_SUCCESS,
			payload: response,
		})
	} catch (e) {
		yield put({
			type: Types.REQUEST_PLAYER_INFO_FAILURE,
			payload: e,
			error: true,
		})
	}
}

export function* playerRequestSaga() {
	yield takeLatest(Types.REQUEST_PLAYER_INFO, playerRequest);
}