import React from 'react'

const LeaderBoard = () => {

    const array =[{name:'nje',id:1,allEdit:20,weekEdit:60},{name:'nje',id:1,allEdit:30,weekEdit:20},{name:'nje',id:1,allEdit:50,weekEdit:20},{name:'nje',id:1,allEdit:20,weekEdit:50},{name:'nje',id:1,allEdit:100,weekEdit:36},{name:'nje',id:1,allEdit:20,weekEdit:56}]
  return (
   <div className='max-w-screen m-auto w-full px-4 sm:px-6 md:px-12 lg:px-20 xl:px-25 mb-4'>
  <div className='flex flex-wrap mb-4'>
    <p className='font-medium text-xl sm:text-2xl'>Leaderboard</p>
    <div className='flex-col'>
      <div className='flex justify-center items-center mb-1'>
        <div className='rounded-full bg-green-400 h-3 w-3'></div>
        <p className='text-sm ml-1'>All Time Edits</p>
      </div>
      <div className='flex justify-center items-center mb-1'>
        <div className='rounded-full bg-red-500 h-3 w-3 ml-3'></div>
        <p className='text-sm ml-1'>Edits This Week</p>
      </div>
    </div>
  </div>

  <div className="space-y-4"> 
    {Array.from({ length: Math.ceil(array.length / 2) }, (_, index) =>
      array.slice(index * 2, index * 2 + 2)
    ).map((pair, pairIndex) => (
      <div key={pairIndex} className="flex flex-col sm:flex-row gap-4">
        {pair.map((item, itemIndex) => (
          <div key={itemIndex} className="flex-1">
            <div className="flex space-x-2">
              <div className="rounded-full h-12 w-12 sm:h-17 sm:w-17 bg-blue-300 overflow-hidden flex items-center justify-center flex-shrink-0">
                <img src="" alt="img" className="object-contain w-full h-full" />
              </div>
              <div className="flex flex-col space-y-1 flex-1 min-w-0">
                <p className="font-medium text-sm sm:text-base">{item.name}</p>
                <div className="flex items-center space-x-1">
                  <div
                    className="rounded-full h-2 bg-green-300"
                    style={{ width: item.allEdit }}
                  ></div>
                  <p className="text-xs sm:text-sm font-medium">{item.allEdit}</p>
                </div>
                <div className="flex items-center space-x-1">
                  <div
                    className="rounded-full h-2 bg-red-500"
                    style={{ width: item.weekEdit }}
                  ></div>
                  <p className="text-xs sm:text-sm font-medium">{item.weekEdit}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    ))}
  </div>
</div>
  )
}

export default LeaderBoard