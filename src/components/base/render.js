import {
    parseTemplateToVnode,
    typeOf
} from '../../utils/assist'

function recursion(data, h) {
    if (typeOf(data) === 'array' && data.length > 0) {
        let result = []
        result = data.map(o => {
            if (o.type === 'text') {
                return h('span', o.template)
            }
            if (o.childNodes.length === 0) {
                return h(o.type, o.attrs)
            } else {
                result = recursion(o.childNodes, h)
                return h(o.type, o.attrs, result)
            }
        })

        return result
    } else {
        return []
    }
}
export default {
    name: "render",
    functional: true,
    props: {
        template: String,
        content: [String, Number]
    },
    render: (h, ctx) => {
        if (ctx.props.template) {
            const vNode = parseTemplateToVnode(ctx.props.template);
            if (vNode.length !== 1) {
                throw new TypeError("There can only be one root element");
            } else {
                let result = recursion(vNode[0].childNodes, h)
                return h(vNode[0].type, vNode[0].attrs, result)
            }
        } else if (ctx.props.content) {
            return h('span', ctx.props.content)
        }
    }
}