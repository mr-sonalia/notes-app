import { Head } from "@/components";
import { IAboutPage, IAxiosAboutPageResponse } from "@/utils/helpers/types";
import axios from "axios";
import { NextPage } from "next";
import { Fragment } from "react";

type Props = {
	about: IAboutPage;
};

const About: NextPage<Props> = props => {
	return (
		<Fragment>
			<Head />
			About
		</Fragment>
	);
};

export async function getStaticProps() {
	const response = await axios.get<IAxiosAboutPageResponse>("http://localhost:3000/api/about");

	let about: IAboutPage = response.data;

	return {
		props: {
			about,
		},
		revalidate: 30,
	};
}

export default About;
