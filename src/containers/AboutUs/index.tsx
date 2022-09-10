// Core types
import type { FC } from "react";

// Vendors
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  ${({ theme: { defaults, colors, font, ...theme } }) => css``}
`;

interface Abouttype {}

const AboutUs: FC<Abouttype> = () => {
  return <Wrapper>About you</Wrapper>;
};

export default AboutUs;
