import Head from "next/head"
import TableData  from '../components/table'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Welcome to Next.js!</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossorigin="anonymous"
        ></link>
      </Head>

      <main>
        <div className="container" style={{marginTop: '20px'}}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Drinks</h5>
              <TableData/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
