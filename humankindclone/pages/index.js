import Hero from "../components/hero"
import Navbar from "../components/navbar"
export default function Main() {
  return (
    <div className="w-full h-full flex flex-col">
    <Navbar/>
    <Hero/>
    </div>
  )
}
