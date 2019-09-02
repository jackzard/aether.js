// rollup.config.js
import typescript from 'rollup-plugin-typescript2'

const RollupConfig = (input, output, watch) => {
	return {
		input, watch,
		output: {file: output, format: 'es'},
		plugins: [typescript()]
	}
}

export default [
	RollupConfig(
		'./src/helpers/index.ts',
		'dist/helper.js',
		'src/helpers/**'
	),
	RollupConfig(
		'./src/bucket/index.ts',
		'dist/bucket.js',
		'src/bucket/**'
	),
	RollupConfig(
		'./src/bucket/pipes/index.ts',
		'dist/pipes.js',
		'src/bucket/pipes/**'
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

