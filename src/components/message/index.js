import Message from './message'
let message;
export default {
    name: 'message',
    info(options) {
        return this.message('info', options);
    },
    success(options) {
        return this.message('success', options);
    },
    warning(options) {
        return this.message('warning', options);
    },
    error(options) {
        return this.message('error', options);
    },
    message(type, options) {
        let optionsInt = {
            type,
            iconShow: true,
            style: {}
        }
        if (typeof options === 'string') {
            options = {
                content: options,
                ...optionsInt
            };
        } else {
            options = {
                ...optionsInt,
                ...options
            }
        }
        message = message || new Message()
        message.add(options)
    },
}