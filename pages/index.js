//import lazy and Suspense from react
import React, { Suspense, lazy } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

//load loader component
import IAmALoader from "../component/IAmALoader";

//the component to load with lazy load
const ILoadWithLazy = lazy(() => import("../component/ILoadWithLazy"));

export default function Home() {
    //check if next server loading finishes and if window object initializes
    const isServer = typeof window === "undefined";

    return (
        <div className={styles.container}>
            <Head>
                <title>Next 12 features</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Let's load the lazy one</h1>

                {
                    //start suspense code if window object available
                    !isServer && (
                        <Suspense fallback={<IAmALoader />}>
                            <ILoadWithLazy />
                        </Suspense>
                    )
                }
            </main>
        </div>
    );
}
