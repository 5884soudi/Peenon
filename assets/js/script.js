$(function () {
    let mySwiper = new Swiper('.swiper', {
        // 自動再生
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },

        // 以下にオプションを設定
        loop: true, //最後に達したら先頭に戻る

        //ページネーション表示の設定
        pagination: {
            el: '.swiper-pagination', //ページネーションの要素
            type: 'bullets', //ページネーションの種類
            clickable: true, //クリックに反応させる
        },

        //ナビゲーションボタン（矢印）表示の設定
        navigation: {
            nextEl: '.swiper-button-next', //「次へボタン」要素の指定
            prevEl: '.swiper-button-prev', //「前へボタン」要素の指定
        },

        //スクロールバー表示の設定
        scrollbar: {
            el: '.swiper-scrollbar', //要素の指定
        },
        
    });

    $('.hamburger').on('click',function(){
        $(this).toggleClass('on');
        if($('.hamburger').hasClass('on')) {
            $('.header-right').addClass('fadeIn');
        }else{
            $('.header-right').removeClass('fadeIn');
        }
    });
    
})