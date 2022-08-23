import type { NextApiRequest, NextApiResponse } from "next";
import { INote } from "../../../types";
import notesDB from "../../../notes-db.json";

interface Data {
	notes?: INote[];
	message?: string;
}

const notes: INote[] = notesDB;

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>,
) {
	const { method } = req;

	switch (method) {
		case "GET": {
			res.status(200).json({ notes });
			break;
		}
		case "POST": {
			res.status(201).json({ message: "Created" });
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

