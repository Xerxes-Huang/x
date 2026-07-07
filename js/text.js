function switchPage(type) {
    switch(type) {
        case 'video':
            console.log('video.html');
            window.location.href = 'video.html';
            break;
        case 'image':
            console.log('image.html');
            window.location.href = 'image.html';
            break;
    }
}