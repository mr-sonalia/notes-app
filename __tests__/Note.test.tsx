/** @jest-environment jsdom */

import Note from "@/components/Note";
import { render, screen } from "@/utils/test-utils";

test("Render a card component whose title matches the display value", () => {
	render(
		<Note
			id="1234576dfgb"
			title="First note"
			content="Lorem ipsum sit dolor est."
			handleCardDeletion={(id: string) => {}}
		/>,
	);
	const cardContent = screen.getByDisplayValue(/First Note/i);
	expect(cardContent).toBeInTheDocument();
	// expect(cardContent).toHaveC
});

test("Render a card component whose content matches the display value", () => {
	render(
		<Note
			id="advsdbsrhadtn"
			title="Second note"
			content="Lorem ipsum sit dolor est."
			handleCardDeletion={(id: string) => {}}
		/>,
	);
	const cardContent = screen.getByDisplayValue(/Lorem ipsum sit dolor est./i);

	expect(cardContent).toBeInTheDocument();
});

