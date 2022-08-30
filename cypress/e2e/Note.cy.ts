const noteTitle = "First Note";
const noteContent =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dolor turpis, tempor vel eleifend et, tincidunt vitae arcu.";

describe("Open modal to create note", () => {
	it("Visit the app", () => {
		cy.visit("http://localhost:3000");

		cy.wait(1000);
	});

	it("Open modal by clicking on the button", () => {
		cy.get('[data-cy="new-note"]').click();

		cy.wait(1000);
	});

	it("Input new note title and content, verify and submit", () => {
		cy.get('[data-cy="title-input"]').type(noteTitle);
		cy.get('[data-cy="content-input"]').type(noteContent);

		cy.get('[data-cy="title-input"]').should("have.value", noteTitle);
		cy.get('[data-cy="content-input"]').should("have.value", noteContent);

		cy.get('[data-cy="submit"]').click();

		cy.wait(1000);
	});

	it("Verify note creation", () => {
		// cy.contains().

		cy.wait(1000);
	});

	it("Delete note", () => {
		cy.get(`[data-cy="delete-${noteTitle}"]`).click();
	});
});
