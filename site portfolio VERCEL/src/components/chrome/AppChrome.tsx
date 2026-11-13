"use client";

import React from "react";
import { SamuraiLoader } from "./SamuraiLoader";
import { CustomCursor } from "./CustomCursor";
import { SmoothScroll } from "./SmoothScroll";

export function AppChrome({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <SamuraiLoader />
      <CustomCursor />
      {children}
    </SmoothScroll>
  );
}
