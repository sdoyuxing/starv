import message from './message.vue';
import Vue from 'vue';

class Message {
    constructor(properties) {
        const _props = properties || {};
        const Instance = new Vue({
            render(h) {
                return h(message, {
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
    add(message) {
        const name = message.name || this.getUuid();
        this.notification.add({
            ...message,
            name
        })
    }
    close() {
     
    }
    remove() {}
}
export default Message