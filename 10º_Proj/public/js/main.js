/*$('.slider.principal').slick();/*é porque criou-se um novo arquivo e foi tirado do site http://kenwheeler.github.io/slick/  */

$('.slider-principal').slick({/*é para mostrar slides */
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
  autoplaySpeed: 1000 /*dá  1 seg para passar imagem */
})