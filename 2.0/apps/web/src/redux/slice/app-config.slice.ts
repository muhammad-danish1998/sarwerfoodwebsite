import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TAppConfig = {
  position: {
    latitude: number | undefined;
    longitude: number | undefined;
  },
  address: string | undefined;
  zipCode: number | undefined;
}

const initialState: { config: TAppConfig } = {
  config: {
    position: {
      latitude: undefined,
      longitude: undefined
    },
    address: undefined,
    zipCode: undefined
  }


};

const appConfig = createSlice({
  name: "app-config",
  initialState,
  reducers: {
    initConfig: (state, action: PayloadAction<TAppConfig>) => {
      state.config = { ...state.config, ...action.payload };
    },
  }
});


export const { initConfig } = appConfig.actions;
export default appConfig.reducer;