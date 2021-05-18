import Head from 'next/head'
import React, { useState, useEffect } from 'react';

export const Home = (): JSX.Element => {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { text } = await( await fetch(`/api/message2`)).json();
      setData(text);
    })();
  });

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>{data}</div>
    </div>
  )
}

export default Home
