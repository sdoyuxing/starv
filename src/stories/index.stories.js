/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue';
import { linkTo } from '@storybook/addon-links';

import Vue from 'vue';

// 第一步，引入组件
import Welcome from './Welcome.vue';

Vue.use(Vuex);
new Vue()


// 第二步，注册组件.
const install = function (config = {}) {
    if (install.installed) return;

    Vue.component(Header.name, Header);

    // Vue.$messagebox = Vue.prototype.$messagebox = MessageBox;
    // Vue.$toast = Vue.prototype.$toast = Toast;
    // Vue.$indicator = Vue.prototype.$indicator = Indicator;
};
if (typeof window !== 'undefined') {
    install();
};

/* eslint-enable react/react-in-jsx-scope */
// 示例组件
storiesOf('Welcome', module).add('to Storybook', () => ({
    components: { Welcome },
    template: '<welcome :showApp="action" />',
    methods: { action: linkTo('Button') }
}));
