<template>
    <div class="page-box">
        <div class="page-templete">
            <dz-block title="基础用法" :code="code1">
                <template #source>
                    <dz-button @click="dialogVisible = true"> 点击打开 Dialog </dz-button>
                    <dz-dialog title="提示" :visible.sync="dialogVisible" width="30%">
                        <span>这是一段信息</span>
                        <span slot="footer" class="dialog-footer">
                            <dz-button size="small" @click="dialogVisible = false">取 消</dz-button>
                            <dz-button type="primary" size="small" @click="dialogVisible = false">确 定</dz-button>
                        </span>
                    </dz-dialog>
                </template>
            </dz-block>
        </div>
        <div class="row">
            <dz-block title="居中布局" :code="code2">
                <template #source>
                    <dz-button @click="dialogVisible3 = true"> 点击打开 Dialog </dz-button>
                    <dz-dialog
                        title="提示"
                        :visible.sync="dialogVisible3"
                        :close-on-click-modal="false"
                        width="30%"
                        center
                    >
                        <span>这是一段信息</span>
                        <span slot="footer" class="dialog-footer">
                            <dz-button size="small" @click="dialogVisible3 = false">取 消</dz-button>
                            <dz-button type="primary" size="small" @click="dialogVisible3 = false">确 定</dz-button>
                        </span>
                    </dz-dialog>
                </template>
            </dz-block>
        </div>
    </div>
</template>
<script>
import dialog from '../../../packages/dialog/dialog';
import button from '../../../packages/button/button';
import block from '../../../packages/block/block';
import Vue from 'vue';
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
<dz-button type="primary" @click="dialogVisible = true">点击打开 Dialog</dz-button>
<dz-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
    <span>这是一段信息</span>
    <span slot="footer" class="dialog-footer">
        <dz-button @click="dialogVisible = false">取 消</dz-button>
        <dz-button type="primary" @click="dialogVisible = false">确 定</dz-button>
    </span>
</dz-dialog>
                `,

            code2: `
                <dz-button @click="dialogVisible3 = true"> 点击打开 Dialog </dz-button>
                    <dz-dialog
                        title="提示"
                        :visible.sync="dialogVisible3"
                        :close-on-click-modal="false"
                        width="30%"
                        cente
                    >
                        <span>这是一段信息</span>
                        <span slot="footer" class="dialog-footer">
                            <dz-button size="small" @click="dialogVisible3 = false">取 消</dz-button>
                            <dz-button type="primary" size="small" @click="dialogVisible3 = false">确 定</dz-button>
                        </span>
                    </dz-dialog>
            `,
        };
    },
    components: {
        'dz-dialog': dialog,
        'dz-button': button,
        'dz-block': block,
    },
    methods: {
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then((_) => {
                    done();
                })
                .catch((_) => {});
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