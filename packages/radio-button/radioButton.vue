<template>
    <div
        class="dz-radio-button"
        :disabled="isDisabled ? isDisabled : disabled"
        @click="(isDisabled ? isDisabled : disabled) ? null : updateRadio()"
    >
        <span
            :class="[
                'radio__label',
                (group ? groupActive : value) == label ? 'radio_origina' : null,
                !isDisabled ? 'radio_inner_hover' : '',
                size,
            ]"
        >
            <slot v-if="$slots.default" />
            <span v-else>{{ label }}</span>
        </span>
    </div>
</template>

<script>
export default {
    name: 'dz-radio-button',
    props: {
        label: {
            type: String,
        },
        value: {
            type: [String, Number],
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            group: null,
            isActive: false,
            groupActive: this.$parent.value,
            isDisabled: false,
            size: this.$parent.size,
        };
    },
    methods: {
        updateRadio() {
            let parent = this.isGroup();
            if (!this.isActive) {
                this.isActive = !this.isActive;
            }
            if (parent) {
                parent.$emit('input', this.label);
                if (this.label != parent.value) parent.change(this.label);
            } else {
                this.$emit('input', this.label);
                this.$emit('change', this.label || undefined);
            }
        },
        isGroup() {
            let parent = this.$parent;
            while (parent && parent.$options.name != 'dz-radio-group') {
                parent = parent.$parent;
            }
            this.group = parent ? true : false;
            this.isDisabled = !this.group ? this.disabled : this.$parent.disabled;
            return parent;
        },
    },
    created() {
        this.isGroup();
    },
    watch: {
        '$parent.value'(val) {
            this.groupActive = val;
        },
    },
};
</script>

<style lang="less" scoped>
</style>
