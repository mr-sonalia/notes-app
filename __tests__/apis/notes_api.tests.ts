import axios, { AxiosError } from "axios";
import notesDB from "../../notes-db.json";

const url: string = "http://localhost:3000/api/notes";

describe("Run api tests for the /api/notes uri", () => {
	test("GET all the notes from the api", async () => {
		const response = await axios.get(url + "/");
		const { notes } = response.data;

		expect(notes).toEqual(notesDB);
	});

	test("GET note by id, when note exists", async () => {
		const note = {
			id: 101,
			title: "Note 1",
			content:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
		};

		const existingNoteId = 101;
		const response = await axios.get(`${url}/${existingNoteId}"`);

		const data = response.data;
		expect(data).toEqual({
			note,
			message: "Note found",
		});
	});

	test("GET note by id, when note does not exist", async () => {
		try {
			const nonExistingNoteId = 105;
			await axios.get(`${url}/${nonExistingNoteId}"`);
		} catch (error) {
			if (error instanceof AxiosError) {
				expect(error.response?.status).toBe(404);
				expect(error.response?.data).toEqual({
					error: "Note not found",
				});
			}
		}
	});
});

