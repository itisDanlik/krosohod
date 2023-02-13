import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SearchSneakersParams, Sneakers } from "./types";

export const fetchSneakers = createAsyncThunk<Sneakers[], SearchSneakersParams>(
  'sneakers/fetchSneakersStatus',
  async (params) => {
    const { order, sortBy, category, search, currentPage } = params;
    const { data } = await axios.get<Sneakers[]>(
      `https://63d15a2e120b32bbe8f6ced9.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortby=${sortBy}&order=${order}${search}`,
    );

    return data;
  });