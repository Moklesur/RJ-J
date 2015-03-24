(function($, Drupal) {
    Drupal.behaviors.jiggco = {
        attach: function(context, settings) {
            var link = $("div.background-image").html();
            var css = '.node-type-profile #member,.video-show-landing #member,.radio-show-landing #member { background-image: url("' + link + '")}',
                head = document.head || document.getElementsByTagName('head')[0],
                style = document.createElement('style');
            style.type = 'text/css';
            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }
            head.appendChild(style);
            $(document).foundation({
                equalizer: {
                    equalize_on_stack: false
                }
            });
            $('#sp-carousel').carouFredSel({
                width: '100%',
                items: 10,
                scroll: {
                    pauseOnHover: true,
                    items: 1,
                    easing: 'linear',
                    duration: 3000,
                    timeoutDuration: 0,
                    onBefore: function() {
                        $(this).children().removeClass('hover');
                    }
                },
                auto: true
            });
            $('#Container').mixItUp();
            $('#title-nav-hover li').mouseenter(function() {
                //$('.title-nav a.active').addClass('title-nav-focus');
            }).mouseout(function() {
                //$('.title-nav a.active').removeClass('title-nav-focus');
            });
            $('#user-menu a.account').mouseenter(function() {
                $(this).addClass('account-on');
            });
            $('#user-menu ul.account-d').mouseout(function() {
                //$('#user-menu a.account').delay(2800).removeClass('account-on');
            });
            $('#user-menu a.cart').mouseenter(function() {
                //$(this).addClass('cart-on');
            });
            $('#user-menu ul.cart-d').mouseout(function() {
                //$('#user-menu a.cart').delay(800).removeClass('cart-on');
            });
            $('.p-type li button').on('click', function() {
                var id = $(this).attr('data-filter');
                $(this).removeClass('active');
                if (id === '.audio') {
                    $('.pane-situation-room-panes-panel-pane-2').fadeOut();
                    $('.pane-situation-room-panes-panel-pane-7').fadeIn();
                }
                if (id === '.video') {
                    $('.pane-situation-room-panes-panel-pane-7').fadeOut();
                    $('.pane-situation-room-panes-panel-pane-2').fadeIn();
                }
                if (id === '.all') {
                    $('.pane-situation-room-panes-panel-pane-7').fadeIn();
                    $('.pane-situation-room-panes-panel-pane-2').fadeIn();
                }
            });
            $('.flex-next').css('opacity', 0.4);
            $('.flex-prev').css('opacity', 0.4);
            $('.flex-next').hover(function() {
                $(this).find('img').stop().fadeTo('slow', 1);
            }, function() {
                $(this).find('img').stop().fadeTo('slow', 0.4);
            });
            $('.flex-prev').hover(function() {
                $(this).find('img').stop().fadeTo('slow', 1);
            }, function() {
                $(this).find('img').stop().fadeTo('slow', 0.4);
            });
            $('#flexslider-main').removeData("flexslider");
            $('.pane-situation-room-panes-panel-pane-23').removeData("flexslider");
            $('#flexslider-main').flexslider({
                animation: Modernizr.touch ? "slide" : "slide",
                directionNav: false,
                controlsContainer: "#controls",
                touch: true,
                after: function() {}
            });
            $('.pane-situation-room-panes-panel-pane-23').flexslider({
                animation: Modernizr.touch ? "slide" : "slide",
                directionNav: false,
                controlsContainer: "#controls",
                touch: true,
                after: function() {}
            });
            $('#flexslider-40').flexslider({
                animation: Modernizr.touch ? "slide" : "slide",
                itemWidth: 350,
                itemMargin: 5,
                minItems: 1,
                maxItems: 9,
                slideshow: false,
                controlNav: false
            });
            $('#flexslider-150').flexslider({
                animation: Modernizr.touch ? "slide" : "slide",
                itemWidth: 350,
                itemMargin: 5,
                minItems: 1,
                maxItems: 9,
                slideshow: false,
                controlNav: false
            });
            $('#flexslider-156').flexslider({
                animation: Modernizr.touch ? "slide" : "slide",
                itemWidth: 350,
                itemMargin: 5,
                minItems: 1,
                maxItems: 9,
                slideshow: false,
                controlNav: false
            });
            $('#flexslider-103201').flexslider({
                animation: Modernizr.touch ? "slide" : "slide",
                itemWidth: 350,
                itemMargin: 5,
                minItems: 1,
                maxItems: 9,
                slideshow: false,
                controlNav: false
            });
            $('#flexslider-2620').flexslider({
                animation: Modernizr.touch ? "slide" : "slide",
                itemWidth: 350,
                itemMargin: 5,
                minItems: 1,
                maxItems: 9,
                slideshow: false,
                controlNav: false
            });
            $('#flexslider-2748').flexslider({
                animation: Modernizr.touch ? "slide" : "slide",
                itemWidth: 350,
                itemMargin: 5,
                minItems: 1,
                maxItems: 9,
                slideshow: false,
                controlNav: false
            });
            $('#flexslider-95277').flexslider({
                animation: Modernizr.touch ? "slide" : "slide",
                itemWidth: 350,
                itemMargin: 5,
                minItems: 1,
                maxItems: 9,
                slideshow: false,
                controlNav: false
            });
            $('#flexslider-102767').flexslider({
                animation: Modernizr.touch ? "slide" : "slide",
                itemWidth: 350,
                itemMargin: 5,
                minItems: 1,
                maxItems: 9,
                slideshow: false,
                controlNav: false
            });
            $('#flexslider-audio-40').flexslider({
                animation: Modernizr.touch ? "slide" : "slide",
                itemWidth: 350,
                itemMargin: 5,
                minItems: 1,
                maxItems: 9,
                slideshow: false,
                controlNav: false
            });
            $('#flexslider-audio-150').flexslider({
                animation: Modernizr.touch ? "slide" : "slide",
                itemWidth: 350,
                itemMargin: 5,
                minItems: 1,
                maxItems: 9,
                slideshow: false,
                controlNav: false
            });
            $('#flexslider-audio-156').flexslider({
                animation: Modernizr.touch ? "slide" : "slide",
                itemWidth: 350,
                itemMargin: 5,
                minItems: 1,
                maxItems: 9,
                slideshow: false,
                controlNav: false
            });
            $('#flexslider-audio-103201').flexslider({
                animation: Modernizr.touch ? "slide" : "slide",
                itemWidth: 350,
                itemMargin: 5,
                minItems: 1,
                maxItems: 9,
                slideshow: false,
                controlNav: false
            });
            $('#flexslider-audio-2620').flexslider({
                animation: Modernizr.touch ? "slide" : "slide",
                itemWidth: 350,
                itemMargin: 5,
                minItems: 1,
                maxItems: 9,
                slideshow: false,
                controlNav: false
            });
            $('#flexslider-audio-2748').flexslider({
                animation: Modernizr.touch ? "slide" : "slide",
                itemWidth: 350,
                itemMargin: 5,
                minItems: 1,
                maxItems: 9,
                slideshow: false,
                controlNav: false
            });
            $('#flexslider-audio-95277').flexslider({
                animation: Modernizr.touch ? "slide" : "slide",
                itemWidth: 350,
                itemMargin: 5,
                minItems: 1,
                maxItems: 9,
                slideshow: false,
                controlNav: false
            });
            $('#flexslider-audio-102767').flexslider({
                animation: Modernizr.touch ? "slide" : "slide",
                itemWidth: 350,
                itemMargin: 5,
                minItems: 1,
                maxItems: 9,
                slideshow: false,
                controlNav: false
            });
            $('#flexslider-audio-75030').flexslider({
                animation: Modernizr.touch ? "slide" : "slide",
                itemWidth: 350,
                itemMargin: 5,
                minItems: 1,
                maxItems: 9,
                slideshow: false,
                controlNav: false
            });
            $('#flexslider-audio-2743').flexslider({
                animation: Modernizr.touch ? "slide" : "slide",
                itemWidth: 350,
                itemMargin: 5,
                minItems: 1,
                maxItems: 9,
                slideshow: false,
                controlNav: false
            });
            $('#flexslider-audio-2746').flexslider({
                animation: Modernizr.touch ? "slide" : "slide",
                itemWidth: 350,
                itemMargin: 5,
                minItems: 1,
                maxItems: 9,
                slideshow: false,
                controlNav: false
            });
            $('#flexslider-audio-2742').flexslider({
                animation: Modernizr.touch ? "slide" : "slide",
                itemWidth: 350,
                itemMargin: 5,
                minItems: 1,
                maxItems: 9,
                slideshow: false,
                controlNav: false
            });
            $('#flexslider-audio-2545').flexslider({
                animation: Modernizr.touch ? "slide" : "slide",
                itemWidth: 350,
                itemMargin: 5,
                minItems: 1,
                maxItems: 9,
                slideshow: false,
                controlNav: false
            });
            $('#flexslider-audio-107761').flexslider({
                animation: Modernizr.touch ? "slide" : "slide",
                itemWidth: 350,
                itemMargin: 5,
                minItems: 1,
                maxItems: 9,
                slideshow: false,
                controlNav: false
            });
            $('#flexslider-audio-103203').flexslider({
                animation: Modernizr.touch ? "slide" : "slide",
                itemWidth: 350,
                itemMargin: 5,
                minItems: 1,
                maxItems: 9,
                slideshow: false,
                controlNav: false
            });
            $('.flexslider-video-related').flexslider({
                animation: Modernizr.touch ? "slide" : "slide",
                itemWidth: 350,
                itemMargin: 5,
                minItems: 1,
                maxItems: 9,
                slideshow: false,
                controlNav: false
            });
            $('#flexslider-topic-742').flexslider({
                animation: Modernizr.touch ? "slide" : "slide",
                itemWidth: 350,
                itemMargin: 5,
                minItems: 1,
                maxItems: 9,
                slideshow: false,
                controlNav: false
            });
            $('#flexslider-topic-745').flexslider({
                animation: Modernizr.touch ? "slide" : "slide",
                itemWidth: 350,
                itemMargin: 5,
                minItems: 1,
                maxItems: 9,
                slideshow: false,
                controlNav: false
            });
            $('#flexslider-topic-748').flexslider({
                animation: Modernizr.touch ? "slide" : "slide",
                itemWidth: 350,
                itemMargin: 5,
                minItems: 1,
                maxItems: 9,
                slideshow: false,
                controlNav: false
            });
            $('#flexslider-topic-751').flexslider({
                animation: Modernizr.touch ? "slide" : "slide",
                itemWidth: 350,
                itemMargin: 5,
                minItems: 1,
                maxItems: 9,
                slideshow: false,
                controlNav: false
            });
            $('#flexslider-topic-754').flexslider({
                animation: Modernizr.touch ? "slide" : "slide",
                itemWidth: 350,
                itemMargin: 5,
                minItems: 1,
                maxItems: 9,
                slideshow: false,
                controlNav: false
            });
            $("#members").introLoader({
                animation: {
                    name: 'simpleLoader',
                    options: {
                        exitFx:'fadeOut',
                        ease: "linear",
                        style: 'light',
                        delayBefore: 500,
                        exitTime: 300
                    }
                },
                spinJs: {}
            });
            $('img.player-c').click(function() {
                parent.history.back();
                return false;
            });
            var width = $(window).width();
            if (width > 1280) {
                var sticky_navigation_offset_top = $('#sticky_navigation').offset().top;
                var sticky_navigation = function() {
                    var scroll_top = $(window).scrollTop();
                    if (scroll_top > sticky_navigation_offset_top) {
                        $('#sticky_navigation').css({
                            'position': 'fixed',
                            'top': 0,
                            'left': 0
                        });
                        $('#sticky_navigation').addClass('stuck');
                        $('.content-area').addClass('ca-stuck');
                    } else {
                        $('#sticky_navigation').css({
                            'position': 'relative'
                        });
                        $('#sticky_navigation').removeClass('stuck');
                        $('.content-area').removeClass('ca-stuck');
                    }
                };
                sticky_navigation();
                $(window).scroll(function() {
                    sticky_navigation();
                });
            }
        }
    };
})(jQuery, Drupal);