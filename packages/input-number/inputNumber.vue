<template>
    <div :class="['dz-input-number']">
        <div
            :class="[
                'dz-input_NumberGroup',
                disabled ? 'is-disabled' : '',
                size,
            ]"
        >
            <div
                v-if="controlsPosition !== 'right'"
                onselectstart="return false"
                :class="[
                    'dz-control',
                    'dz-input_Numberprepend',
                    input_value <= min ? 'is-disabled' : '',
                ]"
                @click="
                    !disabled && input_value > min
                        ? dd_changeNumber('decrement')
                        : null
                "
            >
                <!-- <svg class="icon" aria-hidden="true">
                    <use :xlink:href="`#icon-sami-select`"></use>
                </svg> -->
                 <dz-icon name="minus"></dz-icon>
            </div>
            <input
                ref="input"
                type="text"
                @input="changInput"
                @focus="input_getFocus"
                @blur="input_onBlur"
                :placeholder="placeholder"
                :disabled="disabled"
                :value="input_value"
                :class="['dz-input_inner', disabled ? 'is-disabled' : '']"
            />
            <div
                v-if="controlsPosition !== 'right'"
                onselectstart="return false"
                :class="[
                    'dz-control',
                    'dz-input_Numberappend',
                    input_value >= max ? 'is-disabled' : '',
                ]"
                @click="
                    !disabled && input_value < max
                        ? dd_changeNumber('increment')
                        : null
                "
            >
                <!-- <svg class="icon" aria-hidden="true">
                    <use :xlink:href="`#icon-adz-select`"></use>
                </svg> -->
                  <dz-icon name="plus"></dz-icon>
                <!-- <dz-icon name="select"></dz-icon> -->
            </div>
            <div
                v-if="controlsPosition === 'right'"
                onselectstart="return false"
                @click="
                    !disabled && input_value > min
                        ? dd_changeNumber('decrement')
                        : null
                "
                :class="[
                    'dz-control',
                    'is-controls-decrement',
                    'is-controls-right',
                    input_value <= min ? 'is-disabled' : '',
                ]"
            >
                <!-- <svg class="icon" aria-hidden="true">
                    <use :xlink:href="`#icon-arrow-down`"></use>
                </svg> -->
                <dz-icon name="arrow-down"></dz-icon>
            </div>
            <div
                v-if="controlsPosition === 'right'"
                onselectstart="return false"
                @click="
                    !disabled && input_value < max
                        ? dd_changeNumber('increment')
                        : null
                "
                :class="[
                    'dz-control',
                    'is-controls-increment',
                    'is-controls-right',
                    input_value >= max ? 'is-disabled' : '',
                ]"
            >
                <!-- <svg class="icon" aria-hidden="true">
                    <use :xlink:href="`#icon-arrow-up`"></use>
                </svg> -->
                <dz-icon name="arrow-up"></dz-icon>
            </div>
        </div>
    </div>
</template>

<script>
import dzIcon from '../icon/icon.vue';
export default {
    name: "dz-input-number",
    components:{
        dzIcon
    },
    props: {
        value: {
            type: [Number, String],
            default: 0,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        placeholder: {
            type: String,
        },
        step: {
            type: Number,
            default: 1,
        },
        min: {
            type: Number,
            default: -Infinity,
        },
        max: {
            type: Number,
            default: Infinity,
        },
        precision: {
            type: Number,
        },
        size: {
            type: String,
        },
        controlsPosition: {
            type: String,
        },
    },
    data() {
        return {
            input_value: this.value,
        };
    },
    methods: {
        changInput(e) {
            // this.$emit("input", e);
        },
        input_getFocus(e) {
            this.isFocus = true;
            this.$emit("focus", e);
        },
        input_onBlur(e) {
            let oldvalue = parseFloat(this.input_value);
            if (e.target.value > this.max) {
                if (this.precision >= 0) {
                    this.max = parseFloat(this.max).toFixed(this.precision);
                }
                this.input_value = this.max;
            } else if (e.target.value < this.min) {
                if (this.precision >= 0) {
                    this.min = parseFloat(this.min).toFixed(this.precision);
                }
                this.input_value = this.min;
            } else {
                if (this.precision >= 0) {
                    e.target.value = parseFloat(e.target.value).toFixed(
                        this.precision
                    );
                }
                this.input_value = parseFloat(e.target.value).toFixed(
                    this.precision
                );
            }
            this.$emit("input", this.input_value);
            this.$emit("change", this.input_value, oldvalue);
            this.$emit("blur", e);
        },
        dd_changeNumber(type) {
            let oldvalue = parseFloat(this.input_value);
            if (this.precision >= 0) {
                this.input_value = parseFloat(this.input_value).toFixed(
                    this.precision
                );
            }
            if (type === "increment") {
                this.input_value = (
                    parseFloat(this.input_value) + this.step
                ).toFixed(this.precision);
            } else if (type === "decrement") {
                this.input_value = (
                    parseFloat(this.input_value) - this.step
                ).toFixed(this.precision);
            }
            this.$emit("input", this.input_value);
            this.$emit("change", this.input_value, oldvalue);
        },
    },
    computed: {
        input() {
            return this.$refs.input;
        },
    },
    watch: {
        value(val) {
            this.input_value = val;
        },
        input_value(val, old) {
            this.$emit("change", val, old);
        },
    },
};
</script>

