import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import css from 'rollup-plugin-css-porter';
import pkg from './package.json';
import copy from 'rollup-plugin-cpy';

export default [
    {
        input: 'index.js',
        output: { 
            file: pkg.browser,
            format: 'iife',
            name: 'SearchInput',
        },
        plugins: [
            resolve({ jsnext: true, main: false, module: true, browser: false }),
            commonjs(),
            css({minified: false, dest: 'dist/scanex-search-input.css'}),
            copy({
                files: [ 'src/*.png' ],
                dest: 'dist'            
            }),
            babel(),
        ],
    },
    {
        input: 'index.js',
        output: { 
            file: pkg.module,
            format: 'cjs',
        },
        plugins: [
            resolve({ jsnext: true, main: false, module: true, browser: false }),
            commonjs(),
            css({minified: false, dest: 'dist/scanex-search-input.css'}),
            copy({
                files: [ 'src/*.png' ],
                dest: 'dist'            
            }),
            babel(),
        ],
    },
    {
        input: 'index.js',
        output: { 
            file: pkg.main,
            format: 'esm',
        },
        plugins: [
            resolve({ jsnext: true, main: true, module: false, browser: false }),
            css({minified: false, dest: 'dist/scanex-search-input.css'}),
        ],
    }
];