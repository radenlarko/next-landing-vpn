import Head from "next/head";
// import Feature from "../components/Feature";
// import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";

const listUser = [
  {
    name: "Users",
    number: "390",
    icon: "/assets/Icon/heroicons_sm-user.svg",
  },
  {
    name: "Locations",
    number: "20",
    icon: "/assets/Icon/gridicons_location.svg",
  },
  {
    name: "Server",
    number: "50",
    icon: "/assets/Icon/bx_bxs-server.svg",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>VPN Best Landingpage </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero listUser={listUser} />
        {/* <Feature />
        <Pricing /> */}
      </Layout>
    </>
  );
}
