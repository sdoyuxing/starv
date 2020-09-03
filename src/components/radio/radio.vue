<template>
    <label :style="style" :class="wrapperClasses">
        <span :class="radioClasses">
            <span :class="innerClasses"></span>
            <input type="radio" :disabled="disabled" :class="inputClasses" :name="groupName" :checked="currentValue" @change="change" />
        </span>
        <span v-if="$slots.default">
            <slot></slot>
        </span>
    </label>
</template>
<script>
import { findComponentUpward } from '../../utils/assist'
const prefixCls = 'sta-radio'
export default {
    name: 'sRadio',
    props: {
        label: {
            type: String
        },
        value: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        name: {
            type: String
        }
    },
    data() {
        return {
            currentValue: this.value,
            groupName: this.name,
            group: false,
            parent: findComponentUpward(this, 'RadioGroup')
        }
    },
    watch: {
        value(val) {
            if (typeof val === "boolean") {
                this.currentValue = val
            } else {
                throw 'Value should be boolean.';
            }
        }
    },
    computed: {
        wrapperClasses() {
            return [
                `${prefixCls}-wrapper`,
                {
                    [`${prefixCls}-wrapper-checked`]: this.currentValue,
                    [`${prefixCls}-wrapper-disabled`]: this.disabled,
                }
            ]
        },
        radioClasses() {
            return [
                prefixCls,
                {
                    [`${prefixCls}-checked`]: this.currentValue,
                    [`${prefixCls}-disabled`]: this.disabled
                }
            ]
        },
        inputClasses() {
            return `${prefixCls}-input`
        },
        innerClasses() {
            return [
                `${prefixCls}-inner`
            ]
        },
    },
    mounted() {
        if (this.parent) {
            this.group = true
            if (this.name && this.name !== this.parent.name) {
                /* eslint-disable no-console */
                if (console.warn) {
                    console.warn('Name does not match Radio Group name.');
                }
                /* eslint-enable no-console */
            } else {
                this.groupName = this.parent.name
            }
        }
    },
    methods: {
        change(event) {
            if (this.disabled) {
                return false
            }
            const checked = event.target.checked
            this.currentValue = checked
            this.$emit('input', checked)
            if (this.group) {
                if (this.label !== undefined) {
                    this.parent.change({
                        value: this.label,
                        checked: this.value
                    })
                }
            } else {
                this.$emit('on-change', checked)
            }
        }
    }
}
</script>

