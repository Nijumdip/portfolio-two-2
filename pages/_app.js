import Navigation from "../Components/navigation";
import "../styles/globals.css";
import Image from "next/image";


function MyApp({ Component, pageProps }) {
    return (
      <>
      <div className="fixed -z-10 w-screen h-screen custom-img">
        <Image
            src="/bgOne.jpg" 
            alt="Mountains with snow"
            layout="fill"
            objectFit="cover" />
      </div>
        <Navigation />
        <Component {...pageProps} />
      </>
    );
}

export default MyApp;
