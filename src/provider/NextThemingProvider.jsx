"use client";
import { ThemeProvider } from "next-themes";

const NextThemingProvider = ({ children }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};

export default NextThemingProvider;
