import pkg from './package.json';
import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import css from 'rollup-plugin-css-porter';
import cpy from 'rollup-plugin-cpy';

export default [
    {
        input: 'example/example.js',
        output: { 
            file: 'public/main.js',
            format: 'iife',
            name: 'SearchInput',
            sourcemap: true,
            globals: {
                leaflet: 'L',                
            },
        },
        plugins: [
            resolve({
                dedupe: [
                    '@scanex/event-target',
                    'core-js',
                ]
            }),
            commonjs(),
            css({minified: false, dest: 'public/main.css'}),
            cpy({
                files: [ 'src/*.png' ],
                dest: 'public'
            }),
            babel({                
                extensions: ['.js', '.mjs'],
                exclude: ['node_modules/@babel/**', 'node_modules/core-js/**'],
                include: ['example/example.js', 'src/**','node_modules/**']
            }),
	],
    },
    {
        input: pkg.module,
        external: ['leaflet'],
        output: { 
            file: pkg.main,
            format: 'cjs',
            sourcemap: true,
            globals: {
                leaflet: 'L',                
            },
        },
        plugins: [
            resolve({
                dedupe: [
                    '@scanex/event-target',
                    'core-js',
                ]
            }),
            commonjs(),
            css({minified: false, dest: 'dist/scanex-search-input.css'}),
            cpy({
                files: [ 'src/*.png' ],
                dest: 'dist'            
            }),
            babel({                
                extensions: ['.js', '.mjs'],
                exclude: ['node_modules/@babel/**', 'node_modules/core-js/**'],
                include: ['index.js', 'src/**','node_modules/**']
            }),
        ],
    }
];