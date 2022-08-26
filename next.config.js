/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	compiler: {
		styledComponents: {
			ssr: true, // On page reload compiler throws 'class name mismatch' error if set to false.
			displayName: false, // Set classes as 'xyz' instead of 'Component-xyz'
		},
	},
	async rewrites() {
		return [
			{
				// Url proxy
				source: "/api",
				destination: "http://localhost:3000/api",
			},
		];
	},
	optimizeFonts: true,
	typescript: {
		tsconfigPath: "./tsconfig.json",
	},
};

module.exports = nextConfig;
