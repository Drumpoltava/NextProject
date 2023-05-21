import Head from "next/head";
import DefaultLayout from "@/components/layout/Default";

export default function ProjectDetails() {
    return (
        <>
            <Head>
                <title>Project Details</title>
                <meta name="description" content="Project Details" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <DefaultLayout>
                <h1>Project Details</h1>
            </DefaultLayout>
        </>
    )
}