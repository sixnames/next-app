import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className='container'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main></main>

      <footer></footer>
    </div>
  );
};

export default Home;
