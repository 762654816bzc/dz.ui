<template>
    <li class="dz-options__item" :class="selected ? 'selected' : ''" @click="handleClick">{{ label }}</li>
</template>

<script>
export default {
    name: 'dz-option',
    props: {
        label: {
            type: String,
            default: '',
        },
        value: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            selected: false,
        };
    },
    inject: ['root'],
    methods: {
        handleClick() {
            this.root.$on('input', (value) => {
                this.selected = value === this.label;
            });
            this.root.$emit('input', this.label);
        },
    },
};
</script>

<style lang="scss" scoped>
$class-prefix: 'dz-options__';
.#{$class-prefix}item {
    font-size: 14px;
    padding: 0 20px;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #606266;
    height: 34px;
    line-height: 34px;
    box-sizing: border-box;
    cursor: pointer;
    &:hover {
        background: #f5f7fa;
    }
    &.selected {
        color: #409eff;
        font-weight: 700;
    }
}
</style>