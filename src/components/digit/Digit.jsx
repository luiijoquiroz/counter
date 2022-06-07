import './Digit.css'
import { useState, useEffect } from 'react'

const Digits = ({ numbers }) => {
   const maxDigits = '0000000'
   const [digits, setDigits] = useState([...maxDigits])
   console.log('numbers', numbers)

   const formatDigit = (numbers) => {
      let toSet = []
      const position = [...numbers.toString()].length

      console.log(
         maxDigits.length,
         'position',
         position,
         numbers.toString().length,
      )

      numbers !== 0
         ? (toSet = [...maxDigits, ...numbers.toString()])
         : (toSet = [...maxDigits])

      console.log('toSet', toSet)
      setDigits(toSet)
   }

   useEffect(() => {
      formatDigit(numbers)
   }, [numbers])

   console.log('digits', digits)

   return (
      <>
         <div class="container-counter">
            {digits.map((digit) => (
               <div class="digit-container" data-digit={`${digit}`}>
                  <div class="digit">
                     <div class="line"></div>
                     <div class="line"></div>
                     <div class="line"></div>
                     <div class="line"></div>
                     <div class="line"></div>
                     <div class="line"></div>
                     <div class="line"></div>
                  </div>
               </div>
            ))}
         </div>
      </>
   )
}

export { Digits }
