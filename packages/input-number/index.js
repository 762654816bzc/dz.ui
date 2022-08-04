// 导入组件
import InputNumber from './inputNumber';
// 为组件提供install安装方法，供按需引入
InputNumber.install = (Vue) => {
    Vue.component(InputNumber.name, InputNumber);
};
// 暴露组件
export default InputNumber;
