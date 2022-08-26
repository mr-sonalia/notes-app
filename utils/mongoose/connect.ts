import { connect } from "mongoose";

const connectToDb = async () => {
	try {
		connect(process.env.MONGODB_URL!);
	} catch (error) {
		console.error(error);
	}
};

export default connectToDb;
