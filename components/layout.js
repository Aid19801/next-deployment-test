import Head from 'next/head';
import NavBar from './navbar';

const Layout = props => (
    <div>
        <Head>
            <title>Bitzprices</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css" crossorigin="anonymous" />
        </Head>
        <NavBar />
        <div className="container">
            {props.children}
        </div>
    </div>
)

export default Layout