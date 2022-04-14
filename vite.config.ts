import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import components from "unplugin-vue-components/vite";
const { VarletUIResolver } = require("unplugin-vue-components/resolvers");

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		vueJsx(),
		components({
			resolvers: [VarletUIResolver()],
		}),
	],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
	server: {
		port: 6800,
		host: "0.0.0.0",
		open: true,
		proxy: {
			"/api": "http://xxx.xxx.com/",
		},
	},
});
