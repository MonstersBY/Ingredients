import './vendor';
import './helpers';
import './components/social';
import { ieFix } from './vendor/ie-fix';
import { vhFix } from './vendor/vh-fix';
import { actualYear } from './modules/actualYear';
import header from './components/header';
import lazyLoading from './modules/lazyLoading';
import scrollToAnchor from './modules/scrollToAnchor';

import './amcharts/index';
import './amcharts/ru_RU';
import './amcharts/xy';
import './amcharts/percent';
import './amcharts/themes/Animated';

import './components/jquery.nice-select';
import './components/jquery.quicksearch';
import './components/jquery.multi-select';
import './components/search-header';
import './components/footer';
import './components/swiper_product_comparison';
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
import './components/swiper_brand';
import './components/modal_brand';
import './components/multi-select';
import './components/choose-tag';
import './components/swiper_product_cards';
import './components/modal_product_reviews';
import './components/swiper_review';
import './components/swiper_column_line';
import './components/modal-request';
import './components/fixed_sidebar';
import './components/modal_admin';
import './components/modal-experts';
import './components/number-of-actions';
import './components/actions-by-category';
import './components/action-in-store';
import './components/client_portrait__donut-chart';
import './components/client_portrait__column';
import './components/modal-instruction';
import './components/modal-note';
import './components/modal-advice';
import './components/modal-contacts';
import './components/swiper_trust';


$('select').niceSelect();

ieFix();
vhFix();
actualYear();
scrollToAnchor.init();

header.init();
lazyLoading.init();
