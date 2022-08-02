import dzButton from '../packages/button';
import dzButtonGroup from '../packages/button-group';
import dzInput from '../packages/input';
import dzIcon from '../packages/icon';
import dzCheckbox from '../packages/checkbox';
import dzCheckboxbutton from '../packages/checkbox-button';
import dzcheckboxGroup from '../packages/checkbox-group';
import dzRadio from '../packages/radio';
import dzRadioButton from '../packages/radio-button';
import dzRadioGroup from '../packages/radio-group';
import dzDialog from '../packages/dialog';
import dzMessage from '../packages/message';
import dzBlock from '../packages/block';
import '../styles/index.scss';

const components = [
    dzButton,
    dzButtonGroup,
    dzIcon,
    dzInput,
    dzCheckbox,
    dzCheckboxbutton,
    dzcheckboxGroup,
    dzRadio,
    dzRadioButton,
    dzRadioGroup,
    dzBlock,
    dzDialog,
    dzMessage
];
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
    dzButton,
    dzButtonGroup,
    dzIcon,
    dzInput,
    dzCheckbox,
    dzCheckboxbutton,
    dzcheckboxGroup,
    dzRadio,
    dzRadioButton,
    dzRadioGroup,
    dzBlock,
    dzDialog,
    dzMessage
};
