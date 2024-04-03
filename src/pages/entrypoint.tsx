import { COOKIES, getCookies } from "@/helpers/cookies";
import { GetServerSideProps } from "next";

const Entrypoint = () => {
  return null;
};

export default Entrypoint;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { locales, defaultLocale, req } = ctx;
  const reqHeaders = req?.headers;
  const cookies = getCookies(ctx) || {};
  const partnerId =
    reqHeaders?.partnerid !== "undefined"
      ? reqHeaders?.partnerid
      : cookies[COOKIES.PARTNER_ID];

  console.log("cookies[COOKIES.PARTNER_ID]:", cookies[COOKIES.PARTNER_ID]);
  console.log("partnerId - entrypoint:", partnerId);
  if (partnerId === "b") {
    return {
      redirect: {
        destination: `/b`,
        permanent: true,
      },
    };
  }

  console.log(reqHeaders);
  return {
    redirect: {
      destination: `/a`,
      permanent: true,
    },
  };
};
