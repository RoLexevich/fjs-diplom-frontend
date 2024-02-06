import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHotels = createAsyncThunk(
    "fetchHotels",
    async function (searchParam: string, { rejectWithValue, dispatch }) {
        try {
            const searchStr = `name=${searchParam}`;
            const response = await fetch(
                "http://localhost:3001/api/admin/hotels?" + searchStr,
            );

            if (!response.ok) {
                throw new Error("Server Error!");
            }

            const data = await response.json();

            return data;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    },
);

const setError = (state: any, action: any) => {
    state.status = "rejected";
    state.error = action.payload;
};

const hotelsSlice = createSlice({
    name: "hotels",
    initialState: {
        hotels: [],
        status: null,
        error: null,
    },
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchHotels.pending, (state: any) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(fetchHotels.fulfilled, (state: any, action) => {
                state.status = "resolved";
                state.hotels = action.payload;
            })
            .addCase(fetchHotels.rejected, setError);
    },
});

export default hotelsSlice.reducer;
