// Core types
import { FC, useRef } from "react";

// Core
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

// Vendors
import { Platform as Platformstype } from "../../../types/platform";

// Global utils
import { fetchPlatforms } from "../../../utils/fetchItems";
import { useOutsideCansler } from "../../../utils/handleClickOutside";

interface Platformtype {
  singlePlatform: {
    name: string;
    icon: JSX.Element;
  };
}

const Wrapper = styled.div`
  padding: 0 30px;
  position: relative;
`;

const Name = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  text-transform: capitalize;

  h6 {
    padding: 0 10px;
  }

  ${({ theme: { defaults, colors, font, ...theme } }) => css`
    color: ${colors.textColor};
  `}
`;

const Dropdown = styled.div`
  width: 100%;
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translate(-50%, 0);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 10px 0;

  backdrop-filter: blur(60px) saturate(100%);
  background-color: rgba(39, 39, 39, 0.95);
  border-radius: 10px;
`;

const Item = styled.h6`
  padding: 10px 0;
`;

const Platform: FC<Platformtype> = ({ singlePlatform }) => {
  const [platforms, setPlatforms] = useState<Platformstype[]>();
  const [showItems, setShowItems] = useState(false);

  const wrapperRef = useRef(null);
  useOutsideCansler(wrapperRef, setShowItems);

  useEffect(() => {
    (async () => {
      setPlatforms(await fetchPlatforms());
    })();
  }, []);

  const platform = platforms?.filter((platform) =>
    platform.slug.includes(singlePlatform.name)
  );

  return (
    <Wrapper>
      <Name onClick={() => setShowItems(!showItems)}>
        <span>{singlePlatform.icon}</span>

        <h6>{singlePlatform.name}</h6>

        <svg
          width="15"
          height="8"
          viewBox="0 0 744 392"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M691.872 8.86401L372 320.672L52.128 8.86401C46.4129 3.28178 38.7409 0.156616 30.752 0.156616C22.7631 0.156616 15.0911 3.28178 9.37601 8.86401C6.60879 11.5753 4.41039 14.8115 2.90959 18.3831C1.40879 21.9547 0.635757 25.7899 0.635757 29.664C0.635757 33.5381 1.40879 37.3733 2.90959 40.9449C4.41039 44.5165 6.60879 47.7527 9.37601 50.464L349.664 382.24C355.64 388.065 363.655 391.325 372 391.325C380.345 391.325 388.36 388.065 394.336 382.24L734.624 50.528C737.411 47.8147 739.626 44.5705 741.138 40.9871C742.651 37.4036 743.43 33.5535 743.43 29.664C743.43 25.7745 742.651 21.9243 741.138 18.3409C739.626 14.7575 737.411 11.5133 734.624 8.79999C728.909 3.21776 721.237 0.0926208 713.248 0.0926208C705.259 0.0926208 697.587 3.21776 691.872 8.79999V8.86401Z"
            fill="white"
          />
        </svg>
      </Name>

      {showItems && (
        <Dropdown ref={wrapperRef}>
          {platform
            ?.map((singlePlatform) => (
              <Link key={singlePlatform.name} to={singlePlatform.slug}>
                <Item>{singlePlatform.name}</Item>
              </Link>
            ))
            .reverse()}
        </Dropdown>
      )}
    </Wrapper>
  );
};

export default Platform;
