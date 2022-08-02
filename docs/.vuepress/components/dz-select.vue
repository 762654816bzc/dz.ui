<template>
    <div>
        <div class="row">
            <dz-select v-model="value" placeholder="请选择">
                <dz-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                ></dz-option>
            </dz-select>
            <pre v-highlightjs>
                <code class="vue">{{code1}}</code>
            </pre>
        </div>
    </div>
</template>
<script>
import select from '../../../packages/select/select';
import option from '../../../packages/select/option';
import Vue from 'vue';
import '../../../styles/index.scss';
import VueHighlightJS from 'vue-highlightjs';
Vue.use(VueHighlightJS);

export default {
    data() {
        return {
            options: [
                {
                    value: '选项1',
                    label: '黄金糕',
                },
                {
                    value: '选项2',
                    label: '双皮奶',
                },
                {
                    value: '选项3',
                    label: '蚵仔煎',
                },
                {
                    value: '选项4',
                    label: '龙须面',
                },
                {
                    value: '选项5',
                    label: '北京烤鸭',
                },
            ],
            value: '',
            code1: `
            <dz-select v-model="value" placeholder="请选择">
                <dz-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                ></dz-option>
            </dz-select>

            export default {
                data() {
                return {
                    options: [{
                    value: '选项1',
                    label: '黄金糕'
                    }, {
                    value: '选项2',
                    label: '双皮奶',
                    disabled: true
                    }, {
                    value: '选项3',
                    label: '蚵仔煎'
                    }, {
                    value: '选项4',
                    label: '龙须面'
                    }, {
                    value: '选项5',
                    label: '北京烤鸭'
                    }],
                    value: ''
                    }
                }
            }
                `
                .replace(/^\s*/gm, '')
                .trim(),
        };
    },
    components: {
        'dz-select': select,
        'dz-option': option,
    },
};
</script>

<style lang="scss" scoped>
.row {
    margin-top: 10px;
    margin-bottom: 10px;
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