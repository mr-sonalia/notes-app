import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { INote } from "../types";



interface INotesState {
	notes: INote[];
	isLoading: boolean
}

const initialState: INotesState = {
	notes: [],
	isLoading: true
};

const notesSlice = createSlice({
	name: "notes",
	initialState,
	reducers: {
		addNotes(state: INotesState, action: PayloadAction<{notes: INote[]}>) {
			state.notes = action.payload.notes;
			state.isLoading = false;
		},
		deleteNote(state: INotesState, action: PayloadAction<{ id: number }>) {
			state.notes = state.notes.filter(
				note => note.id !== action.payload.id,
			);
		},
	},
});

const { reducer, actions: action } = notesSlice;

const notes = {
	reducer,
	action,
};

const getAllNotesFromServer = () => 
	async () => {
		try {
			const response = await axios.get("http://localhost:3000/api/notes");
			action.addNotes(response.data);
		} catch (error) {
			console.log(error);
		}
	}

export default notes;

