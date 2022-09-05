import { INote } from "@/utils/helpers/types";
import Note from "@/utils/mongoose/schemas/notes";
import type { NextApiRequest, NextApiResponse } from "next";

interface Data {
	note?: Omit<INote, "id">;
	message?: string;
	query?: any;
	error?: string;
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const { method, query, body } = req;
	const id = query.id as string;
	const { title, content } = body;

	switch (method) {
		case "GET": {
			const note = await Note.findById(id);

			if (!note) return res.status(404).json({ error: "Note not found" });

			return res.status(200).json({ note });
		}
		case "DELETE": {
			await Note.deleteOne({ _id: id });
			return res.status(204).json({ message: "Deleted" });
		}
		case "PUT": {
			const updatedNote = await Note.findOneAndUpdate(
				{ _id: id },
				{ title, content }
			);

			if (!updatedNote)
				return res.status(400).json({
					message: "",
					error: `Could not find note: ${id}`,
				});

			const note = {
				title: updatedNote.title,
				content: updatedNote.content,
			};

			res.status(200).json({
				note,
				message: "Note updated successfully",
				error: "",
			});
		}
	}
}
