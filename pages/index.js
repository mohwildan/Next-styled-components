import Hero from "../Components/Hero";
import Layout from "../Layout/Layout";
import {HeadHome} from "../Head/HeadTitle"

export default function Home() {
  return (
    <>
    <HeadHome />
      <Layout>
        <Hero />
      </Layout>
    </>
  );
}
 