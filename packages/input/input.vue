<template>
    <div
        :class="inputClass"
        @mouseleave="isHover = false"
        @mouseenter="isHover = true"
    >
        <template v-if="type === 'text'">
            <input
                ref="input"
                class="dz-input__inner"
                v-bind="$attrs"
                :type="
                    showPassword
                        ? passwordVisible
                            ? 'password'
                            : 'text'
                        : type
                "
                :value="value"
                @input="input"
                @focus="focus"
                @blur="blur"
                @compositionstart="handleCompositionStart"
                @compositionend="handleCompositionEnd"
                :readonly="readonly"
                :placeholder="placeholder"
                :autocomplete="autocomplete"
                :disabled="disabled"
                :aria-label="label"
            />
            <span class="dz-input__prefix" v-if="prefixIcon || $slots.prefix">
                <slot name="prefix"></slot>
                <span
                    v-if="prefixIcon"
                    class="dz-input__icon"
                    :class="prefixIcon"
                ></span>
            </span>
            <span
                class="dz-input__suffix"
                v-if="suffixIcon || clearable || showPassword || $slots.suffix"
            >
                <slot name="suffix"></slot>
                <span
                    v-if="suffixIcon"
                    class="dz-input__icon"
                    :class="suffixIcon"
                ></span>
                <span
                    v-if="showClear"
                    class="dz-input__icon dz-icon-close"
                    @click="handleCloes"
                    @mousedown.prevent
                ></span>
                <span
                    v-if="showPassword"
                    @click="changePassword"
                    class="dz-input__icon dz-icon-view"
                ></span>
            </span>
        </template>
        <textarea
            v-else
            ref="textarea"
            class="dz-textarea__inner"
            v-bind="$attrs"
            :value="value"
            @input="input"
            @focus="focus"
            @blur="blur"
            @compositionstart="handleCompositionStart"
            @compositionend="handleCompositionEnd"
            :readonly="readonly"
            :placeholder="placeholder"
            :autocomplete="autocomplete"
            :disabled="disabled"
            :aria-label="label"
        ></textarea>
    </div>
</template>
<script>
export default {
    name: "dz-input",
    inheritAttrs: false,
    props: {
        type: {
            type: String,
            default: "text",
        },
        placeholder: {
            type: String,
            default: "???????????????",
        },
        value: {
            type: [String, Number],
            default: "",
        },
        autocomplete: {
            type: String,
            default: "off",
        },
        label: String,
        disabled: Boolean,
        readonly: Boolean,
        clearable: {
            type: Boolean,
            default: false,
        },
        showPassword: {
            type: Boolean,
            default: false,
        },
        prefixIcon: String,
        suffixIcon: String,
    },
    data() {
        return {
            isComposing: false, // ????????????????????????
            passwordVisible: false, // ??????????????????
            isHover: false, // ????????????????????????
            focused: false, // ??????????????????
        };
    },
    computed: {
        inputClass() {
            let classes = [this.type === "text" ? "dz-input" : "dz-textarea"];
            if (this.disabled) {
                classes.push(`is-disabled`);
            }
            if (
                this.clearable ||
                this.showPassword ||
                this.suffixIcon ||
                this.$slots.suffix
            ) {
                classes.push(`dz-input--suffix`);
            }
            if (this.prefixIcon || this.$slots.prefix) {
                classes.push(`dz-input--prefix`);
            }
            return classes;
        },
        showClear() {
            return (
                this.clearable && this.value && (this.focused || this.isHover)
            );
        },
    },
    methods: {
        handleCompositionStart() {
            this.isComposing = true;
        },
        handleCompositionEnd(e) {
            this.isComposing = false;
            this.input(e);
        },
        input(e) {
            if (this.isComposing) return;
            this.$emit("input", e.target.value);
        },
        handleCloes() {
            this.$emit("input", "");
        },
        focus() {
            this.focused = true;
        },
        blur() {
            this.focused = false;
        },
        changePassword() {
            this.passwordVisible = !this.passwordVisible;
            this.$nextTick(() => {
                this.$refs.input.focus();
            });
        },
    },
    mounted() {
        // console.log(this.$attrs)
    },
};
//?????????????????????????????????????????????????????????????????????@click.native????????????????????????
//mousedown.native.prevent ??????????????????
</script>
<style lang="scss">
@import "../../styles/input.scss";
</style>