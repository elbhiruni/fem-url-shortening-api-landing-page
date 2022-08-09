import { useEffect, useState } from "react";

// Components
import { Container, MenuWrapper, MenuButton } from "./styles/Header.styled";
import Nav from "./Nav";

// Images
import logo from "../images/logo.svg";

function Header() {
  const [showNav, setShowNav] = useState(false);

  const handleClick = () => {
    if (!showNav) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  };

  return (
    <header>
      <Container>
        <MenuWrapper>
          <img src={logo} alt="Logo Shortly" className="logo" />
          <MenuButton type="button" onClick={handleClick}>
            <span className="material-icons">{showNav ? "close" : "menu"}</span>
          </MenuButton>
        </MenuWrapper>
        <Nav className={showNav ? "show" : ""} />
      </Container>
    </header>
  );
}

export default Header;
