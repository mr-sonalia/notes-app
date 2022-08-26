export interface INote {
	id: string;
	title: string;
	content: string;
}

export interface IAboutPage {
	name: string;
	description: string;
	age: number;
	email: string;
}

export interface IAxiosGetAllNotesResponse {
	message: string;
	notes?: INote[];
	error: string;
}

export interface IAxiosCreateNoteResponse {
	message: string;
	error: string;
	note: INote;
}

export interface IAxiosDeleteNoteResponse {
	message: string;
	error: string;
}

export interface IAxiosUpdateNoteResponse {
	message: string;
	error: string;
	note: INote;
}

export interface IAxiosAboutPageResponse extends IAboutPage {}

