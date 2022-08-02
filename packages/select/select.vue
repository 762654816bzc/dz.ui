<template>
    <div>
        <dz-popover ref="popover" @change="handleVisble" position="bottom" :container="popoverContainer">
            <dz-input slot="reference" type="text" :placeholder="placeholder" readonly ref="input" :value="value">
                <dz-icon name="arrow-up" slot="suffix" class="dz-icon" :class="{ open: show }"></dz-icon>
            </dz-input>
            <template slot="content">
                <div class="dz-options__container" :style="{ width }">
                    <ul class="dz-options__list" @click="handleClick($event)">
                        <slot />
                    </ul>
                </div>
            </template>
        </dz-popover>
    </div>
</template>

<script>
import dzPopover from '../popover/popover.vue';
import dzIcon from '../icon/icon.vue';
import dzInput from '../input/input.vue';
export default {
    components: {
        dzPopover,
        dzInput,
        dzIcon,
    },
    props: {
        value: {
            type: String,
            default: '',
        },
        placeholder: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            popoverContainer: null,
            width: '',
            show: false,
        };
    },
    provide() {
        return {
            root: this,
        };
    },
    mounted() {
        this.width = this.$refs.input.$el.getBoundingClientRect().width + 'px';
        this.popoverContainer = this.$slots.default;
    },
    methods: {
        handleClick(e) {
            this.$refs.popover.handleHide();
        },
        handleVisble(visible) {
            this.show = visible;
        },
    },
};
</script>

<style lang="scss" scoped>
.container {
    max-height: 274px;
    > .dz-options__list {
        list-style: none;
        padding: 6px 0;
        margin: 0;
        box-sizing: border-box;
    }
}
.dz-icon {
    transform: rotate(0deg);
    transition: 0.5s;
    &.open {
        transform: rotate(180deg);
    }
}
</style>