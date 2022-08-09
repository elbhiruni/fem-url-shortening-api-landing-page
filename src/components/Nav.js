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
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
          </LinkPage>
          <Line />
          <NavLogin>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">
                <SignUpBtn type="button">Sign Up</SignUpBtn>
              </a>
            </li>
          </NavLogin>
        </Card>
      </Container>
    </StyledNav>
  );
}

export default Nav;
