import mongoose from "mongoose";

const connectToDb = async (options: mongoose.ConnectOptions): Promise<typeof mongoose> => {
	return mongoose.connect(process.env.MONGODB_URL!, options);
};

export default connectToDb;
