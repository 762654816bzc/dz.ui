<template>
    <div>
        <div class="row">
            <h3>基础用法</h3>
            <dz-checkbox v-model="checked">备选项</dz-checkbox>
            <pre v-highlightjs>
            <code class="vue">{{code1}}</code>
            </pre>
        </div>
        <div class="row">
            <h3>禁用状态</h3>
            <dz-checkbox v-model="checked1" disabled>备选项1</dz-checkbox>
            <dz-checkbox v-model="checked2" disabled>备选项</dz-checkbox>
            <pre v-highlightjs>
            <code class="vue">{{code2}}</code>
            </pre>
        </div>
        <div class="row">
            <h3>多选框组</h3>
            <dz-checkbox-group v-model="checkList">
                <dz-checkbox disabled>复选框A</dz-checkbox>
                <dz-checkbox disabled label="复选框B">复选框B</dz-checkbox>
                <dz-checkbox disabled label="复选框C"></dz-checkbox>
                <dz-checkbox disabled label="禁用"></dz-checkbox>
                <dz-checkbox disabled label="选中且禁用"></dz-checkbox>
            </dz-checkbox-group>
            <dz-checkbox-group v-model="checkList2" style="margin-top: 20px">
                <dz-checkbox>复选框A</dz-checkbox>
                <dz-checkbox label="复选框B">复选框B</dz-checkbox>
                <dz-checkbox label="复选框C"></dz-checkbox>
                <dz-checkbox disabled label="禁用"></dz-checkbox>
                <dz-checkbox disabled label="选中且禁用"></dz-checkbox>
            </dz-checkbox-group>
            <pre v-highlightjs>
            <code class="vue">{{code3}}</code>
            </pre>
        </div>
        <div class="row">
            <h3>indeterminate 状态</h3>
            <dz-checkbox
                :indeterminate="isIndeterminate"
                v-model="checkAll"
                @change="handleCheckAllChange"
                >全选</dz-checkbox
            >
            <dz-checkbox-group
                v-model="checkedCities"
                style="margin-top: 20px"
                @change="handleCheckedCitiesChange"
            >
                <dz-checkbox v-for="city in cities" :label="city" :key="city">{{
                    city
                }}</dz-checkbox>
            </dz-checkbox-group>
            <pre v-highlightjs>
            <code class="vue">{{code4}}</code>
            </pre>
        </div>
        <div class="row">
            <h3>按钮样式</h3>
            <dz-checkbox-group v-model="checkList3">
                <dz-checkbox-button label="上海"></dz-checkbox-button>
                <dz-checkbox-button label="北京"></dz-checkbox-button>
                <dz-checkbox-button label="广州"></dz-checkbox-button>
                <dz-checkbox-button label="深圳"></dz-checkbox-button>
            </dz-checkbox-group>
            <dz-checkbox-group
                size="medium"
                v-model="checkList4"
                style="margin-top: 20px"
            >
                <dz-checkbox-button label="上海"></dz-checkbox-button>
                <dz-checkbox-button label="北京"></dz-checkbox-button>
                <dz-checkbox-button label="广州"></dz-checkbox-button>
                <dz-checkbox-button label="深圳"></dz-checkbox-button>
            </dz-checkbox-group>
            <dz-checkbox-group
                size="small"
                v-model="checkList5"
                style="margin-top: 20px"
            >
                <dz-checkbox-button label="上海"></dz-checkbox-button>
                <dz-checkbox-button disabled label="北京"></dz-checkbox-button>
                <dz-checkbox-button label="广州"></dz-checkbox-button>
                <dz-checkbox-button label="深圳"></dz-checkbox-button>
            </dz-checkbox-group>
            <dz-checkbox-group
                size="mini"
                disabled
                v-model="checkList6"
                style="margin-top: 20px"
            >
                <dz-checkbox-button label="上海"></dz-checkbox-button>
                <dz-checkbox-button label="北京"></dz-checkbox-button>
                <dz-checkbox-button label="广州"></dz-checkbox-button>
                <dz-checkbox-button label="深圳"></dz-checkbox-button>
            </dz-checkbox-group>
            <pre v-highlightjs>
            <code class="vue">{{code5}}</code>
            </pre>
        </div>
    </div>
</template>

<script>
const cityOptions = ["上海", "北京", "广州", "深圳"];
import checkbox from "../../../packages/checkbox/checkbox";
import checkboxGroup from "../../../packages/checkbox-group/checkboxGroup";
import checkboxButton from "../../../packages/checkbox-button/checkboxButton";
import Vue from "vue";
import "../../../styles/index.scss";
import VueHighlightJS from "vue-highlightjs";
Vue.use(VueHighlightJS);

