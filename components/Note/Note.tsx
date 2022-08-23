import { FC, ReactNode, useEffect, useRef, useState } from "react";
import { BiSave, BiTrash } from "react-icons/bi";
import styled from "styled-components";
import { useAppDispatch } from "../../store/dispatcher";
import notes from "../../store/notesSlice";
import Button from "../Button";

interface Props {
	readonly children?: ReactNode;
	id: number;
	title: string;
	content: string;
}

const NoteWrapper = styled.div`
	/* padding: 2rem; */
	display: flex;
	flex-direction: column;

	background-color: var(--clr-white);
	border-radius: 0.6rem;
	overflow: hidden;
`;

const NoteHead = styled.div`
	padding: 1.4rem 2rem;

	display: grid;
	grid-template-columns: 4fr 1fr;
	gap: 2rem;

	background-color: var(--clr-primary-green);
`;

const NoteTitle = styled.input.attrs({ type: "text", placeholder: "Title" })`
	padding: 0.8rem;

	font-size: 1.6rem;
	font-weight: 700;
	color: var(--clr-white);

	background-color: transparent;
	border: none;
	outline: none;

	border-bottom: 1px solid var(--clr-white);
	&::placeholder {
		color: hsl(0, 0%, 76.86%);
	}

	&:not(:focus) {
		opacity: 0.5;
		border-bottom: none;
	}
`;

const NoteActions = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 0.4rem;
`;

const NoteBody = styled.div`
	height: 30rem;
	padding: 2rem 2rem 3rem;

	position: relative;
`;

const NoteTextArea = styled.textarea`
	width: 100%;
	height: 100%;

	padding: 0rem 1rem;

	font-size: 1.6rem;
	line-height: 1.5;

	resize: none;
	background-color: rgb(255, 255, 255);
	border: none;
	outline: none;

	&:not(:focus) {
		padding: 0rem 1.6rem;
		opacity: 0.5;
		font-style: italic;

		&::-webkit-scrollbar {
			display: none;
		}
	}
`;

const NoteCharacterLimit = styled.span`
	display: block;

	font-size: 1.2rem;
	color: rgba(92, 128, 93, 0.725);
	position: absolute;
	bottom: 1rem;
	right: 2rem;
`;

const CHARACTER_LIMIT = 1000;

const Note: FC<Props> = props => {
	const dispatch = useAppDispatch();

	const noteContentRef = useRef<HTMLTextAreaElement | null>(null);
	const [characterCount, setCharacterCount] = useState<number>(0);

	const handleCharacterCount = () =>
		setCharacterCount(noteContentRef.current?.value.length ?? 0);

	const handleCardDeletion = () => {
		dispatch(notes.action.deleteNote({id: props.id}));
	}

	useEffect(() => {
		noteContentRef.current!.value = props.content;
		handleCharacterCount();

		// console.log(props);
	}, []);

	return (
		<NoteWrapper>
			<NoteHead>
				<NoteTitle
					value={props.title}
					onChange={() => {}}
				/>
				<NoteActions>
					<Button icon={<BiSave size={"2rem"} />} />
					<Button icon={<BiTrash size={"2rem"} />} clickHandler={handleCardDeletion}/>
				</NoteActions>
			</NoteHead>
			<NoteBody>
				<NoteTextArea
					ref={noteContentRef}
					maxLength={CHARACTER_LIMIT}
					onChange={handleCharacterCount}
				/>
				<NoteCharacterLimit>
					{characterCount}/{CHARACTER_LIMIT}
				</NoteCharacterLimit>
			</NoteBody>
		</NoteWrapper>
	);
};

export default Note;

