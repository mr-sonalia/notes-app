import { FC, ReactNode } from "react";
import styled from "styled-components";

interface Props {
	readonly children?: ReactNode;
	readonly icon?: ReactNode;
	readonly text?: ReactNode;
	clickHandler?: () => void
}

interface IButtonWrapper {}

const ButtonWrapper = styled.button<IButtonWrapper>`
	background-color: transparent;
	border: none;
	color: var(--clr-white);

	cursor: pointer;
`;

const Button: FC<Props> = props => {
	return (
		<ButtonWrapper onClick={props.clickHandler}>
			{props.icon}
			{props.children}
			{props.text}
		</ButtonWrapper>
	);
};

export default Button;

