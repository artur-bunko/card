import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';

import postcss from 'rollup-plugin-postcss';

export default {
    input: 'src/',
    output: {
        dir: 'lib',
        format: 'iife', // use browser globals
        sourceMap: true
    },
    plugins: [postcss({
        extensions: ['.css']
    }),
        resolve({
            jsnext: true,
            main: true,
            browser: true,
        }),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
        }),
        replace({
            ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        }),
    ],
};