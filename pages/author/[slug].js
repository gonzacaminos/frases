
import { fetchAPI } from "@/lib/api";

function Author({ author }) {
    const data = author.attributes

    return (
        <p>{data.name}</p>
    )
  }
  
  export async function getStaticPaths(request) {
    
    // Call an external API endpoint to get posts
    const authorsRes = await fetchAPI("/authors");
    
    return {
      paths: authorsRes.data.map((author) => ({
        params: {
          slug: author.attributes.slug,
        },
      })),
      fallback: false,
    };
  }
 
  export async function getStaticProps({ params }) {
    const authorsRes = await fetchAPI("/authors", {
      filters: {
        slug: params.slug,
      },
    });
  
    return {
      props: { author: authorsRes.data[0]},
      revalidate: 1,
    };
  }
  


  export default Author