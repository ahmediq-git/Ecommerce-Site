import axios from "axios";

export async function getStaticProps() {
  const res = await axios.get("https://fakestoreapi.com/products");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}