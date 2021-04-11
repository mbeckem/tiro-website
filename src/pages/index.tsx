import React from "react";

import { Layout } from "@components/Layout";
import { SEO } from "@components/SEO";
import { Container } from "@components/Container";

export default function IndexPage(): JSX.Element {
    return (
        <Layout>
            <SEO title="Home" />
            <Container>
                <h1>Index page (TODO)</h1>
            </Container>
        </Layout>
    );
}
