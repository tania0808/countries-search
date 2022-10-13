import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface countriesState {
  value: any[];
  query: string;
  error: boolean;
  country: any[];
}

const initialState: countriesState = {
  value: [],
  query: "all",
  error: false,
  country: []
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    allCountries: (state, action: PayloadAction<any[]>) => {
      state.value = action.payload;
    },
    selectedCountry: (state, action: PayloadAction<any[]>) => {
      state.country = action.payload;
    },
    errorHandler: (state, action: PayloadAction<boolean>) => {
      state.error = action.payload
    }
  },
});

export const { allCountries, selectedCountry, errorHandler } = countriesSlice.actions;

export default countriesSlice.reducer;
