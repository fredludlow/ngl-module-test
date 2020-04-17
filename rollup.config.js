import buble from '@rollup/plugin-buble';
import resolve from '@rollup/plugin-node-resolve';

export default {
    input: 'index.js',
    plugins: [
        resolve(),
        buble()
    ],
    output: {file: 'dist/index.js', format: 'umd'}
}