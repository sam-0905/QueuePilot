import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
    <section className="flex justify-between ml-auto border-b-2 bg-yellow-100 ">
      <div>
        <h1 className="text-2xl font-bold m-4 ">QueuePilot</h1>
    </div>
    <div className="text-xl m-1 p-2">
      <Link to="/" >Inbox</Link>
    </div>
    </section>
    
    </>
  )
}


export default Header;