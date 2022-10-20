import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import QueryConsumer from "./QueryConsumer";

const client = new QueryClient()

export default function SolidQuery() {
  return (
    <QueryClientProvider client={client}>
      query provider
      <QueryConsumer /> 
    </QueryClientProvider>
  )
}
