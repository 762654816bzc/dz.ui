<template>
    <div>
        <div class="row">
           <dz-block title="基础用法" :code="code1">
            <template #source>
                <dz-input-number  v-model="num" :min="1" :max="10"></dz-input-number>
            </template>
        </dz-block>
        <dz-block title="禁用状态" :code="code2">
            <template #source>
                <dz-input-number v-model="num2" disabled></dz-input-number>
            </template>
        </dz-block>
        <dz-block title="严格步数" :code="code3">
            <template #source>
                <dz-input-number v-model="num3" :step="2"></dz-input-number>
            </template>
        </dz-block>
        <dz-block title="精度" :code="code4">
            <template #source>
                <dz-input-number v-model="num4" :precision="2" :step="0.1"></dz-input-number>
            </template>
        </dz-block>
        <dz-block title="尺寸" :code="code5">
            <template #source>
                <dz-input-number v-model="num5" :step="1" style="margin-right:15px"></dz-input-number>
                <dz-input-number size="medium" v-model="num5" :step="1" style="margin-right:15px"></dz-input-number>
                <dz-input-number size="small" v-model="num5" :step="1" style="margin-right:15px"></dz-input-number>
                <dz-input-number size="mini" v-model="num5" :step="1"></dz-input-number>
            </template>
        </dz-block>
        <dz-block title="按钮位置" :code="code6">
            <template #source>
                <dz-input-number v-model="num6" controls-position="right" :min="1" :max="10"></dz-input-number>
            </template>
        </dz-block>
        </div>
    </div>
</template>
<script>
import inputNumber from '../../../packages/input-number/inputNumber';
import block from '../../../packages/block/block';
import Vue from 'vue';
import '../../../styles/index.scss';
import VueHighlightJS from 'vue-highlightjs';
Vue.use(VueHighlightJS);

export default {
    data() {
        return {
             num: 1,
            num2: 1,
            num3: 5,
            num4: 1,
            num5: 1,
            num6: 1,
            code1: `
<dz-input-number v-model="num" :min="1" :max="10"></dz-input-number>
            `,
            code2: `
<dz-input-number v-model="num2" disabled></dz-input-number>
            `,
            code3: `
<dz-input-number v-model="num3" :step="2"></dz-input-number>
            `,
            code4: `
<dz-input-number v-model="num4" :precision="2" :step="0.1"></dz-input-number>
            `,
            code5: `
<dz-input-number v-model="num5" :step="1" style="margin-right:15px"></dz-input-number>
<dz-input-number size="medium" v-model="num5" :step="1" style="margin-right:15px"></dz-input-number>
<dz-input-number size="small" v-model="num5" :step="1" style="margin-right:15px"></dz-input-number>
<dz-input-number size="mini" v-model="num5" :step="1"></dz-input-number>
            `,
            code6:`
<dz-input-number v-model="num6" controls-position="right" :min="1" :max="10"></dz-input-number>
            `,
        };
    },
    components: {
        'dz-input-number': inputNumber,
        'dz-block': block,
    },
};
</script>

<style lang="scss" scoped>
.row {
    margin-top: 50px;
}
.dz-input {
    width: 180px;
}
</style>
<style>
.hljs-comment,
.hljs-quote {
    color: #d4d0ab;
}
.hljs-variable,
.hljs-template-variable,
.hljs-tag,
.hljs-name,
.hljs-selector-id,
.hljs-selector-class,
.hljs-regexp,
.hljs-deletion {
    color: #ffa07a;
}
.hljs-number,
.hljs-built_in,
.hljs-builtin-name,
.hljs-literal,
.hljs-type,
.hljs-params,
.hljs-meta,
.hljs-link {
    color: #f5ab35;
}
.hljs-attribute {
    color: #ffd700;
}
.hljs-string,
.hljs-symbol,
.hljs-bullet,
.hljs-addition {
    color: #abe338;
}
.hljs-title,
.hljs-section {
    color: #00e0e0;
}
.hljs-keyword,
.hljs-selector-tag {
    color: #dcc6e0;
}
.hljs {
    display: block;
    overflow-x: auto;
    background: #2b2b2b;
    color: #f8f8f2;
    padding: 0.5em;
}
.hljs-emphasis {
    font-style: italic;
}
.hljs-strong {
    font-weight: bold;
}
@media screen and (-ms-high-contrast: active) {
    .hljs-addition,
    .hljs-attribute,
    .hljs-built_in,
    .hljs-builtin-name,
    .hljs-bullet,
    .hljs-comment,
    .hljs-link,
    .hljs-literal,
    .hljs-meta,
    .hljs-number,
    .hljs-params,
    .hljs-string,
    .hljs-symbol,
    .hljs-type,
    .hljs-quote {
        color: highlight;
    }
    .hljs-keyword,
    .hljs-selector-tag {
        font-weight: bold;
    }
}
</style>
