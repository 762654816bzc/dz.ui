<template>
    <div :style="'display: inline-block'" :class="[value ? 'is-checked' : '']">
        <span
            class="dz-switch_label"
            :style="{ color: !value ? '#409eff' : '' }"
            @click="!disabled ? switch_click() : null"
            >{{ activeText }}</span
        >
        <div
            :class="['dz-switch']"
            onselectstart="return false"
            :disabled="disabled"
            :switch_value="!switch_value && disabled"
            :style="{
                background: value ? activeColor : inactiveColor,
                'margin-right': inactiveText ? '10px' : '',
                'margin-left': activeText ? '10px' : '',
            }"
            @click="!disabled ? switch_click() : null"
        ></div>
        <span
            class="dz-switch_label"
            :style="{
                color: value ? '#409eff' : '',
            }"
            @click="!disabled ? switch_click() : null"
            >{{ inactiveText }}</span
        >
    </div>
</template>

<script>
export default {
    name: 'dz-switch',
    props: {
        value: {
            type: [Boolean, String],
            default: false,
        },
        activeColor: {
            type: String,
            default: '#409EFF',
        },
        inactiveColor: {
            type: String,
            default: '#C0CCDA',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        activeText: {
            type: String,
        },
        inactiveText: {
            type: String,
        },
    },
    data() {
        return {
            switch_value: this.value,
        };
    },
    methods: {
        switch_click() {
            this.switch_value = !this.switch_value;
            this.$emit('input', this.switch_value);
            this.$emit('change', this.switch_value);
        },
    },
};
</script>

<style lang="scss" scoped>

</style>
