import { MainContent, Sidebar } from "@organisms";
import type { InferGetStaticPropsType } from "next";
import styled from "styled-components";

export default function Home({
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Styled.Root>
      <Sidebar categories={categories} />
      <MainContent />
    </Styled.Root>
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

const Styled = {
  Root: styled.div`
    display: flex;
    flex-flow: row nowrap;
    height: 100vh;
    background-color: var(--bg-1);
  `,

  Content: styled.div``,
};
