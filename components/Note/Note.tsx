import { FC, ReactNode, useEffect, useRef, useState } from "react";
import { BiSave, BiTrash } from "react-icons/bi";
import { Button } from "@/components";
import {
	NoteActions,
	NoteBody,
	NoteCharacterLimit,
	NoteHead,
	NoteTextArea,
	NoteTitle,
	NoteWrapper,
} from "./Note.styled";

interface Props {
	readonly children?: ReactNode;
	id: string;
	title: string;
	content: string;
	handleCardDeletion: (id: string) => void;
}

const CHARACTER_LIMIT = 1000;

const Note: FC<Props> = props => {
	const noteContentRef = useRef<HTMLTextAreaElement | null>(null);
	const [characterCount, setCharacterCount] = useState<number>(0);

	const handleCharacterCount = () => setCharacterCount(noteContentRef.current?.value.length ?? 0);

	useEffect(() => {
		noteContentRef.current!.value = props.content;
		handleCharacterCount();

		// console.log(props);
	}, []);

	return (
		<NoteWrapper>
			<NoteHead>
				<NoteTitle value={props.title} onChange={() => {}} data-cy="title" />
				<NoteActions>
					<Button icon={<BiSave size={"2rem"} />} background={true} />
					<Button
						dataCy={`delete-${props.title}`}
						icon={<BiTrash size={"2rem"} />}
						background={true}
						clickHandler={() => props.handleCardDeletion(props.id)}
					/>
				</NoteActions>
			</NoteHead>
			<NoteBody>
				<NoteTextArea
					ref={noteContentRef}
					maxLength={CHARACTER_LIMIT}
					onChange={handleCharacterCount}
					data-cy="content"
				/>
				<NoteCharacterLimit>
					{characterCount}/{CHARACTER_LIMIT}
				</NoteCharacterLimit>
			</NoteBody>
		</NoteWrapper>
	);
};

export default Note;
