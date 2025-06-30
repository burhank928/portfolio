import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection, StyledButtonLink } from './HeroStyles';

const Hero = (props) => {
  return (
    <>
      <Section row nopadding>
        <LeftSection>
          <SectionTitle main center>
            Burhan Ahmad Khan
          </SectionTitle>
          <SectionText>
            Software Developer with 3+ years of experience in fintech, healthcare, and SaaS. Proficient in JavaScript, React.js, Node.js, React Native, Flutter, and Ruby on Rails. Delivered measurable improvements, including a 30% reduction in unauthorized access with MFA integration, 40% UI performance boost via framework transition, and 15% growth in app adoption through Shopify certification. Skilled in building scalable, secure solutions and enhancing user experience.
          </SectionText>
          <StyledButtonLink
            href={`${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}/files/resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            My Resume
          </StyledButtonLink>
        </LeftSection>
      </Section>
    </>
  );
};

export default Hero;