import Hero from "../components/hero"
import Navbar from "../components/navbar"
import Fund from "../components/fund"
import Danger from "../components/danger"
import Grab from "../components/grab"
import Collectibles from "../components/collectibles"
export default function Main() {
  return (
    <div className="w-full h-full flex flex-col">
    <Navbar/>
    <Hero/>
    <Fund/>
    <Danger/>
    <Grab/>
    <Collectibles/>
    </div>
  )
}
