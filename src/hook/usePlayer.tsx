import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../modules";
import {useCallback} from "react";
import {requestPlayerInfo} from "../modules/player";

export default function usePlayer() {

	const dispatch = useDispatch();

	const onSearchPlayerInfo = useCallback(
		(player_id: string) => dispatch(requestPlayerInfo(player_id)), [dispatch]
	);

	return {
		onSearchPlayerInfo,
	};
}
