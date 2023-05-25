import './vendor';
import './helpers';
import './components/social';
import { ieFix } from './vendor/ie-fix';
import { vhFix } from './vendor/vh-fix';
import { actualYear } from './modules/actualYear';
import header from './components/header';
import lazyLoading from './modules/lazyLoading';
import scrollToAnchor from './modules/scrollToAnchor';


import './components/jquery.nice-select';
import './components/search-header';
import './components/footer';
import './components/swiper_materials';
import './components/swiper_solutions';
import './components/swiper_vendors';
import './components/swiper_news';
import './components/swiper_my_orders';
import './components/swiper_products_category';
import './components/swiper_grid';
import './components/navigation';
import './components/switcher';
import './components/displaying';
import './components/dropdown';
import './components/forms';
import './components/cabinet';
import './components/tags';
import './components/search';
import './components/filter_modal';
import './components/swiper_experts';
import './components/header_mobile';
import './components/modal_experts';
import './components/swiper_sample_request';
import './components/swiper_provider_orders';

$('select').niceSelect();

ieFix();
vhFix();
actualYear();
scrollToAnchor.init();

header.init();
lazyLoading.init();
