import { FC, ReactNode } from "react";
import styled from "styled-components";
import { INote } from "../../types";
import Note from "../Note";

interface Props {
	readonly children?: ReactNode;
	notes: INote[];
	isLoading: boolean;
}

interface IContainer {}

const Container = styled.div<IContainer>`
	padding: 2rem;

	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 4rem;
`;

const NotesContainer: FC<Props> = props => {
	return (
		<Container>
			{!props.isLoading && props.notes.map(note => (
				<Note key={note.id} {...note} />
			))}
		</Container>
	);
};

export default NotesContainer;

