import path from "node:path"
import { defineConfig } from "vite"
import eslintPlugin from "vite-plugin-eslint"
import { VitePWA } from "vite-plugin-pwa"

export default defineConfig( {
	server: {
		host: true,
	},
	build: {
		target: "esnext",
		chunkSizeWarningLimit: 1024,
	},
	resolve: {
		alias: {
			"@app": path.resolve( __dirname, "./src/app" ),
			"@lib": path.resolve( __dirname, "./src/library" ),
		},
	},
	plugins: [
		eslintPlugin(),
		VitePWA( {
			manifest: {
				name: "My awesome PWA",
				short_name: "PWA",
				description: "A description of my PWA",
				theme_color: "#000000",
				icons: [
					{
						src: '/icon192.png',
						sizes: '192x192',
						type: 'image/png'
					},
					{
						src: '/icon512.png',
						sizes: '512x512',
						type: 'image/png'
					}
				]
			},
			strategies: 'generateSW',
			registerType: 'autoUpdate',
		} ),
	]
} )
