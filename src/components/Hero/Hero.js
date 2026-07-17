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
            Senior Full Stack Engineer with 4+ years delivering production web and mobile applications across fintech, SaaS, healthcare, and clean energy. Proficient in React, Angular, TypeScript, Node.js, NestJS, and Ruby on Rails, with experience in microservices architecture, REST and GraphQL APIs, identity systems using Okta IDX, and LLM integration. Led frontend teams across multiple client engagements in an agile environment, migrated 7 authentication flows for a Fortune 500 fintech client from a Rails monolith to Angular 19 with a NestJS BFF, and shipped AI-native features in production including real-time LLM streaming and async content generation.
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