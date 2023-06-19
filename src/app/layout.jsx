import Header from "@/components/legacy/Header";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
