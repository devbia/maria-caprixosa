import Section1 from "../components/Home/Section1";
import Layout from "../components/Layout";

import Section2 from "../components/Home/Section2";
import Section3 from "../components/Home/Section3";

import Form from "../components/Home/Form";

export default function HomePage() {

  return (

    <Layout>
      {/* Section one */}
      <Section1 />
      <Section2 />
      <Section3/>
      <Form/>
    </Layout >
  );
}