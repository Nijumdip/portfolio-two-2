import {useRouter} from 'next/router'

function BlogId() {
    const router = useRouter();
    console.log(router.query);

  return (
      <>
          BlogId.....
      </>
  )
}

export default BlogId