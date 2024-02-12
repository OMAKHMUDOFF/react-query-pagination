import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";

async function fetchApi(skip) {
  const data = await axios(
    `https://dummyjson.com/products?skip=${skip}&limit=10`
  );
  return data.data.products;
}
export const Table = () => {
  const [page, setPage] = useState(0);
  const { isLoading, error, data } = useQuery(
    ["products", page],
    () => fetchApi(page),
    { keepPreviousData: true, refetchOnWindowFocus: false }
  );
  console.log(data);
  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <table border={1} style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>№</th>
            <th>Назв-ие</th>
            <th>Цена</th>
            <th>Фото</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el) => (
            <tr key={el.id}>
              <th>{el.id}</th>
              <td>{el.title}</td>
              <td>{el.price}</td>
              <td>
                <img width={20} src={el.thumbnail} alt="" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={() => setPage((p) => p - 10)} disabled={!page}>
        prev
      </button>
      <button onClick={() => setPage((p) => p + 10)}>next</button>
    </div>
  );
};

{
  /* <table>
  <thead>
    <tr>
      <th>№</th>
      <th>Назв-ие</th>
      <th>Цена</th>
    </tr>
  </thead>
  <tbody>
    {data.map((el) => (
      <tr></tr>
    ))}
  </tbody>
</table> */
}
