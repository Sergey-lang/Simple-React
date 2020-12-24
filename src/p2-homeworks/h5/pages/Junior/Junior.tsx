import React from 'react'
import {HW8} from '../../../h8/HW8'
import {HW7} from '../../../h7/HW7'
import {HW9} from '../../../h9/HW9'
import {HW10} from '../../../h10/HW10'
import {HW11} from '../../../h11/HW11'
import {HW12} from '../../../h12/HW12'
import {Title} from '../../../NewComponents/Title/Title'
import {Card} from '../../../NewComponents/Card/Card'

export function Junior() {

   return (

       <div>
          <Title name={'Junior page'}/>
          <Card title={'Options dependency.'}
                component={<HW7/>}
                description={'One state - one dependency.'}
          />
          <Card title={'Filter A-z or score'}
                component={<HW8/>}
                description={'Use data array in useState.'}
          />
          <Card title={'Simple clock'}
                component={<HW9/>}
                description={'The useEffect hook is the Swiss Army knife of all the hooks. Unmounting components after care!'}
          />
          <Card title={'Loader'}
                component={<HW10/>}
                description={'App initialization. User have to understand what happening.'}
          />
          <Card title={'Material UI'}
                component={<HW11/>}
                description={'Used Material UI  components with own props.'}
          />
          <Card title={'Use Selector'}
                component={<HW12/>}
                description={'Get data from redux with UseSelector.'}
          />
       </div>
   )
}
