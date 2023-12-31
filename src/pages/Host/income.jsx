import graph from '/src/assets/incomeGraph.png'

export default function Income(){
  const transactionsData = [
    { amount: 720, date: "1/12/22", id: "1" },
    { amount: 560, date: "10/11/22", id: "2" },
    { amount: 980, date: "23/11/22", id: "3" },
]

  return(<div className='font-inter p-7 md:flex-col  items-center  text-[#161616]'>
    <h1 className=' font-bold text-4xl pb-11'>Income</h1>
    
    <div className='  md:justify-center  md:flex items-center gap-44'>
      <div>
        
        <p className="text-[#4D4D4D]"> Last <span className=" font-bold underline">30 days</span></p>
        <p className=" pt-8 font-extrabold text-5xl">$2,260</p>
      </div>
      <div className='flex justify-center'>
        <img className='pt-14 max-h-[600px]' src={graph} alt="graph" />
      </div>
    </div>

      <div className=' pt-16 flex flex-col gap-8'>
        <div className='flex justify-between'>
          <p className=' font-bold text-2xl'>Your transactions (3)</p>
          <p className="text-[#4D4D4D]"> Last <span className=" font-bold underline">30 days</span></p>
        </div>

        <div className='py-3 flex-col flex gap-8'>
          {transactionsData.map((transactions)=>(
              <div key={transactions.id} className=" font-inter flex flex-col justify-center  px-7 rounded-lg bg-white h-24">
              <div className='flex items-center justify-between'>
                <p className=' text-4xl font-semibold'>${transactions.amount}</p>
                <p className=' text-xl text-[#4D4D4D] font-medium'>{transactions.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
  }