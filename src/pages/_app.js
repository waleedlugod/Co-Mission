import "co-mission/styles/globals.css";
import { Nunito_Sans } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const nunitoSans = Nunito_Sans({
    weight: "700",
    subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
    return (
        <main className={nunitoSans.className}>
            <Component {...pageProps} />
        </main>
    );
}
