/* eslint-disable import/no-extraneous-dependencies */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../App/apiDescr';
import { Description, DescriptionId, State } from './Types/type';

const initialState: State = {
    descriptions: [],
    error: undefined,
};

export const initDescription = createAsyncThunk('posts/load', () => api.loadDescription());
export const addDescriptions = createAsyncThunk('posts/add', (newDescription: Description) =>
    api.addDescription(newDescription)
);
export const deleteDescriptions = createAsyncThunk('posts/delete', (id: DescriptionId) =>
    api.delDescription(id)
);

const descriptionSlice = createSlice({
    name: 'description',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(initDescription.fulfilled, (state, action) => {
                state.descriptions = action.payload;
            })
            .addCase(initDescription.rejected, (state, action) => {
                state.error = action.error.message;
            })
            .addCase(addDescriptions.fulfilled, (state, action) => {
                state.descriptions.push(action.payload);
            })
            .addCase(addDescriptions.rejected, (state, action) => {
                state.error = action.error.message;
            })
            .addCase(deleteDescriptions.fulfilled, (state, action) => {
                const arr = state.descriptions.filter((description) =>
                    description.id !== action.payload);
                state.descriptions = arr;
            })

            .addCase(deleteDescriptions.rejected, (state, action) => {
                state.error = action.error.message;
            });
    },
});

export default descriptionSlice.reducer;
