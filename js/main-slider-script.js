
	var tpj=jQuery;                  
    var revapi486;
    tpj(document).ready(function() {
        if(tpj("#rev_slider_one").revolution === undefined){
            revslider_showDoubleJqueryError("#rev_slider_one");
        }else{
            revapi486 = tpj("#rev_slider_one").show().revolution({
			sliderType:"standard",
                jsFileLocation:"plugins/revolution/js/",
                sliderLayout:"auto",
                dottedOverlay:"on",
                delay:10000,
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation:"off",
                    mouseScrollReverse:"default",
                    onHoverStop:"off",
                    touch:{
                        touchenabled:"on",
                        touchOnDesktop:"off",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    },
                    arrows: {
                        style:"gyges",
                        enable:true,
                        hide_onmobile:true,
                        hide_under:600,
                        hide_onleave:true,
                        tmp:'',
                        left: {
                            h_align:"left",
                            v_align:"center",
                            h_offset:15,
                            v_offset:-40
                        },
                        right: {
                            h_align:"right",
                            v_align:"center",
                            h_offset:15,
                            v_offset:-40
                        }
                    }
                },
                 responsiveLevels:[1166,1040,802,480],
                 visibilityLevels:[1166,1040,802,480],
                 gridwidth:[1166,1040,800,480],
                 gridheight:[889,840,780,620],
                 lazyType:"none",
                 parallax: {
                     type:"mouse",
                     origo:"enterpoint",
                     speed:1000,
                     levels:[1,2,3,4,5]
                 },
                 shadow:0,
                 spinner:"off",
                 stopLoop:"off",
                 stopAfterLoops:-1,
                 stopAtSlide:-1,
                 shuffle:"off",
                 autoHeight:"off",
                 hideThumbsOnMobile:"off",
                 hideSliderAtLimit:0,
                 hideCaptionAtLimit:0,
                 hideAllCaptionAtLilmit:0,
                 debugMode:false,
                 fallbacks: {
                     simplifyAll:"off",
                     nextSlideOnWindowFocus:"off",
                     disableFocusListener:false,
                 }
             });
         }


        if(tpj("#rev_slider_two").revolution === undefined){
            revslider_showDoubleJqueryError("#rev_slider_two");
        }else{
            revapi486 = tpj("#rev_slider_two").show().revolution({
            sliderType:"standard",
                jsFileLocation:"plugins/revolution/js/",
                sliderLayout:"auto",
                dottedOverlay:"on",
                delay:10000,
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation:"off",
                    mouseScrollReverse:"default",
                    onHoverStop:"off",
                    touch:{
                        touchenabled:"on",
                        touchOnDesktop:"off",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    },
                    arrows: {
                        style:"gyges",
                        enable:true,
                        hide_onmobile:true,
                        hide_under:600,
                        hide_onleave:true,
                        tmp:'',
                        left: {
                            h_align:"left",
                            v_align:"center",
                            h_offset:15,
                            v_offset:-50
                        },
                        right: {
                            h_align:"right",
                            v_align:"center",
                            h_offset:15,
                            v_offset:-50
                        }
                    }
                },
                 responsiveLevels:[1166,1040,802,480],
                 visibilityLevels:[1166,1040,802,480],
                 gridwidth:[1166,1040,802,480],
                 gridheight:[891,840,850,620],
                 lazyType:"none",
                 parallax: {
                     type:"mouse",
                     origo:"enterpoint",
                     speed:1000,
                     levels:[1,2,3,4,5]
                 },
                 shadow:0,
                 spinner:"off",
                 stopLoop:"off",
                 stopAfterLoops:-1,
                 stopAtSlide:-1,
                 shuffle:"off",
                 autoHeight:"off",
                 hideThumbsOnMobile:"off",
                 hideSliderAtLimit:0,
                 hideCaptionAtLimit:0,
                 hideAllCaptionAtLilmit:0,
                 debugMode:false,
                 fallbacks: {
                     simplifyAll:"off",
                     nextSlideOnWindowFocus:"off",
                     disableFocusListener:false,
                 }
             });
         }


         if(tpj("#rev_slider_three").revolution === undefined){
            revslider_showDoubleJqueryError("#rev_slider_three");
        }else{
            revapi486 = tpj("#rev_slider_three").show().revolution({
            sliderType:"standard",
                jsFileLocation:"plugins/revolution/js/",
                sliderLayout:"auto",
                dottedOverlay:"on",
                delay:10000,
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation:"off",
                    mouseScrollReverse:"default",
                    onHoverStop:"off",
                    touch:{
                        touchenabled:"on",
                        touchOnDesktop:"off",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    },
                    arrows: {
                        style:"gyges",
                        enable:true,
                        hide_onmobile:true,
                        hide_under:600,
                        hide_onleave:true,
                        tmp:'',
                        left: {
                            h_align:"left",
                            v_align:"center",
                            h_offset:0,
                            v_offset:0
                        },
                        right: {
                            h_align:"right",
                            v_align:"center",
                            h_offset:0,
                            v_offset:0
                        }
                    }
                },
                 responsiveLevels:[1200,1040,802,480],
                 visibilityLevels:[1200,1040,802,480],
                 gridwidth:[1200,1040,800,480],
                 gridheight:[870,800,800,800],
                 lazyType:"none",
                 parallax: {
                     type:"mouse",
                     origo:"enterpoint",
                     speed:1000,
                     levels:[1,2,3,4,5]
                 },
                 shadow:0,
                 spinner:"off",
                 stopLoop:"off",
                 stopAfterLoops:-1,
                 stopAtSlide:-1,
                 shuffle:"off",
                 autoHeight:"off",
                 hideThumbsOnMobile:"off",
                 hideSliderAtLimit:0,
                 hideCaptionAtLimit:0,
                 hideAllCaptionAtLilmit:0,
                 debugMode:false,
                 fallbacks: {
                     simplifyAll:"off",
                     nextSlideOnWindowFocus:"off",
                     disableFocusListener:false,
                 }
             });
         }


     }); /*ready*/