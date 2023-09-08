import {createSlice} from '@reduxjs/toolkit';

export const filterSlice = createSlice({
	name: 'filter',
	initialState: {
		location: '',
		numberOfGuests: 0,
		showFilterDetails: false,
	},
	reducers: {
		toggleShowFilterDetails: (state) => {
			state.showFilterDetails = !state.showFilterDetails;
		},
	},
});

export const selectShowFilterDetails = (state: any) =>
	state.filter.showFilterDetails;

export const {toggleShowFilterDetails} = filterSlice.actions;

export default filterSlice.reducer;
