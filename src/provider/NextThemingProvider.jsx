"use client";
import { ThemeProvider } from "next-themes";

const NextThemingProvider = ({children}) => {
    return (
        <ThemeProvider attribute="class" defaultTheme="light">
        {children}
      </ThemeProvider>
    );
};

export default NextThemingProvider;