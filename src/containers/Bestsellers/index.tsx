// Core types
import type { FC } from "react";

// Vendors
import styled, { css } from "styled-components";

const BestSeller = styled.div`
  ${({ theme: { defaults, colors, font, ...theme } }) => css``}
`;

interface BestSellerstype {}

const BestSellers: FC<BestSellerstype> = () => {
  return <BestSeller>bestsellers</BestSeller>;
};

export default BestSellers;
