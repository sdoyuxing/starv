<template>
    <div :class="classes" :name="name">
        <slot v-if="$slots.default&&options===undefined"></slot>
        <template v-if="currentOptions">
            <Radio v-for="o in currentOptions" :label="o.value" :key="o.value">{{o.label}}</Radio>
        </template>
    </div>
</template>
<script>
import { findComponentsDownward,oneOf } from '../../utils/assist'
const groupPrefixCls = `ant-radio-group`
let seed = 0
const now = Date.now()
const getUuid = () => `antRadioGroup_${now}_${seed++}`
export default {
    name: 'RadioGroup',
    props: {
        value: {
            type: [String, Number, Boolean],
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        name: {
            type: String,
            default: getUuid
        },
        options: {
            type: Array
        },
        size: {
            type: String,
            validator(value) {
                return oneOf(value, ['large', 'small'])
            }
        },
        buttonStyle: {
            type: String,
            default: 'outline',
            validator(value) {
                return oneOf(value, ['outline', 'solid'])
            }
        }
    },
    data() {
        return {
            currentValue: this.value,
            currentOptions: this.options
        }
    },
    mounted() {
        this.updateOptions()
        this.$nextTick(() => {
            this.updateValue()
        })

    },
    methods: {
        updateValue() {
            this.childrens = findComponentsDownward(this, 'Radio')
            if (this.childrens) {
                this.childrens.forEach(child => {
                    child.currentValue = this.currentValue === child.label
                    child.group = true;
                });
            }
        },
        change(data) {
            this.currentValue = data.value
            this.$emit('input', data.value)
            this.$emit('on-change', data.value)
        },
        updateOptions() {
            if (typeof this.options !== 'undefined') {
                this.currentOptions = this.options.map(o => {
                    if (typeof o === 'string') {
                        return { label: o, value: o }
                    } else {
                        return o
                    }
                })
            }
        }
    },
    computed: {
        classes() {
            return [
                groupPrefixCls,
                `${groupPrefixCls}-${this.buttonStyle}`,
                { [`${groupPrefixCls}-${this.size}`]: this.size }
            ]
        }
    },
    watch: {
        value(val) {
            if (currentValue !== val) {
                this.currentValue = val
            }
        },
        currentValue() {
            this.$nextTick(() => {
                this.updateValue()
            })

        },
        options(val) {
            if (Array.isArray(val)) {
                this.updateOptions()
            } else {
                /* eslint-disable no-console */
                if (console.warn) {
                    console.warn('options is not Array.');
                }
                /* eslint-enable no-console */
            }
        }
    }
}
</script>

