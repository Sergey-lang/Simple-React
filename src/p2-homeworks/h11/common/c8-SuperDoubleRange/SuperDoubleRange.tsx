import React from 'react'
import {Slider, Typography} from '@material-ui/core'

type SuperDoubleRangePropsType = {
   onChangeRange?: (value: [number, number]) => void
   value?: [number, number]
   min?: number
   max?: number,
   step?: number | null
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
       onChangeRange, value,
       min, max,
       step,
       ...restProps
    }
) => {
   const handleChange = (event: any, newValue: number | number[]) => {
      onChangeRange && onChangeRange(newValue as [number, number])
   }
   // onChange?: (event: React.ChangeEvent<{}>, value: number | number[]) => void;

   return (
       <>
          <Typography id="range-slider"
                      gutterBottom
                      align={'center'}
                      variant={'h5'}>
          </Typography>
          <Slider value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  aria-labelledby="range-slider"
                  step={step}
          />
       </>
   )
}

export default SuperDoubleRange
