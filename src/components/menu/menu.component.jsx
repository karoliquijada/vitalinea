import logo from '../../assets/logos/img-logo-vitalinea.png'
import burguerMenu from '../../assets/icons/icon_menu.svg'
import './menu.styles.scss'

const Menu = () => {
  return (
    <nav className='navbar'>
        <img src={logo} alt="logo"/>
        <img src={burguerMenu} alt="burguer menu icon" />
    </nav>
  )
}

export default Menu
