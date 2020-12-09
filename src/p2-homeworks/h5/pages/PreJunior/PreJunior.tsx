import React from 'react'
import s from './PreJunior.module.css'
import HW1 from '../../../h1/HW1'
import HW2 from '../../../h2/HW2'
import HW3 from '../../../h3/HW3'
import HW4 from '../../../h4/HW4'
import HW6 from '../../../h6/HW6'
import {Header} from '../../../NewComponents/Header'
import {Title} from '../../../NewComponents/Title/Title'
import {Card} from '../../../NewComponents/Card/Card'

export function PreJunior() {
   return (
       <div>
          <Title name={'Pre-junior page'}/>
          <Card title={'Props'}
                component={<HW1/>}
                description={'React components are small, reusable pieces of code that return a React element to be rendered to the page. The simplest version of React component is a plain JavaScript function that returns a React element.'}
          />
          <Card title={'useState'}
                component={<HW2/>}
                description={'React components are small, reusable pieces of code that return a React element to be rendered to the page. The simplest version of React component is a plain JavaScript function that returns a React element.'}
          />
          <Card title={'Errors'}
                component={<HW3/>}
                description={'Enter your data and check input field.'}
          />
       </div>
   )
}

