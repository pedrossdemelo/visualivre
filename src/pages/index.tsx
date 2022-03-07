import { MainContent, Sidebar } from "@organisms";
import type { InferGetStaticPropsType } from "next";
import styled from "styled-components";

export default function Home({
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <StyledRoot>
      <Sidebar categories={categories} />
      <MainContent />
    </StyledRoot>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://api.mercadolibre.com/sites/MLB/categories");
  const categories = await res.json();

  return {
    props: {
      categories,
    },
  };
}

const StyledRoot = styled.div`
  display: flex;
  flex-flow: row nowrap;
  height: 100vh;
  background-color: var(--bg-1);
`;
