import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

addDecorator(withInfo({ inline: true }));
addDecorator(withKnobs);

const req = require.context('../src', true, /story\.js$/);
function loadStories() {
  require('#/commons/styles/global.css');
  require('#/commons/styles/html.css');
  require('#/commons/styles/imports.css');
  require('#/commons/styles/variable.css');
  require('./welcome');
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
