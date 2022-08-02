<template>
    <div>
        <div class="row">
            <dz-block title="基础用法" :code="code1">
                <template #source>
                    <dz-switch v-model="value" activeColor="#13ce66" inactiveColor="#ff4949"></dz-switch>
                </template>
            </dz-block>
            <dz-block title="禁用状态" :code="code2">
                <template #source>
                    <dz-switch v-model="value1" disabled></dz-switch>
                    <dz-switch v-model="value2" disabled></dz-switch>
                </template>
            </dz-block>
                    <dz-block title="文字描述" :code="code3">
            <template #source>
                <div style="margin-bottom:20px">
                    <dz-switch v-model="value3" activeText="按年付费" inactiveText="按月付费"></dz-switch>
                </div>
                <div>
                    <dz-switch v-model="value4" activeText="按年付费" inactiveText="按月付费" activeColor="#13ce66" inactiveColor="#ff4949"></dz-switch>
                </div>
            </template>
        </dz-block>
        </div>

        <div class="row"></div>
    </div>
</template>
<script>
import switchTab from '../../../packages/switch/switch';
import block from '../../../packages/block/block';
import Vue from 'vue';
import '../../../styles/index.scss';
import VueHighlightJS from 'vue-highlightjs';
Vue.use(VueHighlightJS);

export default {
    data() {
        return {
            code1: `
<dz-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></dz-switch>
            `,
            code2: `
<dz-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></dz-switch>
            `,
            code3: `
<div style="margin-bottom:20px">
    <dz-switch v-model="value3" activeText="按年付费" inactiveText="按月付费"></dz-switch>
</div>
<div>
    <dz-switch v-model="value4" activeText="按年付费" inactiveText="按月付费" activeColor="#13ce66" inactiveColor="#ff4949"></dz-switch>
</div>
            `,
            value: true,
            value1: true,
            value2: false,
            value3: true,
            value4: true,
        };
    },
    components: {
        'dz-switch': switchTab,
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
