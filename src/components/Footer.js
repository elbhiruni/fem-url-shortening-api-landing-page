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
            <Link href="#link-shortening">Link Shortening</Link>
            <Link href="#branded-links">Branded Links</Link>
            <Link href="#analytics">Analytics</Link>
          </LinkWrapper>
          <LinkWrapper>
            <Title>Resources</Title>
            <Link href="#blog">Blog</Link>
            <Link href="#developers">Developers</Link>
            <Link href="#support">Support</Link>
          </LinkWrapper>
          <LinkWrapper>
            <Title>Company</Title>
            <Link href="#about">About</Link>
            <Link href="#ourteam">Our Team</Link>
            <Link href="#careers">Careers</Link>
            <Link href="#contact">Contact</Link>
          </LinkWrapper>
          <IconWrapper>
            <IconLink href="#facebook">
              <IconFacebook />
            </IconLink>
            <IconLink href="#twitter">
              <IconTwitter />
            </IconLink>
            <IconLink href="#pinterest">
              <IconPinterest />
            </IconLink>
            <IconLink href="#instagram">
              <IconInstagram />
            </IconLink>
          </IconWrapper>
        </LinkContainer>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
