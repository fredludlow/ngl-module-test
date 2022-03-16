import buble from '@rollup/plugin-buble';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'index.js',
    plugins: [
        resolve(),
	commonjs(), 
        buble()
    ],
    output: {file: 'dist/index.js', format: 'umd'}
}
