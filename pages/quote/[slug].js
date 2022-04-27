
import { fetchAPI } from "@/lib/api";

function Frase({ quote }) {
    const data = quote.attributes

    return (
        <p>{data.Quote}</p>
    )
  }
  
  export async function getStaticPaths(request) {
    
    // Call an external API endpoint to get posts
    const quotesRes = await fetchAPI("/quotes");
    
    return {
      paths: quotesRes.data.map((quote) => ({
        params: {
          slug: quote.attributes.slug,
        },
      })),
      fallback: false,
    };
  }
 
  export async function getStaticProps({ params }) {
    const quotesRes = await fetchAPI("/quotes", {
      filters: {
        slug: params.slug,
      },
      populate: {
        source: {
          populate: ['author'],
        }
      } 
    });
  
    return {
      props: { quote: quotesRes.data[0]},
      revalidate: 1,
    };
  }
  


  export default Frase