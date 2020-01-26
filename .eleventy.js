module.exports = (eleventyConfig) => {
	let { Liquid } = require("liquidjs")
	let options = {
		extname: ".liquid",
		dynamicPartials: true,
		strict_filters: true,
		root: ["_includes"]
	}

	eleventyConfig.setLibrary("liquid", new Liquid(options))

	eleventyConfig.addPassthroughCopy('assets')

	return {
		dir: {
			input: './',
			includes: 'includes'
		},
		passthroughFileCopy: true
	}
}
