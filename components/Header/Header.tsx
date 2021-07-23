import owlImage from "../../public/owl-logo-dark.png";
import {
  SNav,
  SImageWrapper,
  SImage,
  SHamburgerMenuWrapper,
  SHamburgerIcon,
  SMenuWrapper,
  SUl,
} from "./styled";

const Header = () => {
  return (
    <header>
      <SNav>
        <div>Coding is Fun</div>
        <SImageWrapper>
          <SImage src={owlImage} alt='Komic Logo' />
        </SImageWrapper>
        <SHamburgerMenuWrapper>
          <SHamburgerIcon
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16m-7 6h7'
            />
          </SHamburgerIcon>
        </SHamburgerMenuWrapper>
        <SMenuWrapper>
          <SUl>
            <li>/www/public</li>
            <li>/api</li>
            <li>/dev/null</li>
            <li>
              <a className='navlinks-container'>user</a>
            </li>
          </SUl>
        </SMenuWrapper>
      </SNav>
    </header>
  );
};

export default Header;
