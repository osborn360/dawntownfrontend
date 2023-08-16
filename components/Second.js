import Image from "next/image"
import { FiSearch } from "react-icons/fi"
import { RxDotFilled } from "react-icons/rx";


export default function Second() {
    return (
      <>
        <div className="grid grid-cols-3">
            {/* Nav  */}
            <div className="col-span-3 px-3 py-6">
                <div className="flex items-start">
                    <div className="p-0 text-textblue">
                        <p className="text-2xl font-bold">Hey, Dustin!</p>
                        <p className="text-xs">Welcome back, nice to see you again!</p>
                    </div>
                    <div className="flex flex-grow justify-end">
                        <div className="flex items-center gap-x-2 bg-white p-3 rounded-full">
                            <p className="flex-grow text-end text-textblue"><FiSearch/></p>
                            <input type="text" placeholder="Search here" style={{outline:"0px !important"}} className="text-xs"/>
                        </div>
                    </div>
                </div>

            </div>

            {/* Cards  */}
            <div className="col-span-1 rounded-2xl p-3">
                <div className="text-center bg-white rounded-2xl p-4 h-30">
                    <div className="pb-4">
                        <Image
                            src="/images/bike.svg" 
                            alt="Bike image"
                            width={500}
                            height={300}
                        />
                    </div>
                    <p className="text-textblue text-sm p-1 font-bold truncate overflow-hidden">Real Wild Cyclist</p>
                    <p className="text-gray-400 text-xs p-1 truncate overflow-hidden">We are the wildest cyclist</p>
                </div>
            </div>

            <div className="col-span-1 rounded-2xl p-3">
                <div className="text-center bg-white rounded-2xl p-4 h-30">
                    <div className="pb-4">
                        <Image
                            src="/images/meditation.svg" 
                            alt="Meditation image"
                            width={500}
                            height={300}
                        />
                    </div>
                    <div className="">
                        <p className="text-textblue text-sm p-1 font-bold truncate overflow-hidden">Yoga Forces</p>
                        <p className="text-gray-400 text-xs p-1 truncate overflow-hidden">Welcome to the biggest..</p>
                    </div>
                </div>
            </div>

            <div className="col-span-1 rounded-2xl p-3">
                <div className="text-center bg-white rounded-2xl p-4 h-30">
                    <div className="pb-4">
                        <Image
                            src="/images/Skateboard.svg" 
                            alt="Skateboard image"
                            width={500}
                            height={300}
                        />
                    </div>
                    <p className="text-textblue text-sm p-1 font-bold truncate overflow-hidden">Skater Boys</p>
                    <p className="text-gray-400 text-xs p-1 truncate overflow-hidden">The best state of skaters</p>
                </div>
            </div>
                

            {/* Rank */}    
            <div className="col-span-3 p-3 pb-10 pt-4">   
                <div className="bg-white rounded-2xl p-4">   
                    <div className="flex text-sm font-bold text-textblue">
                        <p className="text-start text-sm">Friends Rank</p>
                        <p className="flex-grow text-end text-sm">● ●</p>
                    </div>                  

                    <div className="flex flex-col pt-3">
                        <div className="overflow-x-auto hidden-scrollx-sidebar">
                            <div className="min-w-full inline-block">
                                <table className="min-w-full">
                                <thead>
                                    <tr className="text-left text-xs text-gray-400">
                                        <th scope="col" className="py-3 font-semibold">Rank</th>
                                        <th scope="col" className="px-6 py-3 font-semibold border-1 border-black">Name</th>
                                        <th scope="col" className="px-6 py-3 font-semibold">Category</th>
                                        <th scope="col" className="px-6 py-3 font-semibold">Points</th>
                                    </tr>
                                </thead>
                                <tbody className="">
                                    <tr className="">
                                        <td className="px-3 py-1 pb-7 whitespace-nowrap text-xs font-semibold text-textblue">1</td>
                                        
                                        <td className="px-6 py-1 pb-7 whitespace-nowrap text-sm">
                                        
                                           <div className="flex gap-x-4 items-center">
                                                <div className="h-10 w-10 flex-none rounded-full bg-roundone"></div>
                                                <p className="text-sm font-bold text-textblue">Mamang Ironmen</p>
                                           </div>
                                            
                                        </td>
                                        <td className="px-6 py-1 pb-7 whitespace-nowrap">
                                            <p className="text-xs text-textblue bg-lightgreen rounded-full py-1 text-center w-20 font-semibold"><span className="text-darkgreen">● </span>Skaters</p>
                                        </td>
                                        <td className="px-6 py-1 pb-7 whitespace-nowrap text-xs text-textblue font-semibold">2.140</td>
                                    </tr>

                                    <tr>
                                        <td className="px-3 py-1 pb-7 whitespace-nowrap text-xs font-semibold text-textblue">2</td>
                                        
                                        <td className="px-6 py-1 pb-7 whitespace-nowrap text-sm">
                                        
                                           <div className="flex gap-x-4 items-center">
                                                <div className="h-10 w-10 flex-none rounded-full bg-roundtwo"></div>
                                                <p className="text-sm font-bold text-textblue">Ariana Grande</p>
                                           </div>
                                            
                                        </td>
                                        <td className="px-6 py-1 pb-7 whitespace-nowrap">
                                            <p className="text-xs text-textblue bg-emerald-100 rounded-full py-1 text-center w-20 font-semibold"><span className="text-emerald-600">●</span> Cyclist</p>
                                        </td>
                                        <td className="px-6 py-1 pb-7 whitespace-nowrap text-xs text-textblue font-semibold">1.814</td>
                                    </tr>

                                    <tr>
                                        <td className="px-3 py-1 pb-7 whitespace-nowrap text-xs font-semibold text-textblue">3</td>
                                        <td className="px-6 py-1 pb-7 whitespace-nowrap text-sm">
                                        
                                        <div className="flex gap-x-4 items-center">
                                                <div className="h-10 w-10 flex-none rounded-full bg-roundthree"></div>
                                                <p className="text-sm font-bold text-textblue">Trent Alexander Arnold</p>
                                        </div>
                                            
                                        </td>
                                        <td className="px-6 py-1 pb-7 whitespace-nowrap">
                                            <p className="text-xs text-textblue bg-lightgreen rounded-full py-1 text-center w-20 font-semibold"><span className="text-darkgreen">●</span> Skaters</p>
                                        </td>
                                        <td className="px-6 py-1 pb-7 whitespace-nowrap text-xs text-textblue font-semibold">1.620</td>
                            
                                    </tr>

                                    <tr style={{marginBottom:'100px'}}>
                                        <td className="px-3 py-1 whitespace-nowrap text-xs font-semibold text-textblue">4</td>
                                        
                                        <td className="px-6 py-1 whitespace-nowrap text-sm">
                                        
                                           <div className="flex gap-x-4 items-center">
                                                <div className="h-10 w-10 flex-none rounded-full bg-roundtwo"></div>
                                                <p className="text-sm font-bold text-textblue">Shakira Wakawaka</p>
                                           </div>
                                            
                                        </td>
                                        <td className="px-6 py-1 whitespace-nowrap">
                                            <p className="text-xs text-textblue bg-lightred rounded-full  py-1 text-center w-20 font-semibold"><span className="text-darkred">●</span> Yogas</p>
                                        </td>
                                        <td className="px-6 py-1 whitespace-nowrap text-xs text-textblue font-semibold">1.280</td>
                                    </tr>

                                    
                                    
                                </tbody>
                                </table>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>         
        </div>
  
  
      </>
    
    )
  }
  