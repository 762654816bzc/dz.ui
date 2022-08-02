// 导入组件
import Switch from './switch';
// 为组件提供install安装方法，供按需引入
Switch.install = (Vue) => {
    Vue.component(Switch.name, Switch);
};
// 暴露组件
export default Switch;
