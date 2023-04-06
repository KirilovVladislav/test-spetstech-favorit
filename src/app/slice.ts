import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Status = 'idle' | 'loading' | 'failed';

type InitialState = {
  status: Status;
};

export const initialState: InitialState = {
  status: 'idle',
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setStatus: (state, action: PayloadAction<{ status: Status }>) => {
      state.status = action.payload.status;
    },
  },
});

export const { reducer, actions } = slice;
