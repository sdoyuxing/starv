import {
    typeOf
} from '../../utils/assist'
export default {
    name: "vnRender",
    functional: true,
    props: {
        vnode: {
            type: [Array, Function],
            default: () => []
        },
        row: {
            type: Object,
            default: () => {}
        },
        index: Number
    },
    render: (h, ctx) => {
        return h('span', typeOf(ctx.props.vnode) === "array" ? ctx.props.vnode[0].children : ctx.props.vnode({
            row: ctx.props.row,
            index: ctx.props.index
        }))
    }
}