// 导入组件
import checkboxGroup from "./checkboxGroup.vue";
// 为组件提供install安装方法，供按需引入
checkboxGroup.install = Vue => {
    Vue.component(checkboxGroup.name, checkboxGroup)
}
// 暴露组件
export default checkboxGroup