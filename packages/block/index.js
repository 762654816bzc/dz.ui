// 导入组件
import Block from './block';
// 为组件提供install安装方法，供按需引入
Block.install = (Vue) => {
    Vue.component(Block.name, Block);
};
// 暴露组件
export default Block;
