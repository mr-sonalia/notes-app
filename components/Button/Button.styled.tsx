import styled from "styled-components";

interface IButtonWrapper {
	background: boolean;
	size?: "lg" | "sm";
}

export const ButtonWrapper = styled.button<IButtonWrapper>`
	font-size: 1.6rem;
	color: var(--clr-white);

	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.2rem;

	background-color: ${props =>
		props.background ? "var(--clr-primary-green)" : "transparent"};
	border: none;

	padding: ${props =>
		props.size === "lg" ? "1.2rem 2.4rem" : "0.2rem 0.2rem"};
	/* padding: 1.2rem 2.4rem; */
	border-radius: 0.4rem;

	cursor: pointer;
`;

