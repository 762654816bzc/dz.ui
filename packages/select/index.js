import Option from './option.vue';
import Select from './select.vue';
Option.install = function(Vue) {
    Vue.component(Option.name, Option);
};
Select.install = function(Vue) {
    Vue.component(Select.name, Select);
};
export default { Option, Select };
