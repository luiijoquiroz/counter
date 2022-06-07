import React from 'react'
import { Layout } from './components/index'
import { Footer, Header, Main, Digits } from './components/index'

const CounterApp = () => {
   return (
      <div className="Counter-main">
         <Header />
         <Layout />
         <Footer />
      </div>
   )
}

export default CounterApp
