import { Filters, Results } from "@molecules";
import { Sidebar } from "@organisms";
import type { InferGetStaticPropsType } from "next";
import Head from "next/head";
import styled from "styled-components";

export default function Home({
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>VisuaLivre</title>
      </Head>
      <StyledRoot>
        <Sidebar categories={categories} />
        <StyledMain>
          <Filters />
          <Results />
        </StyledMain>
      </StyledRoot>
    </>
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

const StyledMain = styled.main`
  flex-grow: 1;
  min-height: 100vh;
  max-height: 100vh;
  min-width: 375px;
  position: relative;
`;

const StyledRoot = styled.div`
  display: flex;
  flex-flow: row nowrap;
  height: 100vh;
  background-color: var(--bg-1);
  overflow: hidden;
`;
