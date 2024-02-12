import { QueryClient, QueryClientProvider } from "react-query";
import { Table } from "./Table";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Table />
      </QueryClientProvider>
    </>
  );
}

export default App;
