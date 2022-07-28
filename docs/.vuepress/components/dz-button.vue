<template>
    <div>
        <h3>基础用法</h3>
        <dz-button>default</dz-button>
        <dz-button type="primary">primary</dz-button>
        <dz-button type="info">info</dz-button>
        <dz-button type="success">success</dz-button>
        <dz-button type="warning">warning</dz-button>
        <dz-button type="danger">danger</dz-button>
        <pre v-highlightjs>
        <code class="vue">{{code1}}</code>
        </pre>

        <h3>禁用状态</h3>
        <dz-button disabled type="primary">disabled</dz-button>
        <pre v-highlightjs>
        <code class="vue">{{code2}}</code>
        </pre>

        <h3>图标按钮</h3>
        <dz-button icon="dz-icon-search" circle></dz-button>
        <dz-button type="primary" icon="dz-icon-edit" circle></dz-button>
        <dz-button type="success" icon="dz-icon-check" circle></dz-button>
        <dz-button type="info" icon="dz-icon-message" circle></dz-button>
        <dz-button type="warning" icon="dz-icon-star-off" circle></dz-button>
        <dz-button type="danger" icon="dz-icon-delete" circle></dz-button>
        <dz-button type="primary"
            >上传<i class="dz-icon-upload dz-icon--right"></i
        ></dz-button>
        <pre v-highlightjs>
        <code class="vue">{{code3}}</code>
        </pre>

        <h3>加载中</h3>
        <dz-button type="primary" :loading="true">加载中</dz-button>
        <pre v-highlightjs>
        <code class="vue">{{code4}}</code>
        </pre>

        <div class="row">
            <h3>不同尺寸</h3>
            <dz-button round>默认按钮</dz-button>
            <dz-button size="medium" round>中等按钮</dz-button>
            <dz-button size="small" round>小型按钮</dz-button>
            <dz-button size="mini" round native-type="reset"
                >超小按钮</dz-button
            >
            <pre v-highlightjs>
        <code class="vue">{{code5}}</code>
        </pre>
        </div>
    </div>
</template>

<script>
import btn from "../../../packages/button/button";
import Vue from "vue";
import "../../../styles/index.scss";
import VueHighlightJS from "vue-highlightjs";
Vue.use(VueHighlightJS);

export default {
    data() {
        return {
            code1: `
                <dz-button>default</dz-button>
                <dz-button type="primary">primary</dz-button>
       `
                .replace(/^\s*/gm, "")
                .trim(),
            code2: `
                <dz-button disabled type="primary">disabled</dz-button>    
       `
                .replace(/^\s*/gm, "")
                .trim(),
            code3: `
                <dz-button icon="dz-icon-search" circle></dz-button>
                <dz-button type="primary" icon="dz-icon-edit" circle></dz-button>
                <dz-button type="success" icon="dz-icon-check" circle></dz-button>
                <dz-button type="info" icon="dz-icon-message" circle></dz-button>
                <dz-button type="warning" icon="dz-icon-star-off" circle></dz-button>
                <dz-button type="danger" icon="dz-icon-delete" circle></dz-button>
                <dz-button type="primary">上传<i class="dz-icon-upload dz-icon--right"></i></dz-button>
                `
                .replace(/^\s*/gm, "")
                .trim(),
            code4: `
                <dz-button type="primary" :loading="true">加载中</dz-button> 
                `
                .replace(/^\s*/gm, "")
                .trim(),
            code5: `
               <dz-button round>默认按钮</dz-button>
               <dz-button size="medium" round>中等按钮</dz-button>
               <dz-button size="small" round>小型按钮</dz-button>
               <dz-button size="mini" round native-type="reset">超小按钮</dz-button>
                `
                .replace(/^\s*/gm, "")
                .trim(),
        };
    },
    components: {
        "dz-button": btn,
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
