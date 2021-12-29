const pathtoresolve = require('path');
const paths = require('./paths')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  
  // Where webpack looks to start building the bundle
  entry: [ 'whatwg-fetch', paths.src + '/main.js'],
  
  resolve: {
	  
	     // Note: Files with extentions .vue and .tsx are handled in the loader section which should be fine !
		 // However, the array of extentions may be enabled  and maybe tsx is not needed
         // extensions: [ 'tsx', '.ts', '.js', '.vue' ],
		 
		 // The project is ready to use Vanilla JavaScript too and .js should / may needed to be resolved here at least for "my logic :-)"
		 extensions: [ '.js' ],
		 alias: {
                'components': pathtoresolve.resolve(__dirname, '../src/components/'),
			    'images': pathtoresolve.resolve(__dirname, '../src/images/'),
		        'styles': pathtoresolve.resolve(__dirname, '../src/styles/'),
		        }
  },

  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  
  
  // Customize the webpack build process
  plugins: [
  
     // Vue plugin for the magic
    new VueLoaderPlugin(), 
	
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),
	
    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
        },
      ],
    }),

    // Generates an HTML file from a template
    // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/template.html', // template file
      filename: 'index.html', // output file
    }),
  ],

  // Determine how modules within the project are treated
  module: {
    
	rules: [
	
         // TypeScript files are handled here by the ts-loader 
		 // Note: It seems that both .tsx and .ts works in regexpr below
	     {
           
		   // Note: Maybe only .ts is needed ! 
		   // test: /\.tsx?$/,
		   
		  test: /\.(tsx|ts)$/,
          loader: "ts-loader",
          exclude: /node_modules/,
          options: {
                   // Tell to ts-loader: if you check .vue file extension, handle it like a ts file
                   appendTsSuffixTo: [/\.vue$/]
                  }
          },
	  
	     {test: /\.vue$/, loader: 'vue-loader' },
	  
	       // JavaScript: Use Babel to transpile JavaScript files
         {test: /\.js$/, exclude: /node_modules/, use: ['babel-loader']},

         // Styles: Inject CSS into the head with source maps
         {
           test: /\.(scss|css)$/,
               use: [
          
		           // Note: Only style-loader works for me !!!
		           // 'vue-style-loader',
		           'style-loader',
                   {loader: 'css-loader', options: {sourceMap: true, importLoaders: 1}},
                   {loader: 'postcss-loader', options: {sourceMap: true}},
                   {loader: 'sass-loader', options: {sourceMap: true}},
                ],
          },

           // Images: Copy image files to build folder
          {test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource'},

          // Fonts and SVGs: Inline files
          {test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline'},
    ],
  },
}
