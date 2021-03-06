import Fetch from 'isomorphic-unfetch';
import Layout from '../components/layout';
import Prices from '../components/prices';

const Index = ({bpi}) => (
  <Layout>
    <div>
      <h1>Welcome to BitzPrice</h1>
      <p>Check current Bitcoin rate:</p>
      <Prices bpi={bpi} />
    </div>
  </Layout>
)
Index.getInitialProps = async function() {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();

  return {
    bpi: data.bpi
  }
}
export default Index
