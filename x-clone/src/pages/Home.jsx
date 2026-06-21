import Sidebar from ".../components/Sidebar";

//home page 
function Home() {
  return (
    <div className="flex bg-black min-h-screen text-white">
      <Sidebar />
      <div className="ml-[275px] flex-1 max-w-[600px] border-r border-[#2f3336]">
        <div className="p-4 border-b border-[#2f3336] text-xl font-bold sticky top-0 bg-black">
          Home
        </div>
        <div className="p-4 text-[#71767b]">Feed will go here</div>
      </div>
    </div>
  );
}

export default Home;
