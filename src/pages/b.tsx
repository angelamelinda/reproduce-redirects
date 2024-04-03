import { COOKIES, getCookies } from "@/helpers/cookies";
import { GetServerSideProps } from "next";

const B = () => {
  return "B";
};

export default B;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = getCookies(ctx);
  const partnerId = cookies[COOKIES.PARTNER_ID];
  if (partnerId !== "b") {
    return {
      redirect: {
        destination: "/entrypoint",
        permanent: true,
      },
    };
  }

  return {
    props: {},
  };
};
