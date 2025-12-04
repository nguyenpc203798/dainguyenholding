"use client";

import React from "react";
import LenisProvider from "@/context/LenisContext";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return <LenisProvider>{children}</LenisProvider>;
};

export default Providers;
