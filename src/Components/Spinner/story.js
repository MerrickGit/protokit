import React from 'react';

import { storiesOf } from '@storybook/react';
import { Spinner } from './index';

storiesOf('General', module).add('Spinner', () => (
    <Spinner width="100px" height="20px" />
));
