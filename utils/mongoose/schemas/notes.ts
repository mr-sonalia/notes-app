import { model, models, Schema } from "mongoose";
import { INote } from "../../helpers/types";

const NotesSchema = new Schema({
	title: {
		required: true,
		type: String,
	},
	content: {
		required: true,
		type: String,
	},
});

NotesSchema.set("toJSON", {
	transform(doc, ret, options) {
		ret.id = ret._id.toString();

		delete ret._id;
		delete ret.__v;

		return ret;
	},
});

const Note = models.Note || model<INote>("Note", NotesSchema);

export default Note;

