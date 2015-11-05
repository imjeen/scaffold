
var gulp = require('gulp');

// look up all tasks
gulp.task('help',function(){
	var tasks = Object.keys(gulp.tasks);
	for(key in tasks){
		console.log('$ gulp ',tasks[key]);
	}
});
