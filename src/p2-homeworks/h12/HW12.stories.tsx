import React from 'react';
import SuperSelect from '../h7/common/c5-SuperSelect/SuperSelect';
import {action} from '@storybook/addon-actions';

export default {
   title: 'Example/SuperSelector',
   component: SuperSelect,
}
const callback = (action('Clicked'))
const arr = ['Blue', 'Red', 'Black']

export const Selector: React.FC = (props) => {

   return <>
      <SuperSelect
         onChangeOption={callback}
         name={'Selector Story'}
         options={arr}
         autoFocus={true}
      />
   </>
}

