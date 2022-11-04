import Head from 'next/head';
const UserWebLayout = ({ webtitle, children }) => {
    return (
        <>
            <Head>
                <title>{webtitle} | NUESA</title>
            </Head>   
            {children}
        </>
    );
};

export default UserWebLayout;