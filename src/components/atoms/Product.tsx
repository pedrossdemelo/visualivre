import { ResultsEntity } from "@services/products/ProductQuery";
import Image from "next/image";
import React, { memo } from "react";
import styled from "styled-components";

function Product(item: ResultsEntity) {
  return (
    <StyledWrapper>
      <StyledImageWrapper>
        <Image
          aria-hidden="true"
          className="blur-img-cover"
          layout="fill"
          objectFit="cover"
          src={item.thumbnail}
          alt={item.title}
        />
        <Image
          layout="fill"
          objectFit="contain"
          src={item.thumbnail}
          alt={item.title}
        />
      </StyledImageWrapper>
      <StyledPrice>R$ {item.price}</StyledPrice>
      <StyledTitle>{item.title}</StyledTitle>
    </StyledWrapper>
  );
}

const StyledTitle = styled.h6`
  font-size: var(--fs-sm);
  line-height: 1.15;
`;

const StyledPrice = styled.div`
  display: flex;
  align-items: center;
  font-size: var(--fs-sm);
`;

const StyledWrapper = styled.div`
  display: flex;
  aspect-ratio: 8.5/10;
  flex-flow: column nowrap;
  border-radius: var(--rounded-xl);
  height: min-content;
  padding: 0.875rem;
  gap: 0.5rem;
  overflow: hidden;
`;

const StyledImageWrapper = styled.div`
  overflow: hidden;
  aspect-ratio: 10/8.5;
  position: relative;
  border-radius: var(--rounded-xl);
`;

export default memo(Product);
