import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { API_URL } from "../../config/api";
import { IData } from "../../interface/interface";

export const fetchApi = createAsyncThunk("home/fetchApi", async () => {
  return fetch(API_URL)
    .then((res: Response) => res.json())
    .catch((err: string) => console.log(err));
});

interface IDataWrap {
  dataApi: IData;
  loading: boolean;
  error: string;
}

const initialState:  IDataWrap | any= {
  dataApi: {},
  loading: false,
  error: "The API isn't fetching",
};

export const dataSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchApi.pending.toString()]: (
      state,
      { payload }: PayloadAction<IData>
    ) => {
      console.log("Pending");
      state.loading = true;
      state.error = "";
    },
    [fetchApi.fulfilled.toString()]: (
      state,
      { payload }: PayloadAction<IData>
    ) => {
      console.log("Fetched Successfully!");
      state.dataApi = payload;
      state.loading = false;
      state.error = "";
    },
    [fetchApi.rejected.toString()]: (
      state) => {
      console.log("Rejecteed!");
      state.loading = false;
      state.error = state.error
    },
  },
});

export const {} = dataSlice.actions;

export default dataSlice.reducer;
