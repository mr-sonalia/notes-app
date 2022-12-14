namespace NodeJS {
	interface ProcessEnv {
		NODE_ENV: "development" | "production";
		PORT?: string;
		PWD: string;
		MONGODB_URL: string;
	}
}

