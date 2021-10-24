import { FocusStyleManager } from "@blueprintjs/core";
import Head from "next/head";

import "@/styles/main.scss";
import { withBasePath } from "@/routes";

FocusStyleManager.onlyShowFocusOnTabs();

function MyApp({ Component, pageProps }: any): JSX.Element {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href={withBasePath("favicon.ico")} />
            </Head>
            <Component {...pageProps} />{" "}
        </>
    );
}

export default MyApp;
