import React from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import {
  Box, Boxes, BoxTitle, CompanyHeader, CompanyMeta, RoleBlock,
  RoleHeader, RoleTitle, RoleDuration, BulletList, BulletItem,
} from './AcomplishmentsStyles';
import { AccomplishmentsData } from '../../constants/constants';

const Acomplishments = () => (
  <Section id="about">
    <SectionDivider divider colorAlt />
    <SectionTitle>Work Experience</SectionTitle>
    <Boxes>
      {AccomplishmentsData.map((company, index) => (
        <Box key={index}>
          <CompanyHeader>
            <BoxTitle>{company.company}</BoxTitle>
            <RoleDuration>{company.duration}</RoleDuration>
          </CompanyHeader>
          <CompanyMeta>{company.location} · {company.type}</CompanyMeta>
          {company.roles.map((role, roleIndex) => (
            <RoleBlock key={roleIndex}>
              <RoleHeader>
                <RoleTitle>{role.title}</RoleTitle>
                <RoleDuration>{role.duration}</RoleDuration>
              </RoleHeader>
              {role.bullets.length > 0 && (
                <BulletList>
                  {role.bullets.map((bullet, bulletIndex) => (
                    <BulletItem key={bulletIndex}>{bullet}</BulletItem>
                  ))}
                </BulletList>
              )}
            </RoleBlock>
          ))}
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
