import { AppDispatch } from "@/store/dispatcher";
import {
	IAxiosCreateNoteResponse,
	IAxiosDeleteNoteResponse,
	IAxiosGetAllNotesResponse,
	IAxiosUpdateNoteResponse,
	INote
} from "@/utils/helpers/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface InitialState {
	notes: INote[];
	message: string;
	error: string;
	isLoading: boolean;
}

const initialState: InitialState = {
	notes: [],
	isLoading: true,
	error: "",
	message: "",
};

const notesSlice = createSlice({
	name: "notes",
	initialState,
	reducers: {
		getNotes(state: InitialState, action: PayloadAction<INote[]>) {
			state.notes = action.payload;
			state.isLoading = false;
		},
		createNote(state: InitialState, action: PayloadAction<INote>) {
			state.notes = state.notes.concat(action.payload);
		},
		deleteNote(state: InitialState, action: PayloadAction<{ id: string }>) {
			state.notes = state.notes.filter(
				note => note.id !== action.payload.id,
			);
		},
		createError(state: InitialState, action: PayloadAction<{ error: string }>) {
			state.error = action.payload.error;
		},
	},
});

const { reducer, actions: action } = notesSlice;

const notes = {
	reducer,
	action,
};

const getAllNotesFromServer = () => async () => {
	try {
		const response = await axios.get<IAxiosGetAllNotesResponse>(
			"/api/notes",
		);

		if (response.data.notes) action.getNotes(response.data.notes);
		else throw response.data.error;
	} catch (error) {
		console.error(error);
	}
};

export const createNoteAsync =
	(payload: { title: string; content: string }) =>
	async (dispatch: AppDispatch) => {
		try {
			const response = await axios.post<IAxiosCreateNoteResponse>(
				"/api/notes",
				payload,
			);

			if (response.data.error === "")
				dispatch(action.createNote(response.data.note));
		} catch (error) {}
	};

export const deleteNoteAsync =
	(id: string) => async (dispatch: AppDispatch) => {
		try {
			const response = await axios.delete<IAxiosDeleteNoteResponse>(
				`/api/notes/${id}`,
			);

			if (response.data.error === "") dispatch(action.deleteNote({ id }));
			else throw response.data.error;
		} catch (error) {
			console.error(error);
		}
	};

export const updateNoteAsync =
	(payload: INote) => async (dispatch: AppDispatch) => {
		try {
			const response = await axios.put<IAxiosUpdateNoteResponse>(
				"/api/notes/",
				{ ...payload },
			);

			const data = response.data;
		} catch (error) {}
	};

export default notes;


