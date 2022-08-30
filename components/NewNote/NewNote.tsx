import { useAppDispatch } from "@/store/dispatcher";
import ui from "@/store/uiSlice";
import { FC, ReactNode } from "react";
import { BiPlus } from "react-icons/bi";
import Button from "../Button";
import { NewNoteWrapper } from "./NewNote.styled";

interface Props {
	readonly children?: ReactNode;
}

const NewNote: FC<Props> = props => {
	// const [isModalVisible, setModalVisibility] = useState<boolean>(false);
	const dispatch = useAppDispatch();

	const handleModalVisibility = () => {
		dispatch(ui.actions.toggleModalVisibility());
	};

	return (
		<NewNoteWrapper>
			<Button
				dataCy="new-note"
				size={"lg"}
				text={"New Note"}
				background={true}
				icon={<BiPlus size={16} />}
				clickHandler={handleModalVisibility}
			/>
		</NewNoteWrapper>
	);
};

export default NewNote;
