import Main from 'components/Main'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <>
      <NextSeo
        title="English Words"
        description="Discover new english words each time you see the page."
        canonical="https://english-words.vercel.app"
        openGraph={{
          url: 'https://english-words.vercel.app',
          title: 'English Words',
          description: 'Discover new english words each time you see the page.',
          images: [
            {
              url: 'https://english-words.vercel.app/img/meta/cover.png',
              width: 1280,
              height: 720,
              alt: 'English Words'
            }
          ],
          site_name: 'englishWords'
        }}
      />
      <Main />
    </>
  )
}
