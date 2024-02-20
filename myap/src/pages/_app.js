import "@/styles/globals.css";
import Mainprovider from "@/components/Mianprovider";
import ColorProvider from "@/components/ColorProvider";
export default function App({ Component, pageProps }) {
  return (
    <ColorProvider>
      <Mainprovider>
        <Component {...pageProps} />;
      </Mainprovider>
    </ColorProvider>
  );
}
