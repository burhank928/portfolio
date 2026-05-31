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
            Senior Full Stack Engineer with 4+ years building web products across SaaS, fintech, healthcare, and e-commerce. I work mostly with React, TypeScript, Node.js, NestJS, and Ruby on Rails. Lately I&apos;ve been building AI-powered features, things like streaming chat interfaces and LLM-based content generation.
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