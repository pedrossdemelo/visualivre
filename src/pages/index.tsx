import type { InferGetServerSidePropsType } from "next";
import styled from "styled-components";
import { Sidebar } from "./../components/Sidebar";

export async function getServerSideProps() {
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
  min-height: 100vh;
  background-color: var(--bg-1);
`;

const StyledContent = styled.div``;

function Home({
  categories,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <StyledRoot>
      <Sidebar categories={categories} />
      <StyledContent></StyledContent>
    </StyledRoot>
  );
}

export default Home;
