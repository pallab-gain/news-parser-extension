import typescript from '@rollup/plugin-typescript';
import {terser} from 'rollup-plugin-terser';

const contentScript = {
    input: 'src/contentscript.ts',
    output: [
        {
            file: 'dist/contentscript.js',
            format: 'umd',
            name: 'NewsParserContentScript',
            sourcemap: false
        }
    ],
    plugins: [
        typescript(),
        terser({
            mangle: false,
            compress: false,
            format: {
                beautify: true,
                indent_level: 2
            }
        })
    ]
};

const backgroundScript = {
    input: 'src/backgroundscript.ts',
    output: [
        {
            file: 'dist/backgroundscript.js',
            format: 'umd',
            name: 'NewsParserBackgroundScript',
            sourcemap: false
        }
    ],
    plugins: [
        typescript(),
        terser({
            mangle: false,
            compress: false,
            format: {
                beautify: true,
                indent_level: 2
            }
        }),
    ]
};

export default [contentScript, backgroundScript];
