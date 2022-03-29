$(document).ready(function() {
    // Toggle Video Modal

    function toggle_video_modal() {
        $(".js-trigger-video-modal").on("click", function(e) { 
            e.preventDefault();
            
            const id = $(this).attr("data-youtube-id");
            const autoplay = "?autoplay=1";
            const related_no = "&rel=0";
            const src = "https://www.youtube.com/embed/"+id+autoplay+related_no;

            console.log(src);

            $("#youtube").attr("src", src);

            $("body").addClass("show-video-modal noscroll");
        });
  

        function close_video_modal() {
            event.preventDefault();
            $("body").removeClass("show-video-modal noscroll");

            $("#youtube").attr("src", "");
        }

        $("body").on("click", ".close-video-modal, .video-modal .overlay", function(e) {
            close_video_modal();
        });

        $("body").keyup(function(e){
            if (e.keyCode == 27) {
                close_video_modal();
            }
        });

    }
    toggle_video_modal();


});

const article = document.querySelector("#main-btn");
let topOfBtn = article.offsetTop;

function fixButton() {
    if (window.scrollY >= topOfBtn) {
        document.body.style.paddingTop = article.offsetTop + 'px';
        document.body.classList.add('fixed');
    } else {
        document.body.classList.remove('fixed');
        document.body.style.paddingTop = 0;
    }
}

window.addEventListener('scroll', fixButton);


