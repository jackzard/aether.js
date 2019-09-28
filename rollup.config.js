// rollup.config.js
import typescript from 'rollup-plugin-typescript2'

const RollupConfig = (input, output, watch) => {
	return {
		input, watch,
		output: {file: output, format: 'commonjs'},
		plugins: [typescript({target:'es5'})]
	}
}

export default [
	RollupConfig(
		'./src/helpers/index.ts',
		'dist/helpers.js',
		'src/helpers/**'
	),
	RollupConfig(
		'./src/bucket/index.ts',
		'dist/bucket.js',
		'src/bucket/**'
	),
	RollupConfig(
		'./src/pipes/index.ts',
		'dist/pipes.js',
		'src/pipes/**'
	),
	RollupConfig(
		'./src/mixins/index.ts',
		'dist/mixins.js',
		'src/mixins/**'
	),
	RollupConfig(
		'./src/doms/index.ts',
		'dist/doms.js',
		'src/doms/**'
	),
]

