// rollup.config.js
import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'


const RollupConfig = (input, output, watch) => {
	return {
		input, watch,
		output: [{file: output, format: 'cjs'}],
		plugins: [
			typescript(),
			nodeResolve({preferBuiltins: true}),
			commonjs()
		]
	}
}

export default [
	RollupConfig(
		'./src/index.ts',
		'dist/index.cjs.js',
		'src/**'
	),
	// RollupConfig(
	// 	'./src/bucket/index.ts',
	// 	'dist/bucket.js',
	// 	'src/bucket/**'
	// ),
	// RollupConfig(
	// 	'./src/pipes/index.ts',
	// 	'dist/pipes.js',
	// 	'src/pipes/**'
	// ),
	// RollupConfig(
	// 	'./src/mixins/index.ts',
	// 	'dist/mixins.js',
	// 	'src/mixins/**'
	// ),
	// RollupConfig(
	// 	'./src/doms/index.ts',
	// 	'dist/doms.js',
	// 	'src/doms/**'
	// ),
]

