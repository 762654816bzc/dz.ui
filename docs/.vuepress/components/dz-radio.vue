<template>
    <div>
        <h3>基础用法</h3>
        <dz-radio v-model="radio" label="1">备选项1</dz-radio>
        <dz-radio v-model="radio" label="2">备选项2</dz-radio>
        <pre v-highlightjs>
        <code class="vue">{{code1}}</code>
        </pre>

        <h3>禁用状态</h3>
        <dz-radio v-model="radio1" label="禁用" disabled>备选项1</dz-radio>
        <dz-radio v-model="radio1" label="选中且禁用" disabled>备选项2</dz-radio>
        <pre v-highlightjs>
        <code class="vue">{{code2}}</code>
        </pre>

        <h3>单选框组</h3>
        <dz-radio-group disabled v-model="radio2">
            <dz-radio label="1">备选项1</dz-radio>
            <dz-radio label="2">备选项2</dz-radio>
            <dz-radio label="3">备选项3</dz-radio>
            <dz-radio label="4">备选项4</dz-radio>
        </dz-radio-group>
        <dz-radio-group v-model="radio3" style="margin-top: 20px">
            <dz-radio label="1">备选项1</dz-radio>
            <dz-radio label="2">备选项2</dz-radio>
            <dz-radio label="3">备选项3</dz-radio>
            <dz-radio label="4">备选项4</dz-radio>
        </dz-radio-group>
        <pre v-highlightjs>
        <code class="vue">{{code3}}</code>
        </pre>

        <h3>按钮样式</h3>
        <dz-radio-group v-model="radio4">
            <dz-radio-button label="上海"></dz-radio-button>
            <dz-radio-button label="北京"></dz-radio-button>
            <dz-radio-button label="广州"></dz-radio-button>
            <dz-radio-button label="深圳"></dz-radio-button>
        </dz-radio-group>
        <dz-radio-group v-model="radio5" size="medium" style="margin-top: 20px">
            <dz-radio-button label="上海"></dz-radio-button>
            <dz-radio-button label="北京"></dz-radio-button>
            <dz-radio-button label="广州"></dz-radio-button>
            <dz-radio-button label="深圳"></dz-radio-button>
        </dz-radio-group>
        <dz-radio-group v-model="radio6" size="small" style="margin-top: 20px">
            <dz-radio-button label="上海"></dz-radio-button>
            <dz-radio-button disabled label="北京"></dz-radio-button>
            <dz-radio-button label="广州"></dz-radio-button>
            <dz-radio-button label="深圳"></dz-radio-button>
        </dz-radio-group>
        <dz-radio-group disabled v-model="radio7" size="mini" style="margin-top: 20px">
            <dz-radio-button label="上海"></dz-radio-button>
            <dz-radio-button label="北京"></dz-radio-button>
            <dz-radio-button label="广州"></dz-radio-button>
            <dz-radio-button label="深圳"></dz-radio-button>
        </dz-radio-group>
        <pre v-highlightjs>
        <code class="vue">{{code4}}</code>
        </pre>
    </div>
</template>

<script>
import radio from '../../../packages/radio/radio';
import radioGroup from '../../../packages/radio-group/radioGroup';
import radioButton from '../../../packages/radio-button/radioButton';
import Vue from 'vue';
import '../../../styles/index.scss';
import VueHighlightJS from 'vue-highlightjs';
Vue.use(VueHighlightJS);

export default {
    data() {
        return {
            radio: '1',
            radio1: '选中且禁用',
            radio2: 1,
            radio3: 1,
            radio4: '上海',
            radio5: '上海',
            radio6: '上海',
            radio7: '上海',
            code1: `
                <dz-radio v-model="radio" label="1">备选项1</dz-radio>
                <dz-radio v-model="radio" label="2">备选项2</dz-radio>
                `
                .replace(/^\s*/gm, '')
                .trim(),
            code2: `
                <dz-radio v-model="radio1" label="禁用" disabled>备选项1</dz-radio>
                <dz-radio v-model="radio1" label="选中且禁用" disabled>备选项2</dz-radio>
                `
                .replace(/^\s*/gm, '')
                .trim(),
            code3: `
                <dz-radio-group disabled v-model="radio2">
                    <dz-radio label="1">备选项1</dz-radio>
                    <dz-radio label="2">备选项2</dz-radio>
                    <dz-radio label="3">备选项3</dz-radio>
                    <dz-radio label="4">备选项4</dz-radio>
                </dz-radio-group>
                <dz-radio-group v-model="radio3" style="margin-top: 20px">
                    <dz-radio label="1">备选项1</dz-radio>
                    <dz-radio label="2">备选项2</dz-radio>
                    <dz-radio label="3">备选项3</dz-radio>
                    <dz-radio label="4">备选项4</dz-radio>
                </dz-radio-group>
                `
                .replace(/^\s*/gm, '')
                .trim(),
            code4: `
                <dz-radio-group v-model="radio4">
                    <dz-radio-button label="上海"></dz-radio-button>
                    <dz-radio-button label="北京"></dz-radio-button>
                    <dz-radio-button label="广州"></dz-radio-button>
                    <dz-radio-button label="深圳"></dz-radio-button>
                </dz-radio-group>
                <dz-radio-group v-model="radio5" size="medium" style="margin-top: 20px">
                    <dz-radio-button label="上海"></dz-radio-button>
                    <dz-radio-button label="北京"></dz-radio-button>
                    <dz-radio-button label="广州"></dz-radio-button>
                    <dz-radio-button label="深圳"></dz-radio-button>
                </dz-radio-group>
                <dz-radio-group v-model="radio6" size="small" style="margin-top: 20px">
                    <dz-radio-button label="上海"></dz-radio-button>
                    <dz-radio-button disabled label="北京"></dz-radio-button>
                    <dz-radio-button label="广州"></dz-radio-button>
                    <dz-radio-button label="深圳"></dz-radio-button>
                </dz-radio-group>
                <dz-radio-group disabled v-model="radio7" size="mini" style="margin-top: 20px">
                    <dz-radio-button label="上海"></dz-radio-button>
                    <dz-radio-button label="北京"></dz-radio-button>
                    <dz-radio-button label="广州"></dz-radio-button>
                    <dz-radio-button label="深圳"></dz-radio-button>
                </dz-radio-group>
                `
                .replace(/^\s*/gm, '')
                .trim(),
            code5: `
               <dz-button round>默认按钮</dz-button>
               <dz-button size="medium" round>中等按钮</dz-button>
               <dz-button size="small" round>小型按钮</dz-button>
               <dz-button size="mini" round native-type="reset">超小按钮</dz-button>
                `
                .replace(/^\s*/gm, '')
                .trim(),
        };
    },
    components: {
        'dz-radio': radio,
        'dz-radio-group': radioGroup,
        'dz-radio-button': radioButton,
    },
};
</script>

<style lang="scss" scoped>
.row {
    margin-top: 10px;
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
