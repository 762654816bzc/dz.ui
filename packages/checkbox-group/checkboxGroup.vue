<template>
    <div class="dz-checkbox-group">
        <slot v-if="$slots.default" />
    </div>
</template>

<script>
export default {
    name: "dz-checkbox-group",
    props: {
        value: {
            type: Array,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        size: {
            type: String,
            default: "big",
        },
    },
    methods: {
        change(value) {
            this.$emit("change", value);
        },
    },
};
</script>

<style lang="less" scoped></style>
