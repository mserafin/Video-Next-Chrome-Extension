((doc) => {
	let isPlaying = (video) => {
		return !!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2);
	};
	
	let video = doc.querySelector('video');
	if (video && isPlaying(video)) {
		video.currentTime = video.duration;
		//video.playbackRate = 1000;
	}
}).call(this, document);
