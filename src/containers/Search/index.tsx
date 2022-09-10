// Core types
import type { FC } from "react";

// Vendors
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  ${({ theme: { defaults, colors, font, ...theme } }) => css``}
`;

interface Searchtype {}

const Search: FC<Searchtype> = () => {
  return <Wrapper>Search</Wrapper>;
};

export default Search;
