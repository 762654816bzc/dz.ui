<template>
    <div>
        <div class="row">
            <dz-popover
                position="top"
                title="标题"
                width="200"
                trigger="hover"
                content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
            >
                <dz-button slot="reference">hover 激活</dz-button>
            </dz-popover>
            <pre v-highlightjs>
                <code class="vue">{{code1}}</code>
            </pre>
        </div>
        <div class="row">
            <dz-popover
                position="bottom"
                title="标题"
                width="200"
                trigger="hover"
                content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
            >
                <dz-button slot="reference">hover 激活</dz-button>
            </dz-popover>
            <pre v-highlightjs>
                <code class="vue">{{code2}}</code>
            </pre>
        </div>

        <div class="row">
            <dz-popover
                position="left"
                title="标题"
                width="200"
                trigger="click"
                content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
            >
                <dz-button slot="reference">click 激活</dz-button>
            </dz-popover>
            <pre v-highlightjs>
                <code class="vue">{{code3}}</code>
            </pre>
        </div>

        <div class="row">
            <dz-popover
                position="right"
                title="标题"
                width="200"
                trigger="click"
                content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
            >
                <dz-button slot="reference">click 激活</dz-button>
            </dz-popover>
            <pre v-highlightjs>
                <code class="vue">{{code4}}</code>
            </pre>
        </div>
    </div>
</template>
<script>
import popover from '../../../packages/popover/popover';
import button from '../../../packages/button/button';
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
                <dz-popover
                    position="top"
                    title="标题"
                    width="200"
                    trigger="hover"
                    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
                >
                    <dz-button slot="reference">hover 激活</dz-button>
                </dz-popover>
                `
                .replace(/^\s*/gm, '')
                .trim(),
            code2: `
                <dz-popover
                    position="bottom"
                    title="标题"
                    width="200"
                    trigger="hover"
                    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
                >
                    <dz-button slot="reference">hover 激活</dz-button>
                </dz-popover>
                `
                .replace(/^\s*/gm, '')
                .trim(),
            code3: `
                <dz-popover
                    position="left"
                    title="标题"
                    width="200"
                    trigger="click"
                    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
                >
                    <dz-button slot="reference">click 激活</dz-button>
                </dz-popover>
                `
                .replace(/^\s*/gm, '')
                .trim(),
            code4: `
                <dz-popover
                    position="right"
                    title="标题"
                    width="200"
                    trigger="click"
                    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
                >
                    <dz-button slot="reference">click 激活</dz-button>
                </dz-popover>
                `
                .replace(/^\s*/gm, '')
                .trim(),
        };
    },
    components: {
        'dz-popover': popover,
        'dz-button': button,
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