export default {
    data() {
        return {
            checked: true,
            checked1: false,
            checked2: true,
            checkList: ["复选框A", "选中且禁用"],
            checkList2: ["复选框A", "选中且禁用"],
            checkList3: ["上海"],
            checkList4: ["上海"],
            checkList5: ["上海"],
            checkList6: ["上海"],
            checkedCities: ["上海", "北京"],
            cities: cityOptions,
            checkAll: false,
            isIndeterminate: true,
            code1: `
                 <dz-checkbox v-model="checked">备选项</dz-checkbox>
                `
                .replace(/^\s*/gm, "")
                .trim(),
            code2: `
                <dz-checkbox v-model="checked1" disabled>备选项1</dz-checkbox>
                <dz-checkbox v-model="checked2" disabled>备选项</dz-checkbox>
                `
                .replace(/^\s*/gm, "")
                .trim(),
            code3: `
                <dz-checkbox-group v-model="checkList">
                    <dz-checkbox disabled>复选框A</dz-checkbox>
                    <dz-checkbox disabled label="复选框B">复选框B</dz-checkbox>
                    <dz-checkbox disabled label="复选框C"></dz-checkbox>
                    <dz-checkbox disabled label="禁用"></dz-checkbox>
                    <dz-checkbox disabled label="选中且禁用"></dz-checkbox>
                </dz-checkbox-group>
                <dz-checkbox-group v-model="checkList2" style="margin-top: 20px">
                    <dz-checkbox>复选框A</dz-checkbox>
                    <dz-checkbox label="复选框B">复选框B</dz-checkbox>
                    <dz-checkbox label="复选框C"></dz-checkbox>
                    <dz-checkbox disabled label="禁用"></dz-checkbox>
                    <dz-checkbox disabled label="选中且禁用"></dz-checkbox>
                </dz-checkbox-group>
                `
                .replace(/^\s*/gm, "")
                .trim(),
            code4: `
                <dz-checkbox
                    :indeterminate="isIndeterminate"
                    v-model="checkAll"
                    @change="handleCheckAllChange"
                    >全选</dz-checkbox
                >
                <dz-checkbox-group
                    v-model="checkedCities"
                    style="margin-top: 20px"
                    @change="handleCheckedCitiesChange"
                >
                    <dz-checkbox v-for="city in cities" :label="city" :key="city">{{
                        city
                    }}</dz-checkbox>
                </dz-checkbox-group>

                
                const cityOptions = ['上海', '北京', '广州', '深圳'];
                checkedCities: ['上海','北京'],
                cities: cityOptions,
                checkAll: false,
                isIndeterminate: true,

                handleCheckAllChange(val){
                    this.checkedCities = val ? cityOptions : [];
                    this.isIndeterminate = false
                },
                handleCheckedCitiesChange(value){
                    let checkedCount = value.length;
                    this.checkAll = checkedCount === this.cities.length;
                    this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
                }
                `
                .replace(/^\s*/gm, "")
                .trim(),
            code5: `
            <dz-checkbox-group v-model="checkList3">
                <dz-checkbox-button label="上海"></dz-checkbox-button>
                <dz-checkbox-button label="北京"></dz-checkbox-button>
                <dz-checkbox-button label="广州"></dz-checkbox-button>
                <dz-checkbox-button label="深圳"></dz-checkbox-button>
            </dz-checkbox-group>
            <dz-checkbox-group
                size="medium"
                v-model="checkList4"
                style="margin-top: 20px"
            >
                <dz-checkbox-button label="上海"></dz-checkbox-button>
                <dz-checkbox-button label="北京"></dz-checkbox-button>
                <dz-checkbox-button label="广州"></dz-checkbox-button>
                <dz-checkbox-button label="深圳"></dz-checkbox-button>
            </dz-checkbox-group>
            <dz-checkbox-group
                size="small"
                v-model="checkList5"
                style="margin-top: 20px"
            >
                <dz-checkbox-button label="上海"></dz-checkbox-button>
                <dz-checkbox-button disabled label="北京"></dz-checkbox-button>
                <dz-checkbox-button label="广州"></dz-checkbox-button>
                <dz-checkbox-button label="深圳"></dz-checkbox-button>
            </dz-checkbox-group>
            <dz-checkbox-group
                size="mini"
                disabled
                v-model="checkList6"
                style="margin-top: 20px"
            >
                <dz-checkbox-button label="上海"></dz-checkbox-button>
                <dz-checkbox-button label="北京"></dz-checkbox-button>
                <dz-checkbox-button label="广州"></dz-checkbox-button>
                <dz-checkbox-button label="深圳"></dz-checkbox-button>
            </dz-checkbox-group>
            checkList3: ["上海"],
            checkList4: ["上海"],
            checkList5: ["上海"],
            checkList6: ["上海"],
                `
                .replace(/^\s*/gm, "")
                .trim(),
        };
    },
    components: {
        "dz-checkbox": checkbox,
        "dz-checkbox-group": checkboxGroup,
        "dz-checkbox-button": checkboxButton,
    },
    methods: {
        handleCheckAllChange(val) {
            this.checkedCities = val ? cityOptions : [];
            this.isIndeterminate = false;
        },
        handleCheckedCitiesChange(value) {
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.cities.length;
            this.isIndeterminate =
                checkedCount > 0 && checkedCount < this.cities.length;
        },
    },
};
</script>

<style lang="scss" scoped>
.row {
    margin-top: 10px;
}
.vue {
    white-space: pre-wrap;
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