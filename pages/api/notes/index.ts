import { INote } from "@/utils/helpers/types";
import Note from "@/utils/mongoose/schemas/notes";
import { Types } from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";

interface Data {
	note?: INote;
	notes?: INote[];

	message: string;
	error: string;
}

// const notes: INote[] = notesDB;

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>,
) {
	const { method, body } = req;

	switch (method) {
		case "GET": {
			const notes = await Note.find({});
			res.status(200).json({
				notes,
				message: `Found ${notes.length} item(s)`,
				error: "",
			});
			break;
		}
		case "POST": {
			const note = await new Note({
				title: body.title,
				content: body.content,
				_id: new Types.ObjectId(),
			}).save();

			res.status(201).json({
				note,
				message: `Note ${note.title} created`,
				error: "",
			});
			break;
		}
		case "PUT": {
			break;
		}
		case "DELETE": {
			break;
		}
		default: {
			res.status(403);
		}
	}
}

