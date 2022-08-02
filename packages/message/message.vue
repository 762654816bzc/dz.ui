<template>
    <div ref="dzMessage" v-show="visible" :class="['dz-message', `dz-message_${type}`]" :style="{ top: top + 'px' }">
        <div class="dz-message_main">
            <div style="display: inline-block; margin-right: 10px">
                <!-- <svg class="icon" aria-hidden="true">
                    <use :xlink:href="`#${icon}`"></use>
                </svg> -->
                <dz-icon class="icon" :name="`${icon}`"></dz-icon>
            </div>
            {{ message }}
        </div>
        <div class="dz-message_closeBtn" @click="dzMessage_closeBtn">
            <!-- <svg class="icon" aria-hidden="true">
                <use :xlink:href="'#icon-close'"></use>
            </svg> -->
            <dz-icon name="close"></dz-icon>
        </div>
    </div>
</template>

<script>
import icon from '../icon/icon';
let _MessageHeight = 0;
let _MessageTotalHeight = 30;
export default {
    name: 'dzMessage',
    components: {
        'dz-icon': icon,
    },
    data() {
        return {
            visible: false,
            message: '',
            top: -50,
            type: 'default',
            duration: 30000,
        };
    },
    methods: {
        dzMessage_closeBtn() {
            this.visible ? this.destroy() : null;
        },
        destroy() {
            _MessageTotalHeight -= _MessageHeight + 20;
            this.top = (_MessageTotalHeight + 20) * -1;
            setTimeout(() => {
                this.visible = false;
                this.$emit('close');
                this.$destroy(true);
                this.$el.parentNode.removeChild(this.$el); // 从DOM里将这个组件移除
            }, 500);
        },
    },
    mounted() {
        setTimeout(() => {
            _MessageHeight = this.$refs.dzMessage.offsetHeight;
            _MessageTotalHeight += _MessageHeight + 20;
            this.top = -1 * _MessageTotalHeight;
            this.top = _MessageTotalHeight;
            // this.top = 50;
        }, 100);
        setTimeout(() => {
            this.visible ? this.destroy() : null;
        }, this.duration);
    },
    computed: {
        icon() {
            let icon = '';
            if (this.type == 'info') {
                icon = 'info';
            } else if (this.type == 'success') {
                icon = 'success';
            } else if (this.type == 'warning') {
                icon = 'warning';
            } else if (this.type == 'error') {
                icon = 'error';
            }
            return icon;
        },
    },
};
</script>

<style lang="scss" scoped>
</style>
