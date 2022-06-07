import './Button.css'

function Button({ text, action }) {
   return (
      <span onClick={action}>
         <i>{text}</i>
      </span>
   )
}

export { Button }
