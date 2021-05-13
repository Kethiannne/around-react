import headerLogoPath from '../images/icons/logo.svg';


export default function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={headerLogoPath} alt="header__logo" />
    </header>
  )
}
