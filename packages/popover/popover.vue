
<template>
    <div class="dz-popover">
        <slot name="reference"></slot>
        <transition name="fade">
            <div
                :class="container ? containerObject : classObject"
                :style="{ width: !container ? `${width}px` : '' }"
                v-show="visible"
                ref="popover"
            >
                <slot name="content" v-if="container"></slot>
                <template v-else>
                    <div class="dz-popover--title">{{ title }}</div>
                    <div class="dz-popover--content">{{ content }}</div>
                </template>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'dz-popover',
    props: {
        popClassName: {
            type: String,
        },
        content: {
            type: [Number, String],
        },
        position: {
            type: String,
            default: 'top',
            validator: (value) => ['top', 'bottom', 'left', 'right'].indexOf(value) > -1,
        },
        container: {},
        trigger: {
            type: String,
            default: 'click',
            validator: (value) => ['click', 'hover'].indexOf(value) > -1,
        },
        width: {
            type: [String, Number],
            default: '15',
        },
        title: {},
    },
    data() {
        return {
            visible: false,
        };
    },
    watch: {
        visible(val) {
            this.$emit('change', val);
        },
    },
    computed: {
        classObject() {
            return ['dz-popover--item', `position-${this.position}`, this.popClassName];
        },
        containerObject() {
            return ['dz-popover--item__container', `date-position-${this.position}`];
        },
    },
    mounted() {
        this.addPopoverListenser();
    },
    methods: {
        addPopoverListenser() {
            let reference = this.$slots.reference[0].elm;
            let popover = this.$refs.popover;
            let trigger = this.trigger;
            if (trigger === 'hover') {
                reference.addEventListener('mouseover', this.handleShow);
                reference.addEventListener('mouseleave', this.handleHide);
                popover.addEventListener('mouseover', this.handleShow);
                popover.addEventListener('mouseleave', this.handleHide);
            } else if (trigger === 'click') {
                reference.addEventListener('click', this.handleToggle);
                document.addEventListener('click', this.handleDocumentClick);
            }
        },
        handleShow() {
            this.visible = true;
        },
        handleHide() {
            this.visible = false;
        },
        handleToggle() {
            this.visible = !this.visible;
        },
        handleDocumentClick(e) {
            let reference = this.reference || this.$refs.reference;
            const popover = this.popover || this.$refs.popover;
            if (!reference && this.$slots.reference && this.$slots.reference[0]) {
                reference = this.referenceElm = this.$slots.reference[0].elm;
            }
            if (
                (this.$el && this.$el.contains(e.target)) ||
                (reference && reference.contains(e.target)) ||
                (popover && popover.contains(e.target))
            )
                return;
            this.visible = false;
        },
        handleAfterEnter() {
            this.$emit('after-enter');
        },
        handleAfterLeave() {
            this.$emit('after-leave');
        },
        removePopoverListeners() {
            if (this.trigger === 'click') {
                this.$refs.popover.removeEventListener('click', this.onClick);
            } else {
                this.$refs.popover.removeEventListener('mouseenter', this.open);
                this.$refs.popover.removeEventListener('mouseleave', this.close);
            }
        },
        destroyed() {
            this.removePopoverListeners();
        },
    },
};
</script>
    
<style lang="scss" scoped>
</style>