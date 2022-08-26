import { IAboutPage } from "@/utils/helpers/types";
import type { NextApiRequest, NextApiResponse } from "next";

interface Data {
	about?: IAboutPage;
}

// const notes: INote[] = notesDB;

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	const { method, body } = req;

	switch (method) {
		case "GET": {
			// const about = (await About.find())[0];

			// console.log({about: ""});

			const about = {
				name: "Yash Sonalia",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur purus ex, consectetur eu tortor id, finibus fringilla urna. Mauris magna ipsum, sagittis non laoreet quis, dictum euismod enim. Sed commodo felis magna. Donec tortor sapien, accumsan eget nisi eu, laoreet sagittis ipsum. Morbi consectetur diam vitae ex facilisis elementum. Suspendisse interdum aliquet nulla et eleifend. Vestibulum risus nisl, suscipit non gravida ut, blandit in ligula. Aliquam suscipit enim fringilla nibh congue, id porttitor erat convallis. Praesent maximus augue et lorem facilisis imperdiet. Nullam dictum, justo sodales varius maximus, ligula enim faucibus ex, ac cursus lorem ante ut elit. Vestibulum vel tempus tortor. Curabitur quis orci quis purus laoreet ullamcorper sed sit amet felis. Proin finibus enim erat, eget tincidunt enim vestibulum sit amet. Cras dictum tempor mi sit amet lacinia.",
				email: "sonaliayash@gmail.com",
				age: 21,
			};

			res.status(200).json({ about });
		}
	}
}
