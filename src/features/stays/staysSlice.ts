import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {loadStays} from '../../services/fetchData';
import {StayProps} from '../../types/Stays.types';

export const loadAllStays = createAsyncThunk('stays/loadAllStays', async () => {
	const allStays = await loadStays();
	return allStays;
});

export const staysSlice = createSlice({
	name: 'stays',
	initialState: {
		stays: [],
		loadingStays: false,
	},
	reducers: {},
	extraReducers: {
		[loadAllStays.pending as unknown as string]: (state) => {
			state.loadingStays = true;
		},

		[loadAllStays.fulfilled as unknown as string]: (state, action) => {
			state.loadingStays = false;
			state.stays = action.payload;
		},

		[loadAllStays.rejected as unknown as string]: (state) => {
			state.loadingStays = false;
		},
	},
});

export const selectAllStays = (state: any) => state.stays.stays;
export const loadingStays = (state: any) => state.stays.loadingStays;
export const selectCities = (state: any) => {
	const cities = (state.stays.stays as StayProps[])?.map(
		(stay) => stay.city + ', ' + stay.country,
	);
	return [...new Set(cities)];
};

export default staysSlice.reducer;
