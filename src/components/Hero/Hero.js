import React from 'react';
import { Section, SectionText, SectionTitle, Link } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

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
          <Button
            onClick={(e) => {
              const resumeUrl = `${process.env.NEXT_PUBLIC_BASE_PATH}/files/resume.pdf`;
              window.open(resumeUrl, '_blank');
            }}
          >
            My Resume
          </Button>
        </LeftSection>
      </Section>
    </>
  );
};

export default Hero;