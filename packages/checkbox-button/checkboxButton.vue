<template>
    <div
        :class="[
            'dz-checkbox-button',
            !isDisabled && (group ? isActive : value) ? 'is_checked' : '',
        ]"
        :disabled="isDisabled ? isDisabled : disabled"
        @click="(isDisabled ? isDisabled : disabled) ? null : updateCheckbox()"
    >
        <span
            :class="[
                'checkbox_inner',
                (group ? isActive : value) ? 'is_checked' : '',
                !isDisabled ? 'checkbox_inner_hover' : '',
                size,
            ]"
        >
            <slot v-if="$slots.default" />
            <span v-else>{{ label }}</span>
        </span>
    </div>
</template>

<script>
let newArr = [];
export default {
    name: "dz-checkbox-button",
    props: {
        label: {
            type: String,
        },
        value: {
            type: [String, Number, Boolean],
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
            groupActive: this.$parent.value || [],
            isDisabled: false,
            size: this.$parent.size,
        };
    },
    methods: {
        updateCheckbox() {
            let parent = this.isGroup();
            if (!this.isActive) {
                this.isActive = !this.isActive;
            }
            if (parent) {
                let arr = [...parent.value];
                let str = this.label ? this.label : this.$slots.default[0].text;
                if (arr.length) {
                    for (let i = 0; i < arr.length; i++) {
                        if (arr.indexOf(str) == -1) {
                            newArr = [...arr, str];
                            break;
                        } else {
                            newArr = arr.filter((item) => item !== str);
                            break;
                        }
                    }
                } else {
                    newArr = [...arr, str];
                }
                parent.$emit("input", newArr);
                parent.change(newArr);
            } else {
                this.$emit("input", !this.value);
                this.$emit("change", !this.value);
            }
        },
        isGroup() {
            let parent = this.$parent;
            while (parent && parent.$options.name != "dz-checkbox-group") {
                parent = parent.$parent;
            }
            this.group = parent ? true : false;
            this.isDisabled = this.group
                ? this.$parent.disabled
                : this.disabled;
            return parent;
        },
        isGroupActive() {
            if (this.groupActive.length) {
                for (let i = 0; i < this.groupActive.length; i++) {
                    if (
                        this.groupActive[i] ===
                        (this.label ? this.label : this.$slots.default[0].text)
                    ) {
                        this.isActive = true;
                        break;
                    } else {
                        this.isActive = false;
                    }
                }
            } else {
                this.isActive = false;
            }
        },
    },
    created() {
        this.isGroup();
        this.isGroupActive();
    },
    watch: {
        "$parent.value"(val) {
            this.groupActive = val;
            this.isGroupActive();
        },
    },
};
</script>

<style lang="less" scoped>
</style>
