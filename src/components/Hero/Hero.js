import Link from 'next/link';
import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, RightSection, Hr, Thin, Bold, Img, NavLink } from './HeroStyles';

const Hero = (props) => (
  <>
    <Hr/>
    <Section style={{marginBottom: "7rem"}} row nopadding>
      <LeftSection>
        <SectionTitle main center>
          <Thin>I'm</Thin><span> Batuhan Kutluca </span>
        </SectionTitle>
        <SectionText>
          I want to be a <Bold> Web3 </Bold> Developer
        </SectionText>
        <Button>
        <Link href="#about">
          <NavLink>Contact Me</NavLink>
        </Link>
        </Button>
      </LeftSection>
      <RightSection>
        <a href='/' style={{ display: "flex", alignItems: "center", color: "white" }}>
          <Img src='./profile.png'/>
        </a>
      </RightSection>
      
    </Section>
  </>
);

export default Hero;