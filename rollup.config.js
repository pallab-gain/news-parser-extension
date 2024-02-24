import typescript from '@rollup/plugin-typescript';
import {terser} from 'rollup-plugin-terser';

const contentScript = {
    input: 'src/contentscript.ts',
    output: [
        {
            file: 'extension/contentscript.js',
            format: 'umd',
            name: 'NewsParserContentScript',
            sourcemap: false
        }
    ],
    plugins: [
        typescript(),
        terser({
            mangle: {
                keep_fnames: true, // Prevents renaming of function names
                keep_classnames: true // Prevents renaming of class names (if applicable)
            },
            compress: false,
            format: {
                beautify: true,
                indent_level: 2,
            }
        })
    ]
};

const backgroundScript = {
    input: 'src/backgroundscript.ts',
    output: [
        {
            file: 'extension/backgroundscript.js',
            format: 'umd',
            name: 'NewsParserBackgroundScript',
            sourcemap: false
        }
    ],
    plugins: [
        typescript(),
        terser({
            mangle: {
                keep_fnames: true, // Prevents renaming of function names
                keep_classnames: true // Prevents renaming of class names (if applicable)
            },
            compress: false,
            format: {
                beautify: true,
            }
        }),
    ]
};

export default [contentScript, backgroundScript];
