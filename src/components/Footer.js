// Components
import {
  StyledFooter,
  Container,
  LogoWrapper,
  LinkContainer,
  LinkWrapper,
  Title,
  Link,
  IconWrapper,
  IconLink,
} from "./styles/Footer.styled";
import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as IconFacebook } from "../images/icon-facebook.svg";
import { ReactComponent as IconTwitter } from "../images/icon-twitter.svg";
import { ReactComponent as IconPinterest } from "../images/icon-pinterest.svg";
import { ReactComponent as IconInstagram } from "../images/icon-instagram.svg";

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <LinkContainer>
          <LinkWrapper>
            <Title>Features</Title>
            <Link href="#">Link Shortening</Link>
            <Link href="#">Branded Links</Link>
            <Link href="#">Analytics</Link>
          </LinkWrapper>
          <LinkWrapper>
            <Title>Resources</Title>
            <Link href="#">Blog</Link>
            <Link href="#">Developers</Link>
            <Link href="#">Support</Link>
          </LinkWrapper>
          <LinkWrapper>
            <Title>Company</Title>
            <Link href="#">About</Link>
            <Link href="#">Our Team</Link>
            <Link href="#">Careers</Link>
            <Link href="#">Contact</Link>
          </LinkWrapper>
          <IconWrapper>
            <IconLink href="#">
              <IconFacebook />
            </IconLink>
            <IconLink href="#">
              <IconTwitter />
            </IconLink>
            <IconLink href="#">
              <IconPinterest />
            </IconLink>
            <IconLink href="#">
              <IconInstagram />
            </IconLink>
          </IconWrapper>
        </LinkContainer>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
