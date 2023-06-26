'use client'
import HeroBanner from '@/components/home/HeroBanner'
import PopularDestination from '@/components/home/PopularDestination'
import Navigation from '@/components/shared/Navigation'

export default function Home() {
  return (
    <main className="">
      {/* section navigation  */}
      <HeroBanner/>

      <section>
        <PopularDestination/>
      </section>
    </main>
  )
}
