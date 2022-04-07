function try_now(){
    document.querySelector('header h1').classList.add('content_hide_up');
    document.querySelector('header button').classList.add('content_hide_down');
    document.querySelector('.h_text').classList.add('content_hide_down');
    document.querySelector('header').classList.add('video');
    document.querySelector('#play_video_button').classList.add('content_hide');
    document.querySelector('#back_button').style.display = "block";
}
function try_later(){
    document.querySelector('header h1').classList.remove('content_hide_up');
    document.querySelector('header button').classList.remove('content_hide_down');
    document.querySelector('.h_text').classList.remove('content_hide_down');
    document.querySelector('header').classList.remove('video');
    document.querySelector('#play_video_button').classList.remove('content_hide');
    document.querySelector('#back_button').style.display = "none";
}