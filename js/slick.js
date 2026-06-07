$(function () {
  $(".p-k-reviews-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    centerMode: false,
    cssEase: "linear",
    prevArrow: ".p-k-reviews-list-left",
    nextArrow: ".p-k-reviews-list-right",
  });
});
