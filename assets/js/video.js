$(document).ready(function () {
    $('.popup-vimeo').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });
});

var playButton = document.querySelector('.play-button');
var video = document.getElementById('myVideo');
var video_thumbnail = document.querySelector('.video-thumbnail');

playButton.addEventListener('click', function() {
  video.play();
  playButton.style.display = 'none';
  video.style.display = 'block';
  video_thumbnail.style.display = 'none';
});

video.addEventListener('ended', function() {
    video.style.display = 'none';
    playButton.style.display = 'block';
    video_thumbnail.style.display = 'block';
});
