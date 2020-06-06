import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <center>
        <Link to='/product' class='block'>
          Product details
        </Link>
        <Link to='/seller' class='block'>
          seller
        </Link>
      </center>
    </>
  );
}
