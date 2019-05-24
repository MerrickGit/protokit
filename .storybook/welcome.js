import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Welcome', module).add('About', () => (
    <h1>Hellow</h1>
), { info: { disable: true } });
