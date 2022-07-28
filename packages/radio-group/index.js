// 导入组件
import radioGroup from "./radioGroup.vue";
// 为组件提供install安装方法，供按需引入
radioGroup.install = Vue => {
    Vue.component(radioGroup.name, radioGroup)
}
// 暴露组件
export default radioGroup