import { useState } from 'react'

export const useCounter = (init = 0) => {
   const [count, setCounter] = useState(init)

   const handleAdd = () => setCounter(count + 1)
   const handleSubtract = () => setCounter(count - 1)
   const handleReset = () => setCounter(0)

   return {
      count,
      handleAdd,
      handleSubtract,
      handleReset,
   }
}
