function route(handle, pathname){
	console.log("the pathname is: "+pathname);
	if (typeof handle[pathname] === 'function') {
		handle[pathname]();
	}else{
		console.log("no handle found.....");
	}
}
exports.route = route;