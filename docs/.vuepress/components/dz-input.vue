<template>
    <div>
        <div class="row">
            <h3>基础用法</h3>
            <dz-input type="text"></dz-input>
            <pre v-highlightjs>
            <code class="vue">{{code1}}</code>
            </pre>
        </div>
        <div class="row">
            <h3>禁用状态</h3>
            <dz-input placeholder="请输入内容" :disabled="true"> </dz-input>
            <pre v-highlightjs>
            <code class="vue">{{code2}}</code>
            </pre>
        </div>
        <div class="row">
            <h3>可清空</h3>
            <dz-input placeholder="请输入内容" v-model="input" clearable>
            </dz-input>
            <pre v-highlightjs>
            <code class="vue">{{code3}}</code>
            </pre>
        </div>
        <div class="row">
            <h3>密码框</h3>
            <dz-input v-model="input1" placeholder="请输入内容" show-password>
            </dz-input>
            <pre v-highlightjs>
                <code class="vue">{{code4}}</code>
            </pre>
        </div>
        <div class="row">
            <h3>文本域</h3>
            <dz-input
                style="width: 180px"
                type="textarea"
                :rows="2"
                placeholder="请输入内容"
                v-model="textarea"
            >
            </dz-input>
            <pre v-highlightjs>
                <code class="vue">{{code5}}</code>
            </pre>
        </div>
    </div>
</template>
<script>
import input from "../../../packages/input/input";
import Vue from "vue";
import "../../../styles/index.scss";
import VueHighlightJS from "vue-highlightjs";
Vue.use(VueHighlightJS);

export default {
    data() {
        return {
            input: "",
            input1: "",
            textarea: "",
            code1: `
                <dz-input v-model="input" type="text"></dz-input>
                `
                .replace(/^\s*/gm, "")
                .trim(),
            code2: `
                <dz-input placeholder="请输入内容" v-model="input" :disabled="true">
                </dz-input>
                `
                .replace(/^\s*/gm, "")
                .trim(),
            code3: `
            <dz-input
                placeholder="请输入内容"
                v-model="input"
                clearable
            >
            </dz-input>
                `
                .replace(/^\s*/gm, "")
                .trim(),
            code4: `
            <dz-input
                style="width: 180px"
                placeholder="请输入内容"
                v-model="input"
                show-password
            >
            </dz-input>
                `
                .replace(/^\s*/gm, "")
                .trim(),
            code5: `
            <dz-input
                style="width: 180px"
                type="textarea"
                :rows="2"
                placeholder="请输入内容"
                v-model="textarea"
            >
            </dz-input>
                `
                .replace(/^\s*/gm, "")
                .trim(),
        };
    },
    components: {
        "dz-input": input,
    },
};
</script>

<style lang="scss" scoped>
.row {
    margin-top: 10px;
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