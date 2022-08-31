import Note from "@/utils/mongoose/schemas/notes";
import { INote } from "@/utils/helpers/types";
import type { NextApiRequest, NextApiResponse } from "next";

interface Data {
	note?: INote;
	message?: string;
	query?: any;
	error?: string;
}


export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>,
) {
	const { method, query } = req;
	const id = query.id as string;

	switch (method) {
		case "GET": {
			const note = await Note.findById(id);

			if(!note) return res.status(404).json({error: "Note not found"});

			return res.status(200).json({ note });
		}
		case "DELETE": {
			await Note.deleteOne({ _id: id });
			return res.status(204).json({message: "Deleted"});
		}
	}
}



