import notice from './notice.vue';
import Vue from 'vue';

class Notice {
    constructor(properties) {
        const _props = properties || {};
        const Instance = new Vue({
            render(h) {
                return h(notice, {
                    props: _props
                })
            }
        })
        const component = Instance.$mount()
        document.body.appendChild(component.$el)
        this.notification = Instance.$children[0]
        this.seed = 0
        this.now = Date.now();
    }
    getUuid() {
        return 'starNotification_' + this.now + '_' + (this.seed++);
    }
    add(notice) {
        const name = notice.name || this.getUuid();
        this.notification.add({
            ...notice,
            name
        })
    }
}
export default Notice