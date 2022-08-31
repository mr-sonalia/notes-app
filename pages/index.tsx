import { Head, Main, NewNote } from "@/components";
import { useAppDispatch } from "@/store/dispatcher";
import notes from "@/store/notesSlice";
import { IAxiosGetAllNotesResponse, INote } from "@/utils/helpers/types";
import connectToDb from "@/utils/mongoose/connect";
import axios from "axios";
import type { NextPage } from "next";
import { Fragment, ReactNode, useEffect } from "react";

interface Props extends IAxiosGetAllNotesResponse {
	readonly children?: ReactNode;
	notes: INote[];
}

const Home: NextPage<Props> = props => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(notes.action.getNotes(props.notes));
	}, []);

	return (
		<Fragment>
			<Head />
			<Main />
			<NewNote />
		</Fragment>
	);
};

export default Home;

export async function getServerSideProps() {
	let notes: INote[] | [] = [];
	let message: string = "",
		error: string = "";
	try {
		console.log("Attempting db connection");
		await connectToDb({dbName: "notesDB"});
		console.log("Db connected");

		const response = await axios.get<IAxiosGetAllNotesResponse>(
			"http://localhost:3000/api/notes"
		);

		message = response.data.message;
		if (response.data.error.length > 0) throw response.data.error;

		notes = response.data.notes!;
	} catch (e) {
		if (typeof e === "string") error = e;
	}

	return {
		props: {
			notes,
			message,
			error,
		},
	};
}
