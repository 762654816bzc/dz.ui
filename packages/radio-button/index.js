// 导入组件
import radioButton from "./radioButton.vue";
// 为组件提供install安装方法，供按需引入
radioButton.install = Vue => {
    Vue.component(radioButton.name, radioButton)
}
// 暴露组件
export default radioButton