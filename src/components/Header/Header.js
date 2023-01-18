import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span, Img, Socialicons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
        <a href='/' style={{ display: "flex", alignItems: "center", color: "white" }}>
          <Img src='./logo.png'/>
        </a>
    </Div1>
    <Div2>
    <li>
        <a href="#projects">
          <NavLink>Projects</NavLink>
        </a>
      </li>
      <li>
        <a href="#tech">
          <NavLink>Technologies</NavLink>
        </a>
      </li>
      <li>
        <a href="#about">
          <NavLink>About</NavLink>
        </a>
      </li>
    </Div2>
    <Div3>
        <SocialIcons href='https://github.com/kutlucabatuhan'>
          <i class="fa-brands fa-github fa-xl" style={{color: "#eb1d36"}}></i>
        </SocialIcons>
        <SocialIcons href='https://www.linkedin.com/in/batuhan-kutluca-51299215a/'>
          <i class="fa-brands fa-linkedin fa-xl" style={{color: "#eb1d36"}}></i>
        </SocialIcons>
        <SocialIcons href='https://twitter.com/kutlucabatuhan'>
          <i class="fa-brands fa-twitter fa-xl" style={{color: "#eb1d36"}}></i>
        </SocialIcons>
        <SocialIcons href='https://www.instagram.com/kutlucabatuhan/'>
          <i class="fa-brands fa-instagram fa-xl" style={{color: "#eb1d36"}}></i>
        </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
