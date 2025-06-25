"use client"


import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useRef } from "react";



export function ReactQueryProviders({ children }) {
  const clientRef = useRef();
  if (!clientRef.current) clientRef.current = new QueryClient();

  return (
    <QueryClientProvider client={clientRef.current}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
