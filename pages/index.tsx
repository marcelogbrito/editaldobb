import Link from 'next/link';
import { getPostsMetaData } from '../lib/getPostsData.js';

export default function Home({ postsData }) {
  return (
    <div className = 'info-container'>
      
      <p className = 'info-description'>Edital do BB</p>
      <p className = 'info-description'>Materiais de apoio relacionados ao concurso Banco do Brasil 2021</p>
      <hr/>
     

{postsData.map((metadata) => {
  return (
    <div key = {metadata.id}>
      <Link href={`/blog/${metadata.id}`} key = {metadata.titulo} >
        <a className = 'post-title'>{metadata.titulo}</a>
      </Link>
      <p className = 'post-description'>{metadata.descricao}</p>
    </div>
    )
  })}

      <style jsx>{`
        .info-container {
          margin: 0 5% 0 5%;
        }

        img {
          width: 20%;
          max-width: 20%;
          height: auto;
          margin-left: 40%;
        }

        .info-description {
          font-size: 20px;
        }

        .post-title {
          font-size: 24px;
          color: black;
        }

        .post-description {
          font-size: 16px;
          color: #000000e6;
        }
      `}</style>
    </div>
  )
}

export async function getStaticProps() {
  const postsData = getPostsMetaData();
  return {
    props: {
      postsData: postsData,
    }
  }
}