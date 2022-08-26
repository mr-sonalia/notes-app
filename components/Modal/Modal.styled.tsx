import styled from "styled-components";

interface IModalContainerProps {
	isModalVisible: boolean;
}

export const ModalContainer = styled.div<IModalContainerProps>`
	display: ${props => (props.isModalVisible ? "grid" : "none")};
	place-items: center;
	z-index: 2;

	width: 100%;
	height: 100%;

	position: absolute;
	top: 0;
	left: 0;
	z-index: ${props => (props.isModalVisible ? 2 : -1)};

	backdrop-filter: blur(0.4rem);
`;

export const ModalWrapper = styled.div`
	width: 50rem;
	height: auto;

	padding: 4rem;

	background-color: var(--clr-white);
	border-radius: 0.6rem;
`;

export const ModalHead = styled.div`
	display: flex;
	justify-content: flex-end;
`;

export const Form = styled.form`
	display: grid;
	/* grid-template-rows: repeat(2, 1fr); */
	gap: 2rem;
`;

export const FormInputWrapper = styled.div`
	display: grid;
	/* grid-template-rows: repeat(2, 1fr); */
	gap: 0.4rem;
	gap: 0.4rem;
`;

export const Label = styled.label.attrs({
	type: "text",
	id: "title",
	name: "title",
	required: true,
})`
	font-size: 1.6rem;
	font-weight: 600;
`;

export const TextInput = styled.input.attrs({
	type: "text",
	id: "title",
	name: "title",
	required: true,
})`
	padding: 1rem;
	font-size: 2rem;
	font-weight: 600;

	display: block;

	border: 1px solid black;
	border-radius: 0.4rem;
`;

export const TextAreaInput = styled.textarea`
	width: 100%;
	height: 20rem;
	max-height: 30rem;

	padding: 1.6rem;

	font-size: 1.6rem;
	line-height: 1.5;

	resize: none;
	background-color: rgb(255, 255, 255);
	border: 1px solid black;
	border-radius: 0.4rem;
	outline: none;

	&:not(:focus) {
		&::-webkit-scrollbar {
			display: none;
		}
	}
`;
