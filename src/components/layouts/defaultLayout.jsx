import { Header } from "../header";
import { Footer } from "../footer";
import { Fragment } from "react";

export function DefaultLayout({children}) {
    return(
        <Fragment>
            <Header />
            {children}
            <Footer />
        </Fragment>
    );
};