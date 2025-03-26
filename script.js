$(document).ready(function() {
    $(".learn-more").click(function() {
        alert("More features coming soon!");
    });
});
$(document).ready(function() {
    $(".learn-more").click(function() {
        $('html, body').animate({
            scrollTop: $(".body-system").first().offset().top
        }, 800);
    });

    function revealSections() {
        $(".body-system").each(function() {
            var top_of_element = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if (bottom_of_window > top_of_element + 50) {
                $(this).addClass("show");
            }
        });
    }

    $(window).on("scroll", revealSections);
    revealSections(); // Trigger once on page load
});
