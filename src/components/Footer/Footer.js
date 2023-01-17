import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer, Hr, A } from './FooterStyles';

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <LinkList>
          <LinkColumn>
            <LinkTitle>Call</LinkTitle>
            <LinkItem href='tel:0536-660-94-01'>0536-660-94-01</LinkItem>
          </LinkColumn>
          <LinkColumn>
            <LinkTitle>Email</LinkTitle>
            <LinkItem href='mailto:batuhankpro@gmail.com'>batuhankpro@gmail.com</LinkItem>
          </LinkColumn>
        </LinkList>
        <Hr/>
        <SocialIconsContainer>
          <SocialContainer>
              <SocialIcons href='https://github.com/kutlucabatuhan'>
                <i class="fa-brands fa-github fa-xl"></i>
              </SocialIcons>
              <SocialIcons href='https://www.linkedin.com/in/batuhan-kutluca-51299215a/' style={{marginLeft: 20}}>
                <i class="fa-brands fa-linkedin fa-xl"></i>
              </SocialIcons>
              <SocialIcons href='https://twitter.com/kutlucabatuhan' style={{marginLeft: 20}}>
                <i class="fa-brands fa-twitter fa-xl"></i>
              </SocialIcons>
              <SocialIcons href='https://www.instagram.com/kutlucabatuhan/' style={{marginLeft: 20}}>
                <i class="fa-brands fa-instagram fa-xl"></i>
              </SocialIcons>
          </SocialContainer>
        </SocialIconsContainer>
        <Slogan>
          <A>
            Copyright © 2023
          </A>
        </Slogan>
      </FooterWrapper>
    </>
  );
};

export default Footer;
