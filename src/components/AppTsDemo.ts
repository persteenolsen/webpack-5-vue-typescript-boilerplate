import Vue from "vue"

export default Vue.extend({
	 
  name: 'AppTsDemo',
  
  data() {
     	
	// Note: For make sure the type checking works try to replace the empty string '' to a 0 and there should be a type error :-)
    let tsLocalMsn: string = '';
    tsLocalMsn = 'Vue ';
 
    return {
	
	       messageToTemplate: ' ' + tsLocalMsn + ' with TypeScript ' 
	
    }
  }

})
