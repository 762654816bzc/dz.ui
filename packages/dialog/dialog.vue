<template>
    <transition name="dialog-wrapper">
        <div class="dz-dialog_wrapper" v-show="isShowDialog" @click.self="closeOnClickModalOther">
            <div class="dz-dialog" :style="`width:${width};margin-top:${top}`">
                <div class="dz-dialog_header" :center="center">
                    <span class="dz-dialog_title">
                        {{ title }}
                    </span>
                    <div class="dz-dialog_headerbtn" @click="dialog_headerbtn">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-close"></use>
                        </svg>
                    </div>
                </div>
                <div class="dz-dialog_body">
                    <slot v-if="$slots.default" />
                </div>
                <div class="dz-dialog_footer" :center="center">
                    <slot name="footer" v-if="$slots.footer" />
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'dz-dialog',
    props: {
        visible: {
            type: Boolean,
        },
        title: {
            type: String,
        },
        width: {
            type: String,
            default: '50%',
        },
        center: {
            type: Boolean,
            default: false,
        },
        top: {
            type: String,
            default: '15vh',
        },
        closeOnClickModal: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            isShowDialog: this.visible,
            vnode: null,
        };
    },
    methods: {
        dialog_headerbtn() {
            this.$emit('update:visible', false);
            this.$emit('close');
            this.isShowDialog = false;
        },
        closeOnClickModalOther() {
            if (this.closeOnClickModal) {
                this.dialog_headerbtn();
            }
        },
        append() {
            if (this.vnode) document.body.appendChild(this.vnode);
        },
        remove() {
            if (this.vnode) document.body.removeChild(this.vnode);
        },
    },
    mounted() {
        this.vnode = this.$el;
        if (this.isShowDialog) this.append();
    },
    watch: {
        visible(val) {
            this.isShowDialog = val;
            if (val) {
                this.append();
            } else {
                setTimeout(() => {
                    this.remove();
                    this.$emit('close');
                }, 300);
            }
        },
    },
};
</script>

<style  lang="scss" scoped>
.dialog-wrapper-enter-active,
.dialog-wrapper-leave-active {
    transition: all 0.3s;
}
.dialog-wrapper-enter {
    opacity: 0;
}
.dialog-wrapper-leave-to {
    opacity: 0;
}
.dz-dialog_wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    .dz-dialog {
        position: relative;
        margin: 0 auto 50px;
        background: #fff;
        border-radius: 2px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        box-sizing: border-box;
        width: 50%;
        width: 30%;
        .dz-dialog_header {
            padding: 20px 20px 10px;
            .dz-dialog_title {
                line-height: 24px;
                font-size: 18px;
                color: #303133;
            }
            .dz-dialog_headerbtn {
                display: inline-block;
                position: absolute;
                top: 20px;
                right: 20px;
                padding: 0;
                background: transparent;
                border: none;
                outline: none;
                cursor: pointer;
                font-size: 16px;
            }
        }
        .dz-dialog_body {
            padding: 30px 20px;
            color: #606266;
            font-size: 14px;
            word-break: break-all;
        }
        .dz-dialog_footer {
            padding: 10px 20px 20px;
            text-align: right;
            box-sizing: border-box;
            /deep/.dz-button:first-child {
                margin-right: 10px;
            }
            /deep/.dz-button:last-child {
                margin-left: 10px;
            }
        }
    }
    [center] {
        text-align: center !important;
    }
}
</style>
