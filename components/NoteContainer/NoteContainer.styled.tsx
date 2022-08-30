import styled from "styled-components";

interface IContainer {}

export const Container = styled.div<IContainer>`
	height: 100%;

	padding: 2rem;

	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 4rem;

	@media screen and (max-width: 1000px) {
		grid-template-columns: repeat(2, 1fr);
	}
`;
