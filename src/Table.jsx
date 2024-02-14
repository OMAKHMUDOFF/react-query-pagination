export const Table = ({ api }) => {
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
            <th>Рейтинг</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el) => (
            <tr key={el.id}>
              <th>{el.id}</th>
              <td>{el.fullName}</td>
              <td>{el.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
