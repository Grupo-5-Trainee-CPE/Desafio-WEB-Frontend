import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./routes.jsx";
import GlobalStyles from "./styles/GlobalStyles.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 300000,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Routes />
      <GlobalStyles />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
