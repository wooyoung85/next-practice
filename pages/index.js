import homeStyles from '../styles/Home.module.css'

export default function Home({posts}) {
  return (
    <div>
      <h1>Recent Posts</h1>
      <ul className={homeStyles.posts}>
        {posts.map(post=>(
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

// export const getServerSideProps = async() => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=0&_end=10`)
//   const posts = await res.json();

//   return {
//     props: {
//       posts
//     }
//   }
// }

export const getStaticProps = async() => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=0&_end=10`)
  const posts = await res.json();

  return {
    props: {
      posts
    },
    revalidate: 10
  }
}