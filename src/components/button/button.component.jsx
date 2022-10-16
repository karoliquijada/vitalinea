import './button.styles.scss'

const Button = ({children}) => {
  return (
    <a className='button'>
        {children}    
    </a>
  )
}

export default Button
