import type { NextApiRequest, NextApiResponse } from "next";
import notesDB from "../../../notes-db.json";
import { INote } from "../../../types";

interface Data {
	note?: INote;
	message?: string;
	query?: any;
	error?: string;
}

const notes: INote[] = notesDB;

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>,
) {
	const { method, query } = req;
	const id = query.id as string;

	switch (method) {
		case "GET": {
			const noteIndex = notes.findIndex(note => note.id === parseInt(id));

			if (noteIndex === -1)
				return res.status(404).json({ error: "Note not found" });

			console.log(id);
			return res.status(200).json({
				note: notes[noteIndex],
				message: `Note found`,
			});
		}
	}
}

