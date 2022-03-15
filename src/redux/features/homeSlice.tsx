import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../config/api";
import { IData, Info, IResults } from "../../interface/interface";

export const fetchApi = createAsyncThunk("home/fetchApi",async () => {
  return await fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .catch((err: string) => console.log("The API isn't fetching", err));
});

interface IDataWrap {
  IDataInterface : IData;
  loading: boolean;
  error: string;
}


const initialState: any | IDataWrap = {
  data: [],
  fav: [],
  loading: false,
  error: "The API isn't fetching",
};

export const dataSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    /* addFav: (state, { payload }: PayloadAction<DataItem>) => {
      const ekzistoIndex = state.fav.findIndex((item: DataItem) => item.pageid === payload.pageid);

      if (ekzistoIndex >= 0) {
        const nextFav = state.fav.filter((item: DataItem) => item.pageid !== payload.pageid);
        state.fav = nextFav;
      } else {
        state.fav = [
          ...state.fav,
          {
            pageid: payload.pageid,
            title: payload.title,
          },
        ];
      }
    },

    delFav: (state, { payload }: PayloadAction<DataItem>) => {
      const newList = state.fav.filter((item: DataItem) => item.pageid !== payload.pageid);
      state.fav = newList;
    },
*/  }, 
  extraReducers: {
    [fetchApi.pending.toString()]: (state, { payload }) => {
      console.log("Pending");
      state.loading = true;
      state.error = "";
    },
    [fetchApi.fulfilled.toString()]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      state.data = payload;
      state.loading = false;
      state.error = "";
    },
    [fetchApi.rejected.toString()]: (state, { payload }) => {
      console.log("Rejecteed!");
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { } = dataSlice.actions;

export default dataSlice.reducer;