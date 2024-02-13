export const Table = ({ api, nextPage, prevPage, page }) => {
  const { data, isLoading, error } = api;
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

      <button onClick={prevPage} disabled={!page}>
        prev
      </button>
      <button onClick={nextPage}>next</button>
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
