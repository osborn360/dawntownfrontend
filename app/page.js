import Card from "@/components/Card"
import Second from "@/components/Second"
import First from "@/components/First"
import Third from "@/components/Third"

export default function Home() {
  return (
    <>
        <div className="xl:">
          <div className="grid grid-cols-12 h-screen">
            <div className="bg-white hidden md:hidden lg:block lg:col-span-2 xl:block xl:col-span-2">
                <First />
            </div>
            <div className="col-span-12 bg-body px-7 block md:block lg:block xl:block md:col-span-8 lg:col-span-7 xl:col-span-7" >
                <Second />
            </div>
            <div className="bg-body px-7 hidden md:block lg:block xl:block md:col-span-4 lg:col-span-3 xl:col-span-3">
                <Third />
            </div>
          </div>
        </div>


      {/* <Card /> */}
    </>
  
  )
}
