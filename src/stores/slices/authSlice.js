import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    profile: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setProfile: (state, action) => {
            state.profile = action.payload;
        },
    },
});


export const { setProfile } = authSlice.actions;

export const selectProfile = (state) => state.auth.profile;

export default authSlice.reducer;