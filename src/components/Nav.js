import {
  StyledNav,
  Container,
  Card,
  LinkPage,
  Line,
  NavLogin,
} from "./styles/Nav.styled";
import { SignUpBtn } from "./styles/Button.styled";

function Nav({ className }) {
  return (
    <StyledNav className={className}>
      <Container>
        <Card>
          <LinkPage>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#resources">Resources</a>
            </li>
          </LinkPage>
          <Line />
          <NavLogin>
            <li>
              <a href="#login">Login</a>
            </li>
            <li>
              <SignUpBtn href="#signup">Sign Up</SignUpBtn>
            </li>
          </NavLogin>
        </Card>
      </Container>
    </StyledNav>
  );
}

export default Nav;
