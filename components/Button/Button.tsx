import { FC, ReactNode } from "react";
import { ButtonWrapper } from "./Button.styled";

interface Props {
	readonly children?: ReactNode;
	readonly icon?: ReactNode;
	readonly text?: ReactNode;
	clickHandler?: () => void;
	background: boolean;
	size?: "lg" | "sm";
	type?: "button" | "submit" | "reset" | undefined;
}

const Button: FC<Props> = props => {
	return (
		<ButtonWrapper
			onClick={props.clickHandler}
			background={props.background}
			size={props.size}
			type={props.type}>
			{props.icon}
			{props.children && <span>{props.children}</span>}
			{props.text}
		</ButtonWrapper>
	);
};

export default Button;

