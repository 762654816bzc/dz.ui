<template>
    <div
        class="dz-radio"
        :disabled="isDisabled ? isDisabled : disabled"
        @click="(isDisabled ? isDisabled : disabled) ? null : updateRadio()"
    >
        <span
            :class="['radio_inner', !isDisabled && (group ? groupActive : value) != label ? 'radio_inner_hover' : '']"
        >
            <span :class="[(group ? groupActive : value) == label ? 'radio_origina' : null]"></span>
        </span>
        <span
            :class="[
                'radio__label',
                !isDisabled && (group ? groupActive : value) == label && !disabled ? 'radio_origina_text' : '',
            ]"
        >
            <slot v-if="$slots.default" />
            <span v-else>{{ label }}</span>
        </span>
    </div>
</template>

<script>
export default {
    name: 'dz-radio',
    props: {
        label: {
            type: [String, Boolean],
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
            this.isDisabled = this.group ? this.$parent.disabled : this.disabled;
            return parent;
        },
    },
    created() {
        this.isGroup();
        console.log(this.$parent.value, 8);
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
