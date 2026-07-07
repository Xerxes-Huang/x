function switchPage(type) {
    switch(type) {
        case 'index':
            console.log('index.html');
            window.location.href = 'index.html';
            break;
        case 'text':
            console.log('text.html');
            window.location.href = 'text.html';
            break;
    }
}
const videoList = {
    v1: "css/assets/video/langyue.mp4",
    v2: "css/assets/video/title.mp4",
    v3: "css/assets/video/transportation.mp4",
    v4: "css/assets/video/four.mp4"
};

function playVideo(vidId) {
    const mask = document.querySelector('.video-mask');
    const player = document.getElementById('videoPlayer');
    
    if (!videoList[vidId]) return;
    player.src = videoList[vidId];
    player.load(); 
    mask.style.display = 'flex';
    player.muted = true;
    player.play().catch(err=>console.log('播放失败：',err));
}

function closeVideo() {
    const mask = document.querySelector('.video-mask');
    const player = document.getElementById('videoPlayer');
    mask.style.display = 'none';  
    player.pause();
    player.src = ''; 
}