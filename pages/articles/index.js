import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '../../components/navigation';
// data
import { getAllPosts } from '../../lib/api';

// styles
import styles from '../../styles/Home.module.css';
import blogStyles from '../../styles/Blog.module.css';

const Blog = ({ allPosts: { edges } }) => (
  <div className={styles.container}>
    <Head>
      <title>Blog articles page</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navigation />

    <main className={styles.main}>
      <h1 className={styles.title}>Latest blog articles</h1>
      <hr />
      <section>
        {edges.map(({ node }) => (
          <div className={blogStyles.listitem} key={node.id}>
            <div className={blogStyles.listitem__thumbnail}>
              <figure>
                <Image
                  src={node.extraPostInfo.thumbImage.mediaItemUrl}
                  alt={node.title}
                  width={800}
                  height={600}
                  layout="responsive"
                  objectFit="cover"
                />
              </figure>
            </div>
            <div className={blogStyles.listitem__content}>
              <h2>{node.title}</h2>
              <p>{node.extraPostInfo.authorExcerpt}</p>
              <Link href={`/blog/${node.slug}`}>
                <a>Read more </a>
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  </div>
);

// don't forget to export it as the default export!
export default Blog;

export async function getStaticProps() {
  const allPosts = await getAllPosts();

  return {
    props: {
      allPosts,
    },
  };
}
