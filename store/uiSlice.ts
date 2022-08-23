import { createSlice } from "@reduxjs/toolkit";

interface InitialState {}

const initialState: InitialState = {};
const uiSlice = createSlice({
	name: "ui",
	initialState,
	reducers: {},
});

const { reducer, actions } = uiSlice;

const ui = {
	reducer,
	actions,
};

export default ui;

