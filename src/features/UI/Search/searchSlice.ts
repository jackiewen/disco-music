import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '@src/app/store';

interface SearchState {
    keyword: string,
    isVisibleSuggest: boolean,
    suggest: object,
    result: object
}

const initialState: SearchState = {
    keyword: '',
    isVisibleSuggest: false,
    suggest: {},
    result: {}
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        keywordChange: (state, action: PayloadAction<string>) => {
            state.keyword = action.payload
        },
        suggestReceive: (state, action: PayloadAction<object>) => {
            state.suggest = action.payload
        },
        setVisibleSuggest: (state, action: PayloadAction<boolean>) => {
            state.isVisibleSuggest = action.payload
        },
    }
});

export const {
    keywordChange,
    suggestReceive,
    setVisibleSuggest
} = searchSlice.actions;

export const suggestRequest = (keyword: string): AppThunk => dispatch => {
    setTimeout(() => {
        dispatch(suggestReceive({song: ['a', 'b']}));
    });
}

export const selectKeyword = (state: RootState) => state.search.keyword;

export const selectSuggest = (state: RootState) => state.search.suggest;

export const selectVisibleSuggest = (state: RootState) => state.search.isVisibleSuggest;

export default searchSlice.reducer;