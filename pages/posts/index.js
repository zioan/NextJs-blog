import AllPosts from '../../components/posts/all-posts';

const DUMMT_POSTS = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is the react framework for production. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nemo consectetur porro fuga ipsum aliquid. Neque harum rerum unde iusto?',
    date: '2022-05-25',
  },
  {
    slug: 'getting-started-with-nextjs2',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is the react framework for production. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nemo consectetur porro fuga ipsum aliquid. Neque harum rerum unde iusto?',
    date: '2022-05-25',
  },
  {
    slug: 'getting-started-with-nextjs3',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is the react framework for production. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nemo consectetur porro fuga ipsum aliquid. Neque harum rerum unde iusto?',
    date: '2022-05-25',
  },
  {
    slug: 'getting-started-with-nextjs4',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is the react framework for production. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nemo consectetur porro fuga ipsum aliquid. Neque harum rerum unde iusto?',
    date: '2022-05-25',
  },
];

function AllPostsPage() {
  return (
    <>
      <AllPosts posts={DUMMT_POSTS} />
    </>
  );
}

export default AllPostsPage;