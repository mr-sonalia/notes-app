import { INote } from ".@/utils/helpers/types";
import { Note } from "@/components";
import { useAppDispatch } from "@/store/dispatcher";
import { deleteNoteAsync } from "@/store/notesSlice";
import { FC, ReactNode } from "react";
import { Container } from "./NoteContainer.styled";

interface Props {
	readonly children?: ReactNode;
	notes: INote[];
	isLoading: boolean;
}

const NotesContainer: FC<Props> = props => {
	const dispatch = useAppDispatch();

	const handleCardDeletion = (id: string): void => {
		dispatch(deleteNoteAsync(id));
	};

	return (
		<Container>
			{!props.isLoading &&
				props.notes.map(note => (
					<Note key={note.id} {...note} handleCardDeletion={handleCardDeletion} />
				))}
		</Container>
	);
};

export default NotesContainer;
