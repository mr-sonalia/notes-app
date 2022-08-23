import type { NextPage } from "next";
import { useSelector } from "react-redux";
import styled from "styled-components";
import NotesContainer from "../components/NoteContainer";
import { RootState } from "../store/dispatcher";

const Container = styled.div``;

const Main: NextPage = () => {
	const { notes, isLoading } = useSelector(
		(state: RootState) => state.notesState,
	);

	return (
		<Container>
			<NotesContainer isLoading={isLoading} notes={notes}/>
		</Container>
	);
};

export default Main;


