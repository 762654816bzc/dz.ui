// 导入组件
import radio from './radio.vue';
// 为组件提供install安装方法，供按需引入
radio.install = (Vue) => {
    Vue.component(radio.name, radio);
};
// 暴露组件
export default radio;
