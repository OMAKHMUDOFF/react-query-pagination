import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { Table } from "./Table";

async function fetchApi(skip) {
  const data = await axios(
    `https://dummyjson.com/products?skip=${skip}&limit=10`
  );
  return data.data.products;
}

function App() {
  const [page, setPage] = useState(0);
  const data = useQuery(["products", page], () => fetchApi(page), {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

  function nextPage() {
    setPage((p) => p + 10);
  }
  function prevPage() {
    setPage((p) => p - 10);
  }
  return (
    <>
      <Table api={data} nextPage={nextPage} prevPage={prevPage} page={page} />
    </>
  );
}

export default App;
