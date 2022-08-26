import styled from "styled-components";

export const NoteWrapper = styled.div`
	max-height: 36rem;

	display: flex;
	flex-direction: column;

	background-color: var(--clr-white);
	border-radius: 0.6rem;
	overflow: hidden;
`;

export const NoteHead = styled.div`
	padding: 1.4rem 2rem;

	display: grid;
	grid-template-columns: 4fr 1fr;
	gap: 2rem;

	background-color: var(--clr-primary-green);
`;

export const NoteTitle = styled.input.attrs({ type: "text", placeholder: "Title" })`
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

export const NoteActions = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 0.4rem;
`;

export const NoteBody = styled.div`
	height: 30rem;
	padding: 2rem 2rem 3rem;

	position: relative;
`;

export const NoteTextArea = styled.textarea`
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

export const NoteCharacterLimit = styled.span`
	display: block;

	font-size: 1.2rem;
	color: rgba(92, 128, 93, 0.725);
	position: absolute;
	bottom: 1rem;
	right: 2rem;
`;
