import Vue from 'vue'
import sButton from './components/button'
import Icon from './components/icon'
import sRadio from './components/radio'
import sInput from './components/input'
import sCheckbox from './components/checkbox'
import sSwitch from './components/switch'
import sAlert from './components/alert'
import sTag from './components/tag'
import sPagination from './components/Pagination'
import message from './components/message'
import progressBar from './utils/progressBar'
import {
    sSelect,
    Option
} from './components/select'
import sTooltip from './components/tooltip'

const components = {
    sButton,
    sButtonGroup: sButton.Group,
    Icon,
    sRadio,
    sInput,
    sRadioGroup: sRadio.Group,
    sCheckbox,
    sCheckboxGroup: sCheckbox.Group,
    sSwitch,
    sAlert,
    sTag,
    sSelect,
    Option,
    sTooltip,
    sPagination
};

const iview = components;

const install = function (Vue, opts = {}) {
    Object.keys(iview).forEach(key => {
        Vue.component(key, iview[key]);
    });
};

Vue.prototype.$progressBar = progressBar
Vue.prototype.$Message = message
// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

const API = {
    install,
    progressBar,
    ...components
};
export default API