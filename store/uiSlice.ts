import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
	isModalVisible: boolean;
}

const initialState: InitialState = {
	isModalVisible: false,
};

const uiSlice = createSlice({
	name: "ui",
	initialState,
	reducers: {
		toggleModalVisibility(state: InitialState) {
			state.isModalVisible = !state.isModalVisible;
			// console.log(state.isModalVisible)
		},
	},
});

const { reducer, actions } = uiSlice;

const ui = {
	reducer,
	actions,
};

export default ui;

