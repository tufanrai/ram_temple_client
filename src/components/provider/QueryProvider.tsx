"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

const QueryProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default QueryProvider;
