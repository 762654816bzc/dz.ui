<template>
    <div class="page-box">
        <div class="page-templete">
            <dz-block title="基础用法" :code="code1">
                <template #source>
                    <dz-button @click="open">打开消息框</dz-button>
                    <dz-button @click="open1">打开消息框</dz-button>
                    <dz-button @click="open2">打开消息框</dz-button>
                    <dz-button @click="open3">打开消息框</dz-button>
                </template>
            </dz-block>
        </div>
    </div>
</template>
<script>
import button from '../../../packages/button/button';
import block from '../../../packages/block/block';
import Vue from 'vue';
import Message from '../../../packages/message';
Vue.use(Message);
import '../../../styles/index.scss';
import VueHighlightJS from 'vue-highlightjs';
import 'highlight.js/styles/atom-one-dark.css';
Vue.use(VueHighlightJS);

export default {
    data() {
        return {
            dialogVisible: false,
            dialogVisible3: false,
            input1: '',
            textarea: '',
            code1: `
                <dz-button @click="open">打开消息框</dz-button>
                <dz-button @click="open1">打开消息框</dz-button>
                <dz-button @click="open2">打开消息框</dz-button>
                <dz-button @click="open3">打开消息框</dz-button>
                open(){
                    // this.$message({type:'success',message:'33333'})
                    this.$message.success('啊啊啊啊啊啊阿')
                },
                open1(){
                    // this.$message({type:'success',message:'33333'})
                    this.$message.info('啊啊啊啊啊啊阿')
                },
                open2(){
                    // this.$message({type:'success',message:'33333'})
                    this.$message.error('啊啊啊啊啊啊阿')
                },
                open3(){
                    // this.$message({type:'success',message:'33333'})
                    this.$message.warning('啊啊啊啊啊啊的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多的点点滴滴多多多多多阿')
                },
                `,
        };
    },
    components: {
        'dz-button': button,
        'dz-block': block,
    },
    methods: {
        open() {
            // this.$message({type:'success',message:'33333'})
            this.$message.success('啊啊啊啊啊啊阿');
        },
        open1() {
            // this.$message({type:'success',message:'33333'})
            this.$message.info('啊啊啊啊啊啊阿');
        },
        open2() {
            // this.$message({type:'success',message:'33333'})
            this.$message.error('啊啊啊啊啊啊阿');
        },
        open3() {
            // this.$message({type:'success',message:'33333'})
            this.$message.warning(
                '啊啊啊啊啊啊的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多的点点滴滴多多多多多阿'
            );
        },
    },
};
</script>

<style lang="scss" scoped>
.page-box {
    width: 100%;
}
.page-templete {
    margin-top: 10px;
}
</style>
<style>
</style>