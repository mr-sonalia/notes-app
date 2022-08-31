import { Modal, NotesContainer } from "@/components";
import { RootState } from "@/store/dispatcher";
import type { NextPage } from "next";
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

