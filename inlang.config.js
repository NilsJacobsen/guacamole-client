export async function defineConfig(env) {
	const { default: jsonPlugin } = await env.$import(
		"https://cdn.jsdelivr.net/gh/samuelstroschein/inlang-plugin-json@2/dist/index.js",
	)
  const { default: standardLintRules } = await env.$import(
		"https://cdn.jsdelivr.net/gh/inlang/standard-lint-rules@2/dist/index.js",
	)

	return {
		referenceLanguage: "en",
		plugins: [
			jsonPlugin({
				pathPattern: "./guacamole/src/main/frontend/src/translations/{language}.json",
			}),
      standardLintRules(),
		],
	}
}
