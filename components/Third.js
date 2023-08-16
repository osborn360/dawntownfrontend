import Image from "next/image"
import { FiMail, FiSmile, FiSend, FiBell, FiChevronDown, FiX} from "react-icons/fi"
import { AiOutlineSend } from "react-icons/ai";

export default function Third() {
    return (
      <>
        {/* Nav */}
                <div className="flex justify-end items-center gap-x-7 py-6">
                    <div className="flex gap-x-5">
                        <p className="text-textblue font-bold"><FiMail/></p>
                        <p className="text-textblue font-bold"><FiBell/></p>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <div className="p-5 bg-lightred rounded-full">
                                {/* <Image
                                    src="/images/avatarx.jpg" 
                                    alt="User image"
                                    width={30}
                                    height={50}
                                    style={{borderRadius:'50%'}}
                                /> */}
                        </div> 
                        <div className="text-sm">
                            <p className="text-textblue font-bold">Jamet Roy</p>
                        </div>
                        <div className="text-sm">
                            <p className="text-textblue font-bold"><FiChevronDown/></p>
                        </div>
                    </div>
                </div>

        {/* Users */}

            <div className="py-5 pb-5">
                <div className="flex items-center space-x-4">
                    <p className="font-bold text-md text-textblue">Chats</p>
                    <p className="text-xs bg-lightgreen text-darkgreen px-3 py-1 rounded-full">14</p>
                </div>

                <div className="flex min-w-0 gap-x-4 pt-4">
                    <div className="h-12 w-12 flex-none rounded-full bg-roundone"></div>
                    
                    <div className="min-w-0 flex-auto  pb-4" style={{borderBottom:'1px solid #E2E8F0'}}>
                        <p className="text-sm font-bold text-textblue">Ironmen</p>
                        <p className="mt-1 truncate text-xs text-gray-400">When will the event be held</p>
                    </div>
                </div>


                <div className="flex min-w-0 gap-x-4 pt-4">
                    <div className="h-12 w-12 flex-none rounded-full bg-roundtwo"></div>
                    
                    <div className="min-w-0 flex-auto  pb-4" style={{borderBottom:'1px solid #E2E8F0'}}>
                        <p className="text-sm font-bold text-textblue">Ariana Grande</p>
                        <p className="mt-1 truncate text-xs text-gray-400">Alright then, See you there</p>
                    </div>
                </div>

                <div className="flex min-w-0 gap-x-4 pt-4">
                    <div className="h-12 w-12 flex-none rounded-full bg-roundthree"></div>
                    
                    <div className="min-w-0 flex-auto  pb-4" style={{borderBottom:'1px solid #E2E8F0'}}>
                        <p className="text-sm font-bold text-textblue">Ariana Grande</p>
                        <p className="mt-1 truncate text-xs text-gray-400">Alright then, See you there</p>
                    </div>
                </div>

                <div className="flex min-w-0 gap-x-4 pt-4">
                    <div className="h-12 w-12 flex-none rounded-full bg-roundtwo"></div>
                    
                    <div className="min-w-0 flex-auto  pb-4" style={{borderBottom:'1px solid #E2E8F0'}}>
                        <p className="text-sm font-bold text-textblue">Ariana Grande</p>
                        <p className="mt-1 truncate text-xs text-gray-400">Alright then, See you there</p>
                    </div>
                </div>

            </div>


        {/* Chat */}
        <div className="py-1 pb-4">
            <div className="rounded-xl bg-darkgreen h-40">
                <div className="flex justify-between items-center p-5 py-4 text-white">
                    <div>
                        <p className="text-xs font-medium">Ironmen</p>
                    </div>
                    <div className="text-lg text-white">
                        <p><FiX/></p>
                    </div>
                </div>              
                <div className="bg-white rounded-b-2xl px-1">
                    <div className="flex justify-center py-3 pt-4 pb-7">
                        <p className="text-center text-xs px-4 py-1 bg-textblue text-white rounded-full font-normal">Today</p>
                    </div>

                    <div className="flex items-end gap-x-2 py-2 px-4">
                        <div className="px-2 py-3 bg-lightgreen text-darkgreen rounded-2xl">
                            <p className="text-xs">When will the event be held</p>
                        </div>
                        <div className="">
                            <p className="text-xs text-gray truncate overflow-hidden text-gray-400">10:22 am</p>
                        </div>
                    </div>

                    <div className="flex justify-end items-end object-right gap-x-2 py-2 px-4">
                        <div className="">
                            <p className="text-xs text-right truncate overflow-hidden text-gray-400">10:24 am</p>
                        </div>
                        <div className="px-2 py-3 bg-darkgreen text-white rounded-2xl">
                            <p className="text-xs">Tomorrow at 4pm</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-6 py-4 px-4 pb-5 gap-x-2 md:gap-x-">
                        <div className="col-span-5 text-xs rounded-2xl border p-2">
                            <div className="flex items-center xl:justify-center">
                                <div className="col-span-4 text-xs">
                                    <input type="text" placeholder="Type here..." style={{outline:"0px !important"}}/>
                                </div>
                                <div className="col-span-1">
                                    <p className="text-end text-lg text-gray-400 hidden md:hidden lg:hidden xl:block"><FiSmile/></p>
                                </div>
                            </div>
                        </div>

                        
                        <div className="col-span-1 text-end">
                            <button className="rounded-full py-3 px-3 bg-darkred text-white text-sm"><AiOutlineSend/></button>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
        
      </>
    )
}

