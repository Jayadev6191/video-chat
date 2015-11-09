(function(){
		var socket = io.connect(window.location.origin);

		console.log(socket);
		socket.on('established',function(data){
			console.log(data);
			if(data.code===200){
				requestCameraAccess();
			}
		});
})();


function requestCameraAccess(){
	var panels = document.getElementsByClassName('video'),
			vendorUrl= window.URL || window.webKitURL;
		navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || 				navigator.msGetUserMedia;

		console.log(navigator.getMedia);

		navigator.getMedia({
			video:true,
			audio:false
		}, function(stream){
			// panels.src = vendorUrl.createObjectURL(stream);
			console.log(panels);
			for(var i=0;i<panels.length;i++){
				panels[i].src = vendorUrl.createObjectURL(stream);
			}
			// video.play();
		}, function(error){
			// An error occured			
		});
}