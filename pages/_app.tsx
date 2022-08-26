/** @format */

import "@/scss/globals.scss";
import store from "@/store/index";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import styled from "styled-components";

const BaseContainer = styled.div`
	height: inherit;
	padding: 2rem;
`;

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<BaseContainer>
				<Component {...pageProps} />
			</BaseContainer>
		</Provider>
	);
}

export default MyApp;

