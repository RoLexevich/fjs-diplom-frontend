import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
    "fetchUsers",
    async function (searchParam: string, { rejectWithValue, dispatch }) {
        try {
            const searchStr = `name=${searchParam}`;
            const response = await fetch(
                "http://localhost:3001/api/admin/users?" + searchStr,
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

const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        status: null,
        error: null,
    },
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state: any) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state: any, action) => {
                state.status = "resolved";
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, setError);
    },
});

export default usersSlice.reducer;
