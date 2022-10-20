import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import Consumer from "./Consumer";

const client = new QueryClient()

export default function SolidQuery() {
  return (
    <QueryClientProvider client={client}>
      query provider
      <Consumer /> 
    </QueryClientProvider>
  )
}
