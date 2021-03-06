import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title> Ninja List | Home </title>
        <meta name='keywords' content='ninjas' />
      </Head>
      <div>
        <h1 className={styles.title}>Home page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, quo
          inventore praesentium, nesciunt ipsum dolor, aspernatur fugiat eveniet
          ullam at nostrum libero doloremque eaque sequi deserunt natus
          explicabo iusto accusamus.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, quo
          inventore praesentium, nesciunt ipsum dolor, aspernatur fugiat eveniet
          ullam at nostrum libero doloremque eaque sequi deserunt natus
          explicabo iusto accusamus.
        </p>
        <Link href='/ninjas'>
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
