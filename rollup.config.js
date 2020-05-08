import pkg from './package.json';
import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import css from 'rollup-plugin-css-porter';
import cpy from 'rollup-plugin-cpy';

export default [
    {
        input: 'index.js',
        output: { 
            file: pkg.browser,
            format: 'iife',
            name: 'SearchInput',
            sourcemap: true,
        },
        plugins: [
            resolve(),
            commonjs(),
            css({minified: false, dest: 'dist/scanex-search-input.css'}),
            cpy({
                files: [ 'src/*.png' ],
                dest: 'dist'            
            }),
            babel({                
                extensions: ['.js', '.mjs'],
                exclude: ['node_modules/@babel/**', 'node_modules/core-js/**'],
                include: ['index.js', 'src/**']
            }),
	],
    },
    {
        input: 'index.js',
        output: { 
            file: pkg.module,
            format: 'cjs',
            sourcemap: true,
        },
        plugins: [
            resolve(),
            commonjs(),
            css({minified: false, dest: 'dist/scanex-search-input.css'}),
            cpy({
                files: [ 'src/*.png' ],
                dest: 'dist'            
            }),
            babel({                
                extensions: ['.js', '.mjs'],
                exclude: ['node_modules/@babel/**', 'node_modules/core-js/**'],
                include: ['index.js', 'src/**']
            }),
        ],
    }
];