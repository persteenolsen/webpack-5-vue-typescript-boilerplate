import Vue from "vue"

export default Vue.extend({
	 
  name: 'AppTsDemo',
  
  data() {
     
    let tsLocalMsn: string = '';
    tsLocalMsn = 'Vue ';
 
    return {
	
	       messageToTemplate: ' ' + tsLocalMsn + ' with TypeScript ' 
	
    }
  }

})
