// Core types
import type { FC } from "react";

// Vendors
import styled, { css } from "styled-components";

const Platform = styled.div`
  ${({ theme: { defaults, colors, font, ...theme } }) => css``}
`;

interface Platformstype {}

const Platforms: FC<Platformstype> = () => {
  return <Platform>platform</Platform>;
};

export default Platforms;
