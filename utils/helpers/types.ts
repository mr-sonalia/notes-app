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

export interface Response {
	message: string;
	error: string;
}

export interface IAxiosGetAllNotesResponse extends Response {
	notes?: INote[];
}

export interface IAxiosCreateNoteResponse extends Response {
	note: INote;
}

export interface IAxiosDeleteNoteResponse extends Response {}

export interface IAxiosUpdateNoteResponse extends Response {
	note: INote;
}

export interface IAxiosAboutPageResponse extends IAboutPage {}
