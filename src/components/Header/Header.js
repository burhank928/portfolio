import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Container, Div2, Div3, NavLink, SocialContainer, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div2>
      <li>
        <NavLink href="#projects">Projects</NavLink>
      </li>
      <li>
        <NavLink href="#skills">Skills</NavLink>
      </li>
      <li>
        <NavLink href="#about">About</NavLink>
      </li>
    </Div2>
    <Div3>
      <SocialContainer>
        <SocialIcons href="https://github.com/burhank928">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/burhan-k/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </SocialContainer>
    </Div3>
  </Container>
);

export default Header;
