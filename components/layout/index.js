
import Head from 'next/head'

export default function Layout(props) {
  return (
    <main>
     <Head>
        <title>{props.title || 'App Title'}</title>
        <meta name="description" content="App Description"/>
      </Head>
    {props.children}
    </main>
  )
}