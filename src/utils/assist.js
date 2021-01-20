import dateUtil from "./date";
export function oneOf(value, validList) {
    for (let i = 0, cont = validList.length; i < cont; i++) {
        if (value === validList[i]) {
            return true
        }
    }
    return false
}
export function typeOf(obj) {
    const toString = Object.prototype.toString;
    const map = {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]': 'null',
        '[object Object]': 'object'
    };
    const key = toString.call(obj)
    if (key === "[object Number]" && isNaN(obj)) return 'NaN'
    return map[key];
}
export function deepCopy(data) {
    const t = typeOf(data);
    let o;

    if (t === 'array') {
        o = [];
    } else if (t === 'object') {
        o = {};
    } else {
        return data;
    }

    if (t === 'array') {
        for (let i = 0; i < data.length; i++) {
            o.push(deepCopy(data[i]));
        }
    } else if (t === 'object') {
        for (let i in data) {
            o[i] = deepCopy(data[i]);
        }
    }
    return o;
}

// Find components downward
export function findComponentsDownward(context, componentName, unNested = false) {
    return context.$children.reduce((components, child) => {
        if (child.$options.name === componentName) components.push(child)
        if (unNested && child.$options.name === context.$options.name) return components
        const foundChilds = findComponentsDownward(child, componentName)
        return components.concat(foundChilds)
    }, []);
}
export function findComponentUpward(context, componentName) {
    let componentNames
    if (typeof componentName === 'string') {
        componentNames = [componentName]
    } else {
        componentNames = componentName
    }
    let parent = context.$parent
    let name = context.$parent.$options.name
    while (parent && (!name || componentNames.indexOf(name) === -1)) {
        parent = parent.$parent
        if (parent) name = parent.$options.name
    }
    return parent
}
export function isEmpty(val) {
    return val === undefined || val === null || val === ""
}

export function colorRgb(colorCode, Alpha) {
    var color = colorCode.toLowerCase();
    var pattern = /^#([0-9|a-f]{3}|[0-9|a-f]{6})$/;
    if (color && pattern.test(color)) {
        if (color.length == 4) {
            // 将三位转换为六位
            color = '#' + color[1] + color[1] + color[2] + color[2] + color[3] + color[3];
        }
        //处理六位的颜色值
        var colorNew = [];
        for (var i = 1; i < 7; i += 2) {
            colorNew.push(parseInt("0x" + color.slice(i, i + 2)));
        }
        return `rgba(${colorNew.join(",")},${Alpha})`;
    }
    return color;
}
export function getNumArray(n) {
    let result = [];
    for (let i = 2; i <= n; i++) {
        result.push(i);
    }
    return result;
}
/** parse a template HTML string to Vnode
 *@Description: html tag regex: (<(?!!--)(?:[^>])+>)\s*([^\s<]*)
 *              html comment tag regex: ((?:[^>]\s|^)<!--(?!<!)[^\[>][\s\S]*?-->)
 *@param {string} template
 *@param {boolean} bool 是否解析注释
 *@return Vnode
 */
export function parseTemplateToVnode(template = '', bool = false) {
    const tagRegex = /(<(?!!--)(?:[^>])+>)\s*([^<]*)|((?:[^>]\s|^)<!--(?!<!)[^\[>][\s\S]*?-->)/g,
        result = []
    let stack = [],
        stackItem = null,
        vNode = null,
        type = '',
        nodeValue = '',
        start = 0,
        end = 0,
        attrArray = null,
        attrs = null
    if (typeOf(template) === 'string') {
        template.replace(tagRegex, function (tag, tagMatch, textMatch, commentMatch, index) {
            if (!isEmpty(tag) && tag.charAt(1) !== '/') {
                attrs = {}
                type = tagMatch.match(/(?:<)([^\s>]*)/)[1]
                attrArray = tagMatch.match(/[^\s]*=['"][^\s]*['"]/g)
                tagMatch.indexOf('value') > -1 && (nodeValue = tagMatch.match(/value=["']([^"'>])["']/)[1])
                start = index + tag.length
                end = template.indexOf(`</${type}`, start)
                if (!isEmpty(attrArray)) {
                    attrArray.forEach(o => {
                        let keyValue = o.split("=")
                        if (keyValue[0].indexOf(":") === -1) {
                            attrs[keyValue[0]] = keyValue[1].replace(/"/g, '').replace(/'/g, '')
                        } else {
                            !attrs["props"] && (attrs["props"] = {})
                            attrs["props"][keyValue[0].replace(/:/g, '')] = keyValue[1].replace(/"/g, '').replace(/'/g, '')
                        }
                    })
                }
                vNode = {
                    type,
                    nodeValue,
                    template: template.substring(start, end),
                    childNodes: [],
                    attrs,
                }
                if (stackItem === null) {
                    result.push(vNode)
                } else {
                    stackItem.childNodes.push(vNode)
                }
                stack.push(vNode)
                stackItem = stack[stack.length - 1]
                if (tag.indexOf('/>') > -1) {
                    stack.pop()
                    stackItem = stack.length > 0 ? stack[stack.length - 1] : null
                }
            } else if (!isEmpty(tag)) {
                type = tagMatch.match(/(?:<\/)([^>]*)/)[1]
                type === stackItem.type && stack.pop()
                stackItem = stack.length > 0 ? stack[stack.length - 1] : null
            }
            if (!isEmpty(textMatch)) {
                stackItem.childNodes.push({
                    type: "text",
                    nodeValue: textMatch,
                    template: textMatch,
                    childNodes: []
                })
            }
            return tag
        })
    }
    return result

}

export function getScrollWidth(element) {
    let positionDiv = document.createElement("div")
    positionDiv.style.position = "absolute"
    positionDiv.style.width = "300px"
    positionDiv.style.height = "300px"
    positionDiv.style.backgroundColor = "blue"
    positionDiv.style.overflow = "auto"
    let subDiv = document.createElement("div")
    subDiv.style.width = "100%"
    subDiv.style.height = "400px"
    subDiv.style.backgroundColor = "red"
    positionDiv.appendChild(subDiv)
    element.appendChild(positionDiv)
    const scrollWidth = positionDiv.offsetWidth - subDiv.offsetWidth
    element.removeChild(positionDiv)
    element = positionDiv = subDiv = null
    return scrollWidth
}

export function toDate(date, format = "yyyy-MM-dd") {
    date = typeOf(date) === "date" ? date : dateUtil.parse(date, format);
    if (isNaN(date.getTime())) return null;
    return date;
};

export function weeklyIndex(date) {
    let startDay = new Date(date.getFullYear(), 0, 1).getDay()
    let firstWeek = new Date(date.getFullYear(), 0, 7 - startDay).getTime()
    let endTime = date.getTime()
    return endTime > firstWeek ? Math.ceil((endTime - firstWeek) / 604800000) + 1 : 1
}