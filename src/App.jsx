import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Table } from "./Table";

//React query get api func

// async function fetchApi(skip) {
//   const data = await axios(
//     `https://dummyjson.com/products?skip=${skip}&limit=10`
//   );
//   return data.data.products;
// }

// Mutation

async function fetchProd() {
  return (await axios.get("https://retoolapi.dev/D3NBAs/data")).data;
}

// create product function

async function createProduct(data) {
  return axios.post("https://retoolapi.dev/D3NBAs/data", data);
}

function App() {
  // invalidation cash
  const queryClient = useQueryClient();

  //Pagination and send data from table with props

  // const [page, setPage] = useState(0);
  // const data = useQuery(["products", page], () => fetchApi(page), {
  //   keepPreviousData: true,
  //   refetchOnWindowFocus: false,
  // });

  // function nextPage() {
  //   setPage((p) => p + 10);
  // }
  // function prevPage() {
  //   setPage((p) => p - 10);
  // }

  const data = useQuery("products", fetchProd);
  // Mutation and invalidation
  const mutation = useMutation((newProduct) => createProduct(newProduct), {
    onSuccess: () => queryClient.invalidateQueries(["products"]),
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const fields = Object.fromEntries(formData);

    mutation.mutate(fields);

    e.target.reset();
  };
  // nextPage={nextPage} prevPage={prevPage} page={page} // query pagination props

  return (
    <>
      <Table api={data} />

      <hr />

      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Назв-ие</Form.Label>
          <Form.Control type="text" placeholder="Назв-ие" name="fullName" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Цена</Form.Label>
          <Form.Control type="number" placeholder="Цена" name="rating" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default App;
