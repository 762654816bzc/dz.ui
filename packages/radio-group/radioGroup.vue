<template>
    <div class="dz-radio-group">
        <slot v-if="$slots.default" />
    </div>
</template>

<script>
export default {
    name: 'dz-radio-group',
    props: {
        value: {
            type: [String, Number, Boolean],
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        size: {
            type: String,
            default: 'big',
        },
    },
    methods: {
        change(value) {
            this.$emit('change', value);
        },
    },
};
</script>

<style lang="less" scoped>
</style>
