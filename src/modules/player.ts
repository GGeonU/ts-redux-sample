import {ActionType, createAction, createReducer} from "typesafe-actions";

export const REQUEST_PLAYER_INFO = 'player/REQUEST_PLAYER_INFO';
export const REQUEST_PLAYER_INFO_SUCCESS = 'player/REQUEST_PLAYER_INFO_SUCCESS';
export const REQUEST_PLAYER_INFO_FAILURE = 'player/REQUEST_PLAYER_INFO_FAILURE';


export const requestPlayerInfo = createAction(
	REQUEST_PLAYER_INFO,
	(player_id: string) => player_id
)<string>();

export const requestPlayerInfoSuccess = createAction(
	REQUEST_PLAYER_INFO_SUCCESS,
)();

export const requestPlayerInfoFailure = createAction(
	REQUEST_PLAYER_INFO_FAILURE,
)();


const actions = {requestPlayerInfo, requestPlayerInfoSuccess, requestPlayerInfoFailure};
type PlayerActions = ActionType<typeof actions>

interface PlayerState {
	response: any;
}

const initialState: PlayerState = {
	response: {}
};

const player = createReducer<PlayerState, PlayerActions>(initialState, {
	[REQUEST_PLAYER_INFO]: (state: PlayerState) => ({
		...state,
		isRequest: true,
		error: null,
	}),
	[REQUEST_PLAYER_INFO_SUCCESS]: (state: PlayerState, payload: Object) => ({
		...state,
		response: payload,
		isRequest: false,
		error: null,
	}),
	[REQUEST_PLAYER_INFO_FAILURE]: (state: PlayerState) => ({
		...state,
		isRequest: false,
		error: true,
	})
});

export default player;