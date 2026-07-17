import styled from 'styled-components';

export const Boxes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;

  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 16px;
  }
`;

export const Box = styled.div`
  background: #1e293b; /* Darker background for better contrast */
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: left; /* Align text to the left for better readability */
  overflow: hidden;
  word-wrap: break-word; /* Ensures long words break to the next line */
  hyphens: auto; /* Adds hyphenation for better word breaking */
  color: #e2e8f0; /* Light text color for better contrast */

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 16px;
  }
`;

export const BoxTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #f8fafc; /* Slightly brighter color for titles */
`;

export const BoxText = styled.p`
  font-size: 16px;
  color: #cbd5e1; /* Softer color for body text */
  line-height: 1.5;
  word-wrap: break-word; /* Ensures text wraps within the box */
  overflow-wrap: break-word; /* Handles long unbreakable strings */
  white-space: pre-wrap; /* Preserves whitespace and ensures wrapping */
  margin: 4px 0; /* Adds spacing between text lines */
`;

export const CompanyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 4px;
`;

export const CompanyMeta = styled.p`
  font-size: 14px;
  color: #94a3b8;
  margin: 0 0 20px;
`;

export const RoleBlock = styled.div`
  padding-top: 16px;
  margin-top: 16px;
  border-top: 1px solid rgba(148, 163, 184, 0.2);

  &:first-of-type {
    border-top: none;
    padding-top: 0;
    margin-top: 8px;
  }
`;

export const RoleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;
`;

export const RoleTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  color: #9cc9e3;
  margin: 0;
`;

export const RoleDuration = styled.span`
  font-size: 14px;
  color: #94a3b8;
  white-space: nowrap;
`;

export const BulletList = styled.ul`
  margin: 0;
  padding-left: 20px;
`;

export const BulletItem = styled.li`
  font-size: 15px;
  color: #cbd5e1;
  line-height: 1.6;
  margin: 6px 0;
`;

export const Join = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;

  @media ${(props) => props.theme.breakpoints.md} {
    padding-bottom: 64px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    padding-bottom: 32px;
  }
`;

export const JoinText = styled.h5`
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.5);

  @media ${(props) => props.theme.breakpoints.md} {
    line-height: 32px;
    font-size: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    margin: 0 0 16px;
  }
`;

export const IconContainer = styled.div`
  display: flex;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 160px;
    justify-content: space-between;
  }
`;
