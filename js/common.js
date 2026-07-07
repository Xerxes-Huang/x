function switchPage(type) {
    switch(type) {
        case 'index':
            console.log('index.html');
            window.location.href = 'index.html';
            break;
        case 'video':
            console.log('video.html');
             window.location.href = 'video.html'; 
            break;
        case 'text':
            console.log('text.html');
             window.location.href = 'text.html'; 
            break;
        case 'image':
            console.log('image.html');
             window.location.href = 'image.html'; 
            break;
    }
}
