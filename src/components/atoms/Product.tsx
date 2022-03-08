import { ResultsEntity } from "@services/products/ProductQuery";
import Image from "next/image";
import React, { memo } from "react";
import styled from "styled-components";

function Product(product: ResultsEntity) {
  return (
    <StyledWrapper onClick={() => window.open(product.permalink, "_blank")}>
      <StyledImageWrapper>
        <Image
          aria-hidden="true"
          className="blur-img-cover"
          layout="fill"
          objectFit="cover"
          src={product.thumbnail}
          alt={product.title}
        />
        <Image
          layout="fill"
          objectFit="contain"
          src={product.thumbnail}
          alt={product.title}
        />
      </StyledImageWrapper>
      <StyledPaymentInfo>
        <StyledPrice>
          R$ {product.price}
          {product.shipping?.free_shipping && (
            <FreeShippingDot title="Frete Grátis" aria-label="Frete Grátis" />
          )}
        </StyledPrice>
        {product.installments?.quantity > 1 && (
          <StyledInstallments noInterest={product.installments.rate === 0}>
            {product.installments.quantity} x {product.installments.amount}
          </StyledInstallments>
        )}
      </StyledPaymentInfo>
      <StyledTitle>{product.title}</StyledTitle>
    </StyledWrapper>
  );
}

const StyledTitle = styled.h6`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  font-size: var(--fs-sm);
  line-height: 1.15;
  color: var(--fg-2);
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 2;
`;

const FreeShippingDot = styled.div`
  height: 0.375rem;
  aspect-ratio: 1;
  border-radius: 50%;
  position: absolute;
  background-color: var(--green-2);
  right: -0.875rem;
  bottom: 0.325rem;
  z-index: 9;
`;

const StyledPrice = styled.span`
  font-size: var(--fs-sm);
  font-weight: 600;
  position: relative;
`;

const StyledInstallments = styled.span<{ noInterest: boolean }>`
  font-size: var(--fs-xs);
  font-weight: 500;
  color: ${p => (p.noInterest ? "var(--green-2)" : "var(--fg-2)")};
`;

const StyledPaymentInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.875rem;
  align-items: center;
  position: relative;
  @media (max-width: 480px) {
    top: 0.1rem;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  aspect-ratio: 8.5/10;
  position: relative;
  flex-flow: column nowrap;
  border-radius: var(--rounded-xl);
  height: min-content;
  padding: 0.875rem;
  gap: 0.875rem;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  &:hover {
    box-shadow: var(--shadow-1);
    background-color: var(--bg-2);
  }
  @media (max-width: 480px) {
    padding: 0.5rem;
    gap: 0.5rem;
  }
`;

const StyledImageWrapper = styled.div`
  overflow: hidden;
  aspect-ratio: 10/8.5;
  position: relative;
  flex-shrink: 0;
  border-radius: var(--rounded-xl);
  transition: all 0.15s ease-in-out;
  background-color: var(--bg-3);
  ${StyledWrapper}:hover & {
    margin: -2px;
    border: 2px solid var(--accent);
  }
`;

export default memo(Product);
