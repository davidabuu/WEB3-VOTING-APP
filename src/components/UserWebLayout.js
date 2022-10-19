import Head from "next/head";
const UserWebLayout = ({ webtitle, children }) => {
  return (
    <>
      <Head>
        <title>{webtitle} | Zamp</title>
      </Head>
      {children}
    </>
  );
};

export default UserWebLayout;
