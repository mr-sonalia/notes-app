import { IAboutPage } from "@/utils/helpers/types";
import { model, models, Schema } from "mongoose";

const aboutSchema = new Schema({
	age: Number,
	description: String,
	name: String,
	email: String,
});

aboutSchema.set("toJSON", {
	transform(doc, ret, options) {
		delete ret._id;
		delete ret.__v;

		return ret;
	},
});

const About = models.About || model<IAboutPage>("About", aboutSchema);

export default About;

