import { RootState, useAppDispatch } from "@/store/dispatcher";
import { createNoteAsync } from "@/store/notesSlice";
import ui from "@/store/uiSlice";
import React, { FC, ReactNode, useRef } from "react";
import { createPortal } from "react-dom";
import { BiX } from "react-icons/bi";
import { useSelector } from "react-redux";
import Button from "../Button";
import {
	Form,
	FormInputWrapper,
	Label,
	ModalContainer,
	ModalHead,
	ModalWrapper,
	TextAreaInput,
	TextInput
} from "./Modal.styled";

interface Props {
	readonly children?: ReactNode;
	isModalVisible: boolean;
}

const Modal: FC<Props> = props => {
	const { isModalVisible } = useSelector((state: RootState) => state.uiState);
	const dispatch = useAppDispatch();

	const titleInputRef = useRef<HTMLInputElement | null>(null);
	const contentInputRef = useRef<HTMLTextAreaElement | null>(null);

	const handleHideModal = () => {
		// event.stopPropagation();
		dispatch(ui.actions.toggleModalVisibility());
	};

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();

		dispatch(
			createNoteAsync({
				title: titleInputRef.current!.value,
				content: contentInputRef.current!.value,
			})
		);

		handleHideModal();
	};

	return isModalVisible
		? createPortal(
				<ModalContainer isModalVisible={props.isModalVisible}>
					<ModalWrapper>
						<ModalHead>
							<Button
								icon={<BiX size={16} />}
								text={"Close"}
								background={true}
								size={"lg"}
								clickHandler={handleHideModal}
							/>
						</ModalHead>
						<Form onSubmit={submitHandler}>
							<FormInputWrapper>
								<Label htmlFor="title">Title</Label>
								<TextInput
									onFocus={event => event.stopPropagation()}
									ref={titleInputRef}
								/>
							</FormInputWrapper>
							<FormInputWrapper>
								<Label htmlFor="content">Content</Label>
								<TextAreaInput ref={contentInputRef} />
							</FormInputWrapper>
							<Button text={"Submit"} background={true} size="lg" type="submit" />
						</Form>
					</ModalWrapper>
				</ModalContainer>,
				document.getElementById("modal") as HTMLDivElement
		  )
		: null;
};

export default Modal;
