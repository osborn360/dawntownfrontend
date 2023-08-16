import { FiHome, FiClock, FiUsers, FiCompass, FiUser, FiBookmark, FiCalendar, FiMessageSquare, FiMusic,  } from "react-icons/fi"
import {IoFootball, IoGameController, IoMusicalNotes, } from "react-icons/io5"
import {LuDices, LuAtom, LuMusic, LuGamepad2} from "react-icons/lu"
import { RiSkullFill } from "react-icons/ri";


export default function First() {
    return (
      <>
        <div className="pb-6">
            <div className="flex items-center font-bold text-darkred ml-5 px-4 py-6 gap-x-2">
                <p className="text-xl"><RiSkullFill/></p>
                <p>Sedboi.euy</p>
            </div>

            <div className="p-3 text-gray-400 hover:bg-lightgreen hover:text-darkgreen cursor-pointer">
                <div className="flex ml-5 gap-x-4">
                    <p><FiHome /></p>
                    <p className="text-xs">Home</p>
                </div>
            </div>
            <div className="p-3 text-gray-400 hover:bg-lightgreen hover:text-darkgreen cursor-pointer">
                <div className="flex ml-5 gap-x-4">
                    <p><FiClock /></p>
                    <p className="text-xs">Timeline</p>
                </div>
            </div>
            <div className="p-3 text-gray-400 hover:bg-lightgreen hover:text-darkgreen cursor-pointer">
                <div className="flex ml-5  gap-x-4">
                    <p><FiUsers /></p>
                    <p className="text-xs">Community</p>
                </div>
            </div>
            <div className="p-3 text-gray-400 hover:bg-lightgreen hover:text-darkgreen cursor-pointer">
                <div className="flex ml-5 gap-x-4">
                    <p><FiCompass /></p>
                    <p className="text-xs">Discover</p>
                </div>
            </div>
            <div className="p-3 text-gray-400 hover:bg-lightgreen hover:text-darkgreen cursor-pointer">
                <div className="flex ml-5 gap-x-4">
                    <p><FiUser /></p>
                    <p className="text-xs">Friends</p>
                </div>
            </div>
            <div className="p-3 text-gray-400 hover:bg-lightgreen hover:text-darkgreen cursor-pointer">
                <div className="flex ml-5 gap-x-4">
                    <p><FiBookmark /></p>
                    <p className="text-xs">Bookmark</p>
                </div>
            </div>
            <div className="p-3 text-gray-400 hover:bg-lightgreen hover:text-darkgreen cursor-pointer">
                <div className="flex ml-5 gap-x-4">
                    <p><FiCalendar /></p>
                    <p className="text-xs">Events</p>
                </div>
            </div>
            <div className="p-3 text-gray-400 hover:bg-lightgreen hover:text-darkgreen cursor-pointer">
                <div className="flex ml-5 gap-x-4">
                    <p><FiMessageSquare /></p>
                    <p className="text-xs">Discussion</p>
                </div>
            </div>
        </div>

        {/* <div style={{borderTop:'1px solid #c6ced5'}} className="p-2"></div> */}
        <div className="pt-5">
            <div className="flex ml-5 p-4">
                <p className="font-bold text-sm text-textblue">Category</p>
            </div>

            <div className="p-2 text-gray-400 hover:bg-lightgreen hover:text-darkgreen cursor-pointer">
                <div className="flex ml-5 items-center gap-x-3">
                    <p className="p-2 rounded-full bg-lightred text-darkred"><IoFootball /></p>
                    <p className="text-xs">Sports</p>
                </div>
            </div>
            <div className="p-2 text-gray-400 hover:bg-lightgreen hover:text-darkgreen cursor-pointer">
                <div className="flex ml-5 items-center gap-x-4">
                    <p className="p-2 rounded-full bg-lightred text-darkred"><IoGameController /></p>
                    <p className="text-xs">Gaming</p>
                </div>
            </div>
            <div className="p-2 text-gray-400 hover:bg-lightgreen hover:text-darkgreen cursor-pointer">
                <div className="flex ml-5 items-center gap-x-4">
                    <p className="p-2 rounded-full bg-lightred text-darkred"><IoMusicalNotes /></p>
                    <p className="text-xs">Music</p>
                </div>
            </div>
            <div className="p-2 text-gray-400 hover:bg-lightgreen hover:text-darkgreen cursor-pointer">
                <div className="flex ml-5 items-center gap-x-4">
                    <p className="p-2 rounded-full bg-lightred text-darkred"><LuAtom /></p>
                    <p className="text-xs">Tech & Science</p>
                </div>
            </div>
        </div>

      </>
    
    )
}
  