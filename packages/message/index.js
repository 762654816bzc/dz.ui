import Vue from 'vue';

const dzMessage = Vue.extend(require('./message.vue').default);

let nId = 1;
const Message = (options) => {
    let id = 'notice-' + nId++;
    options = options || {};
    if (typeof options === 'string') {
        //如果只传入字符串，将其设置为显示的信息
        options = {
            message: options //这里的message就是message.vue中data中的message
        };
    }

    const instance = new dzMessage({
        data: options
    });
    instance.id = id;
    instance.vm = instance.$mount();

    instance.vm.visible = true; //这里修改message.vue数据中的visible,这样message组件就显示出来
    instance.dom = instance.vm.$el; //获取到本实例的dom元素
    document.body.appendChild(instance.dom); // 将dom插入body
    instance.dom.style.zIndex = nId + 1001; // 后插入的Notice组件z-index加一，保证能盖在之前的上面
    // instance.dom.style.top = -500 + "px";

    return instance.vm;
};
['success', 'warning', 'info', 'error'].forEach((type) => {
    //同element-ui一样，在给Message绑定四个方法，直接调用
    Message[type] = (options) => {
        if (typeof options === 'string') {
            options = {
                message: options
            };
        }
        options.type = type;
        return Message(options);
    };
});

export default {
    message: Message,
    install(Vue) {
        Vue.prototype.$message = Message;
        Vue.message = Message;
    }
};
