import Image from 'next/image';
import { useState } from 'react';
import { data as game } from "@/utils/game.json"
import { Accordion } from '@/components/Accordian';

export default function Home() {

  const [gameIndex, setGameIndex] = useState(0);

  const reduceStake = () => {
    if (gameIndex <= 0) {
      return;
    }
    setGameIndex(gameIndex - 1)
  }

  const inscreaseStake = () => {
    if (gameIndex >= game.length - 1) {
      return;
    }
    setGameIndex(gameIndex + 1)
  }

  const GameTypeToggle = () => {
    return (
      <div className='flex flex-row justify-start self-end items-center bg-[#24262B] w-fit p-2 gap-x-4 rounded-[8px]'>
        <div onClick={() => {
          setGameIndex(0)
        }} className={`rounded-[4px] ${game[gameIndex].entryFee == 0 && "bg-[#1E8139]"} px-3 py-1 cursor-pointer`}>Practise</div>
        <div onClick={() => {
          if (gameIndex != 0) {
            return;
          }
          setGameIndex(1)
        }} className={`rounded-[4px] ${game[gameIndex].entryFee > 0 && "bg-[#1E8139]"} px-3 py-1 cursor-pointer`}>Paid</div>
      </div>
    )
  }

  const GameBoard = () => {
    return (
      <div className='bg-[#292C31] rounded-[4px] w-full h-full flex flex-row'>
        <div className='w-[50%] py-10 bg-[#24262B] flex flex-col items-center justify-center'>
          <div className='flex flex-col justify-center items-center'>
            <div className='h-[13rem] w-[10rem] border border-[#656E78] rounded-[2.6px] bg-gradient-to-b from-[#24262B] to-[#2D3035] flex flex-col items-center justify-center gap-y-1 my-3'>
              <div className="w-12 h-12 flex-col justify-start items-start inline-flex my-2">
                <Image className="" width={100} height={100} alt="" src={game[gameIndex].usersData[0].coinImage} />
              </div>
              <div className="w-12 flex-col justify-start items-start inline-flex my-2">
                <Image className="" width={100} height={100} alt="" src="/assets/tiny_graph.png" />
              </div>
              <div className='text-[#DF424E] text-xs'>$27167.99 (0.000%)</div>
              <div className='text-[#DBB42D]'>{game[gameIndex].usersData[0].selectedCoin}</div>
            </div>
            <div className='flex flex-row justify-start items-center gap-x-2 my-2'>
              <div className="w-12 h-12 bg-[#0D0D0D] rounded-full flex-col justify-start items-start inline-flex p-3">
                <Image className="" width={100} height={100} alt="" src={game[gameIndex].usersData[0].avatarImageUrl} />
              </div>
              <div>{game[gameIndex].usersData[0].userName}</div>
            </div>
          </div>
        </div>
        <div className='w-[50%] py-10 flex flex-col items-center justify-center'>
          <div className='flex flex-col justify-center items-center'>
            <div className='h-[13rem] w-[10rem] border border-[#656E78] rounded-[2.6px] bg-gradient-to-b from-[#24262B] to-[#2D3035] flex flex-col items-center justify-center my-3'>
              <div className="w-12 h-12 p-0.5 bg-[#24262B] rounded-full flex-col justify-start items-start inline-flex my-3">
                <Image className="" width={100} height={100} alt="" src="/assets/no_coin.svg" />
              </div>
              <div className='text-[#DBB42D]'>Select a coin</div>
            </div>
            <div className='flex flex-row justify-start items-center gap-x-2 my-2'>
              <div className="w-12 h-12 bg-[#0D0D0D] rounded-full flex-col justify-start items-start inline-flex">
                <Image className="" width={100} height={100} alt="" src="/assets/avatar.png" />
              </div>
              <div>You</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const GameDetails = () => {
    return (
      <div className='flex flex-col lg:flex-row w-full justify-between items-center lg:gap-x-2 gap-y-4 text-sm'>
        <div className='bg-[#292C31] rounded-[4px] px-4 h-full flex flex-row items-center gap-x-2 lg:max-w-[40%]'>
          <div className="w-12 h-12 bg-[#24262B] rounded-full flex-col justify-start items-start inline-flex p-2">
            <Image className="" width={100} height={100} alt="" src={game[gameIndex].usersData[0].avatarImageUrl} />
          </div>
          <div>{game[gameIndex].usersData[0].userName}</div>
          <div className="w-7 h-7 p-0.5 rounded-full flex-col justify-start items-start inline-flex">
            <Image className="" width={100} height={100} alt="" src="/assets/bolt.svg" />
          </div>
          <div className="w-12 h-12 p-0.5 bg-[#24262B] rounded-full flex-col justify-start items-start inline-flex">
            <Image className="" width={100} height={100} alt="" src="/assets/avatar.png" />
          </div>
          <div>You</div>
        </div>

        <div className='flex flex-row rounded-[4px] bg-[#1E8139] items-center justify-center py-3 px-2 h-full lg:max-w-[20%]'>
          <p className='wrap mx-2 text-white'>Select a coin to <br /> enter the battle</p>
          <div className="w-5 h-5 p-0.5 rounded-full flex-col justify-start items-start inline-flex">
            <Image className="" width={50} height={50} alt="" src="/assets/east.svg" />
          </div>
        </div>

        <div className='bg-[#292C31] rounded-[4px] px-4 h-full flex flex-row gap-x-3 items-center lg:max-w-[50%]'>
          <p className=''>how much<br />you stake</p>
          <div className='flex flex-row items-center justify-center bg-[#2D3035] rounded-[4px] overflow-hidden gap-x-3'>
            <p className='mx-4'>${game[gameIndex].entryFee}</p>
            <div className='flex flex-col items-center justify-center'>
              <button onClick={inscreaseStake} className='text-white bg-[#656974] w-[0.7rem] text-center my-[0.5px] text-base pl-2 pr-4 cursor-pointer disabled:opacity-25' disabled={gameIndex >= game.length - 1}>+</button>
              <button onClick={reduceStake} className='text-white bg-[#656974] w-[0.7rem] text-center my-[0.5px] text-base pl-2 pr-4 cursor-pointer disabled:opacity-25' disabled={gameIndex <= 0}>-</button>
            </div>
          </div>
          <Image className="" width={20} height={20} alt="" src="/assets/arrows_outward.svg" />
          <p className=''>how much<br />you win</p>
          <p className=' text-[#1EAF76] w-[4rem] bg-[#2D3035] rounded-[4px] p-2 text-center'>{game[gameIndex].firstWinnerAmount ? `$${game[gameIndex].firstWinnerAmount}` : "Glory"}</p>
        </div>
      </div>
    )
  }

  return (
    <main className='w-full h-full flex flex-col justify-start items-center'>
      <div className='flex flex-col justify-start items-center gap-y-10 h-full w-[90%] mt-10'>
        <div className='flex flex-col p-4 justify-start items-center min-h-[70%] w-full bg-[#1C1E22] rounded-[4px] gap-y-3'>
          <div className='flex flex-col w-full'>
            <div className='flex flex-col items-center gap-y-2'>
              <p className='text-[#B5BEC6] text-xl font-semibold'>Head 2 Head Battles</p>
              <p className='text-[#57AE10] '>Double or Nothing</p>
            </div>
            <GameTypeToggle />
          </div>
          <hr className='border border-[#656E78] h-[0.5px] opacity-50 w-full' />
          <GameBoard />
          <hr className='border border-[#656E78] h-[0.5px] opacity-50 w-full' />
          <GameDetails />
        </div>
        <Accordion />
      </div>
    </main>
  )
}
