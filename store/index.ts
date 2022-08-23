import { configureStore } from "@reduxjs/toolkit";
import notes from "./notesSlice";
import ui from "./uiSlice";

const store = configureStore({
	reducer: {
		uiState: ui.reducer,
		notesState: notes.reducer
	},
});


export default store;

