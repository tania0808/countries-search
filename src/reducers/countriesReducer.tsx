import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface countriesState {
  value: any[];
  query: string;
  error: boolean;
}

type Data = {
  payload: countriesState
}

const initialState: countriesState = {
  value: [],
  query: "all",
  error: false
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    allCountries: (state, action: PayloadAction<any[]>) => {
      state.value = action.payload;
    },
    errorHandler: (state, action: PayloadAction<boolean>) => {
      state.error = action.payload
    }
  },
});

export const { allCountries, errorHandler } = countriesSlice.actions;

export default countriesSlice.reducer;
