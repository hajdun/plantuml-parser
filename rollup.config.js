export default {
  input: 'dist/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
  },
  plugins: [ 
    resolve({ 
      extensions: ['.js'], 
    }), 
    babel({ 
      babelHelpers: 'bundled', 
      exclude: 'node_modules/**', 
    }), 
  ],
};