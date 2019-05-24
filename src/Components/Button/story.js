import React from 'react';

import { storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import { text, radios, boolean } from '@storybook/addon-knobs';
import { Button } from './index';

const eventActions = actions({
  onClick: 'click-action'
});

storiesOf('General', module).add('Button', () => (
  <Button
    type={radios('Type', ['primary', 'text'], 'primary')}
    label={text('Label', 'Button label')}
    size={radios('Size', ['large', 'medium'], 'medium')}
    color={radios('Color', ['default', 'negative', 'positive', 'neutral'], 'default')}
    disabled={boolean('Disabled', false)}
    visible={boolean('Visible', true)}
    loading={boolean('Loading', false)}
    fluid={boolean('Fluid', false)}
    rounded={boolean('Rounded', false)}
    iconPosition={radios('Icon Position', ['left', 'right'], 'right')}
    {...eventActions}
  />
));
