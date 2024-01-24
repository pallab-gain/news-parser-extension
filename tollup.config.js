import typescript from '@rollup/plugin-typescript';
import {terser} from 'rollup-plugin-terser';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/bundle.min.js',
            format: 'umd',
            name: 'NewsParser',
            sourcemap: true
        }
    ],
    plugins: [
        typescript(),
        terser()
    ]
};
