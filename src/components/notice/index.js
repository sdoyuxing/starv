import Notice from './notice'
let notice;
export default {
    name: 'notice',
    info(options) {
        return this.show({...options,type:'info'});
    },
    success(options) {
        return this.show({...options,type:'success'});
    },
    warning(options) {
        return this.show({...options,type:'warning'});
    },
    error(options) {
        return this.show({...options,type:'error'});
    },
    show(options) {
        let optionsInt = {
            type:'',
            showIcon: true,
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
            };
        }
        notice = notice || new Notice();
        notice.add(options);
    }
}