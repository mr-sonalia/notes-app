// ? Config using swc
import nextJest from "next/jest";

const createJestConfig = nextJest({ dir: "./" });

export default createJestConfig({
	//  Make absolute imports compatible with jest
	moduleNameMapper: {
		"@/components/(.*)": "<rootDir>/components/$1",
		"@/utils/(.*)": "<rootDir>/utils/$1",
		"@/store/(.*)": "<rootDir>/store/$1",
	},

	// Testing library
	setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
	
	// Better logs if test case(s) fail
	verbose: true,
});

// ##################################################################

// ? Config using ts-jest

/**
 * * NOTES
 * To switch jest.config.js, use
 *	testEnvironment: "ts-jest",
 *	setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
 *
 */

/* import type { InitialOptionsTsJest } from "ts-jest";

const config: InitialOptionsTsJest = {
	// extensionsToTreatAsEsm: [".ts", ".tsx"],
	// preset: "ts-jest",
	// globals: {
	// 	"ts-jest": {
	// 		useESM: true,
	// 		tsconfig: "./tsconfig.json",
	// 	},
	// },
	// transform: {
	// 	"^.+\\.tsx?$": "ts-jest",
	// },
	moduleNameMapper: {
		"@/components/(.*)": "<rootDir>/components/$1",
		"@/utils/(.*)": "<rootDir>/utils/$1",
		"@/store/(.*)": "<rootDir>/store/$1",

	},
	testEnvironment: "ts-jest",
	setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
	verbose: true,
};
export default config; */

