import Button from '@/components/buttons/Button'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      {/* section navigation  */}
      <section>
        <div className='flex py-10'>
          <div className='basis-1/6'>
            <h1 className='text-xl font-semibold'>Tripster</h1>
          </div>
          <div className='basis-1/2'>
            <ul className='flex font-light'>
              <li className='px-5'>Properties</li>
              <li className='px-5'>Attraction</li>
              <li className='px-5'>Popular</li>
            </ul>
          </div>
          <div className='basis-1/2 flex flex-row-reverse'>
              <div className='px-5' >
                <Button variant='primary' size='md'>Sign Up</Button>
              </div>
              <div className='px-5' >
                <Button variant='outline-primary' size='md'>Log In</Button>
              </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <div className="relative">
            <Image  src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Hero Image" width={1080} height={720} className="w-full h-72 relative rounded-3xl opacity-90 bg-blend-overlay" />

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className="text-2xl md:text-4xl text-white font-bold mb-4">Book your hotel by Tripstar</h1>
              <h2 className="text-lg md:text-2xl text-white font-medium">2345 hotels in locations around the world</h2>
            </div>
          </div>
          <div className='flex justify-center '>
            <div style={{top:'370px'}} className='grid absolute grid-cols-5 w-2/3 bg-white shadow-md rounded-full px-10 py-3'>
              <div>
                <p>Location</p>
                <p>Where are you going</p>
              </div>
              <div>
                <p>Check-in</p>
                <p>Add date</p>
              </div>
              <div>
                <p>Check-out</p>
                <p>Add date</p>
              </div>
              <div>
                <p>Guest</p>
                <p>Number of guest</p>
              </div>
              <div>Submit</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
