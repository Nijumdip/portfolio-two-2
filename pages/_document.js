import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                <link href="/dist/output.css" rel="stylesheet"></link>
                <script src="../path/to/flowbite/dist/flowbite.js"></script>

                <script
                    src="https://kit.fontawesome.com/38e307f30a.js"
                    crossorigin="anonymous"
                ></script>

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Nerko+One&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
