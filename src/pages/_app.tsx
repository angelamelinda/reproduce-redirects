import { COOKIES, getCookies, setCookie } from "@/helpers/cookies";
import "@/styles/globals.css";
import { NextPageContext } from "next";
import type { AppContext, AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

App.getInitialProps = ({ ctx }: AppContext) => {
  const { req } = ctx;

  const headers = req?.headers;
  const cookies = getCookies(ctx) || {};
  const partnerId = cookies[COOKIES.PARTNER_ID];
  let configSession: any = {
    partnerId:
      (headers?.partnerid as string) &&
      (headers?.partnerid as string) !== partnerId
        ? (headers?.partnerid as string)
        : partnerId || "",
  };

  if (
    (!partnerId || partnerId !== headers?.partnerid) &&
    configSession?.partnerId
  ) {
    setCookie(ctx, COOKIES.PARTNER_ID, configSession.partnerId, {
      maxAge: 100 * 365 * 24 * 60 * 60,
    });
  }

  return {};
};

export default App;
