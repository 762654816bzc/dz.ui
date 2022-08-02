// 导入组件
import CheckboxButton from './checkboxButton';
CheckboxButton.install = (Vue) => {
    Vue.component(CheckboxButton.name, CheckboxButton);
};
// 暴露组件
export default CheckboxButton;
