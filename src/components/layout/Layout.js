import './Layout.css'
import { Main, Digits } from '../index'
import { Button } from '../../ui/index'
import { useCounter } from '../../hooks/useCounter'

const Layout = () => {
   const { count, handleAdd, handleSubtract, handleReset } = useCounter()
   console.log('count', count)
   return (
      <>
         <Main>
            <Digits numbers={count} />
            <div className="container-buttons">
               <Button text={'+'} action={handleAdd} />
               <Button text={'-'} action={handleSubtract} />
               <Button text={'c'} action={handleReset} />
            </div>
         </Main>
      </>
   )
}

export { Layout }
