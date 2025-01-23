import { createSlice } from '@reduxjs/toolkit';

const countrySlice = createSlice({
    name: 'countries',
    initialState: {
        countries: [],
        filter: '',
    },
    reducers: {
        setCountries: (state, action) => {
            state.countries = action.payload;
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
});

export const { setCountries, setFilter } = countrySlice.actions;
export default countrySlice.reducer;
