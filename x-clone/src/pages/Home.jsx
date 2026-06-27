import Sidebar from '../components/Sidebar'

function Home() {
  return (
    <div className='flex bg-black min-h-screen text-white'>
      
      <Sidebar />

      <main className='ml-[275px] flex-1 max-w-[600px] border-r border-[#2f3336]'>
        
        {/* Header */}
        <div className='sticky top-0 bg-black border-b border-[#2f3336] px-4 py-3'>
          <h1 className='text-xl font-bold'>Home</h1>
        </div>

        {/* Feed */}
        <div className='p-4 text-[#71767b]'>
          Feed will go here
        </div>

      </main>

    </div>
  )
}

export default Home