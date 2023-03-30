import Head from 'next/head'
export default function format({children}) {
    return (
        <>    
    <Head>
      <title>
        mike
      </title>
    </Head>
            <main>{children}</main>
        </>
    );
}
