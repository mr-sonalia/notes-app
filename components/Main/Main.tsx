import Modal from "@/components/Modal";
import NotesContainer from "@/components/NoteContainer";
import { RootState } from "@/store/dispatcher";
import { INote } from "@/utils/helpers/types";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container } from "./Main.styled";

const Main: NextPage = () => {
	const notesState = useSelector((state: RootState) => state.notesState);

	const ui = useSelector((state: RootState) => state.uiState);
	return (
		<Container>
			<NotesContainer
				isLoading={notesState.isLoading}
				notes={notesState.notes}
			/>
			<Modal isModalVisible={ui.isModalVisible} />
		</Container>
	);
};

export default Main;

