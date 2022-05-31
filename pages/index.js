import Hero from '../components/home-page/Hero';
import Head from 'next/head';
import FeaturedPosts from '../components/home-page/featured-posts';
import { getFeaturedPosts } from '../lib/posts-util';

function HomePage(props) {
  return (
    <>
      <Head>
        <title>Welcome to my blog</title>
        <meta
          name='description'
          content='I post about programming and development'
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    // revaludate: 1800
  };
}

export default HomePage;
