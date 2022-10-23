// stories/alpha.js
import React from 'react'
import {storiesOf} from '@storybook/react'
import {withInfo} from '@storybook/addon-info';

import Alpha from "../packages/alpha/dist";

storiesOf('Alpha', module)
  .add('default', withInfo(``)(() =>
    <Alpha text="Coucou je suis le composant alpha" />
  ));