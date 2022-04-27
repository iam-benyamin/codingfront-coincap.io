import { Header } from "components/header";
import { Footer } from "components/footer";
import { Fragment } from "react";

export function DefaultLayout({ children }) {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
}
