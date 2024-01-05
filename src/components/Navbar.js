import Image from "next/image"

const Navbar = () => {
    return (
        <div className="bg-[#2D3035] shadow px-[6%] py-[1%] justify-between items-center inline-flex w-full">
            <div className="w-[89.83px] h-6 relative">
                <Image src="/assets/kandle_logo.svg" width={100} height={100} alt="Kandle" />
            </div>
            <div className="justify-start items-center flex rounded-[4px] overflow-hidden">
                <div className="p-5 py-2 bg-[#1E2024] justify-start items-center gap-1.5 flex">
                    <div className="justify-start items-center gap-[5px] flex">
                        <div className="opacity-90 text-white text-sm font-semibold font-['Montserrat']">0.0000</div>
                        <div className="w-[21.33px] h-6 relative flex-col justify-start items-start inline-flex">
                            <div className="w-full relative">
                                <div className=" left-0 top-0 absolute">
                                    <Image className=" relative" width={100} height={100} alt="" src="/assets/green-usdt.svg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-3 bg-green-700 justify-center items-center flex">
                    <div className="opacity-90 text-white text-xs font-semibold font-['Montserrat']">Wallet</div>
                </div>
            </div>
            <div className="justify-start items-center flex">
                <div className="w-12 h-12 p-0.5 bg-[#24262B] rounded-full flex-col justify-start items-start inline-flex">
                    <Image className="" width={100} height={100} alt="" src="/assets/avatar.png" />
                </div>
                <div className="w-[52px] pl-6 py-3.5 justify-center items-center gap-2 flex">
                    <div className="w-7 h-7 relative">
                        <div className="w-6 h-6 left-0 top-[4px] absolute">
                            <Image className="" width={100} height={100} alt="" src="/assets/chatbubble.svg" />
                        </div>
                        <div className="w-[7px] h-[7px] left-[21px] top-0 absolute bg-yellow-400 rounded-full"></div>
                        <div className="w-[7px] h-[7px] left-[21px] top-0 absolute bg-amber-400 rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar