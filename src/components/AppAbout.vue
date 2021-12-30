<template>
  <div>
   
                <h1>Description</h1>
  
                - This Vue with TypeScript single page application ( SPA ) was created with a Webpack 5 configuration
                <br/> <br/>
				
                <b>Last Updated</b>  <br />
                - 30-12-2021 <br /> <br />
                				
                <b>Main functionality</b> <br />
                				                 
			    - Showing some of the power of Webpack <br />
				- TypeScript files are compiled by ts-loader<br />
				- The project allows TypeScript type checking by the ts-loader which is using tsc under the hood<br />
				- For better performance / an alternative the TypeScript type checking can be done by the Webpack plugin "fork-ts-checker-webpack-plugin"<br />
				- Using Hot Reload / HMR by Webpack Dev Server <br />
				- Partly support for IE 11<br />
				- Showing routing by Vue.js <br />
                - Vue with TypeScript<br />
				- Custom 404 Error Page. Click the Secret menu link for a demo <br />
			    - Serving static assets like images, styles and fonts <br />
			    - Simulate GET, POST, PUT and DELETE towards a test Web API <br /> <br />
               
			   
                <b>Module Bundler</b> <br />
                
                - Manuel configuration of the Webpack 5 from scratch <br /> <br />
				
                
				<b>The Vue single page application - The frontend</b> <br />
            
               
                - Mainly Vue.js<br />
				- Vue with TypeScript<br />
                - Bootstrap 4 by CDN for the responsive design <br /> <br />

            
                <b>The Web API - The backend</b> <br />
 
                - The Web API is jsonplaceholder used for testing frontends <br /> <br />

                				
                <b>Security</b> <br />
             
                - The only security is the use of HTTPS because it is a demo only <br /> <br />
				
				
				<b>Hosting</b> <br />
                - The application is hosted at a traditionel Webhotel <br /> <br />
             

                <b>Text Editor</b> <br />
             
			    - Visual Studio Code <br />
            			 
	
  </div>
</template>

<script>
export default {
    name: 'AppAbout'
};
</script>

<style lang="scss" scoped>
    .title {
        h1 {
            color: blue;
        }
    }
</style>