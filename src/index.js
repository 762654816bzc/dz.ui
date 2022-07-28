import Button from '../packages/button';
import ButtonGroup from '../packages/button-group';
import Input from '../packages/input';
import Icon from '../packages/icon';
import Checkbox from '../packages/checkbox';
import Checkboxbutton from '../packages/checkbox-button/checkboxButton';
import checkboxGroup from '../packages/checkbox-group/checkboxGroup.vue';
import radio from '../packages/radio/radio.vue';
import radioButton from '../packages/radio-button/radioButton.vue';
import radioGroup from '../packages/radio-group/radioGroup.vue';
const components = [Button, ButtonGroup, Icon, Input, Checkbox, Checkboxbutton, checkboxGroup, radio];
const install = (Vue) => {
    components.forEach((comp) => {
        Vue.component(comp.name, comp);
    });
};
if (typeof window !== 'undefined' && window.Vue) {
    install(Vue);
}

export default {
    install,
    Button,
    ButtonGroup,
    Input,
    Checkbox,
    Checkboxbutton,
    checkboxGroup,
    radio,
    radioButton,
    radioGroup
};
