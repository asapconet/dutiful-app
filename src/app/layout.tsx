"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import classNames from "classnames";
import "../../src/app/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { ToastContext } from "@/context/ToastContext";

const metadata: Metadata = {
  title: "Dutiful App",
  description: "Built by @asapconet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <body>
          <ToastContext />
          {/* <NextTopLoader color="#FBD44C" showSpinner={false} /> */}
          <Header />
          {children}
          <Footer />
        </body>
      </QueryClientProvider>
    </html>
  );
}
