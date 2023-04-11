import 'core-js/stable';
import 'regenerator-runtime/runtime';
import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import objectFitImages from 'object-fit-images';
// import objectFitVideos from 'object-fit-videos';

svg4everybody();
objectFitImages();
// objectFitVideos();

// import Swiper JS
import Swiper, { Navigation, Pagination, EffectFade, Grid } from 'swiper';

window.$ = $;
window.jQuery = $;
window.objectFitImages = objectFitImages;
window.Swiper = Swiper;
window.Navigation = Navigation;
window.Pagination = Pagination;
window.EffectFade = EffectFade;
window.Grid = Grid;
// window.objectFitVideos = objectFitVideos;

require('ninelines-ua-parser');
