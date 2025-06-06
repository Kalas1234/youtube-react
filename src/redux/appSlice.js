import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
    name: 'app',
    initialState: {
        isMenuOpen: true
    },
    reducers: {
        toggleMenu: (state, action) => {
            state.isMenuOpen = !state.isMenuOpen;
        },

        onCloseMenu: (state, action) => {
            state.isMenuOpen = false;
        }
    }
});

export const { toggleMenu, onCloseMenu } = appSlice.actions;
export default appSlice.reducer;
