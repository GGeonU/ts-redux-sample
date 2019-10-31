import axios from 'axios';

const base = axios.create({
	baseURL: 'https://data.nba.net',
});

export const requestPlayer = async (player_id: string) => {
	return await base.get(`/prod/v1/2019/players/${player_id}_profile.json`)
		.then(it => it.data.league.standard);
};
