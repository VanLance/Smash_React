import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        name: 'Link',
        description: 'Young Blonde boomerrang Boi in Green',
        games_appeared_in : 'zelda universe, smash og',
        abilities: 'weapon master',
        weight: 'medium',
        jumps: '3'
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload }
    }
})

///Export Reducer

export const reducer = rootSlice.reducer;
export const {chooseName} = rootSlice.actions;