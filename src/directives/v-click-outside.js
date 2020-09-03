
//这种写法场景
//1、需要一个非常干净且高度可定制的对象当作数据字典的时候
//2、for in不用hasOwnProperty来检查对象原型链上的属性性能会高点
//这里声明的对象都是只是用来内部存储数据的，当数据字典来用所以会被经常用来遍历所以这种写法更合适
const captureInstances = Object.create(null);
const nonCaptureInstances = Object.create(null);
const captureEventHandlers = Object.create(null);
const nonCaptureEventHandlers = Object.create(null);
const instancesList = [captureInstances, nonCaptureInstances];

const commonHandler = function onCommonEvent(context, instances, event, arg) {
    const { target } = event;

    const itemIteratee = function itemIteratee(item) {
        const { el } = item;
        if (el !== target && !el.contains(target)) {
            const { binding } = item;

            if (binding.modifiers.stop) {
                event.stopPropagation();
            }

            if (binding.modifiers.prevent) {
                event.preventDefault();
            }

            binding.value.call(context, event);
        }
    };

    instances[arg].forEach(itemIteratee);
};

const getEventHandler = function (useCapture, arg) {
    if (useCapture) {
        if (captureEventHandlers[arg]) {
            return captureEventHandlers[arg];
        }
        captureEventHandlers[arg] = function onCaptureEvent(event) {
            commonHandler(this, captureInstances, event, arg);
        };
        return captureEventHandlers[arg];
    }
    if (nonCaptureEventHandlers[arg]) {
        return nonCaptureEventHandlers[arg];
    }
    nonCaptureEventHandlers[arg] = function onNonCaptureEvent(event) {
        commonHandler(this, nonCaptureInstances, event, arg);
    };
    return nonCaptureEventHandlers[arg];
};
//这里用表达式声明对象因为要作为参数传递到vue自定义directive中，不确定里面有没有用到Object原型方法避免报错这么写
export const directive = {
    bind: function (el, binding) {
        if (typeof binding.value !== 'function') {
            throw new TypeError('Binding value must be a function.');
        }
        const eventName = binding.arg || "click";
        const directiveBinding = {
            ...binding,
            modifiers: {
                capture: false,
                prevent: false,
                stop: false,
                ...binding.modifiers
            },
        };
        directiveBinding.arg = eventName;
        const capture = directiveBinding.modifiers.capture;
        const instances = capture ? captureInstances : nonCaptureInstances;
        if (!Array.isArray(instances[eventName])) {
            instances[eventName] = [];
        }

        if (instances[eventName].push({ el, binding: directiveBinding }) === 1) {
            /* istanbul ignore next */
            if (typeof document === 'object' && document) {
                document.addEventListener(eventName, getEventHandler(capture, eventName), capture);
            }
        }
    },
    unbind: function (el) {
        const compareElements = function compareElements(item) {
            return item.el !== el;
        };

        const instancesIteratee = function instancesIteratee(instances) {
            const instanceKeys = Object.keys(instances);

            if (instanceKeys.length) {
                const useCapture = instances === captureInstances;

                const keysIteratee = function keysIteratee(eventName) {
                    const newInstance = instances[eventName].filter(compareElements);

                    if (newInstance.length) {
                        instances[eventName] = newInstance;
                    } else {
                        /* istanbul ignore next */
                        if (typeof document === 'object' && document) {
                            document.removeEventListener(eventName, getEventHandler(useCapture, eventName), useCapture);
                        }

                        delete instances[eventName];
                    }
                };

                instanceKeys.forEach(keysIteratee);
            }
        };

        instancesList.forEach(instancesIteratee);
    },
}

export function install(Vue) {
    Vue.directive('click-outside', directive);
}