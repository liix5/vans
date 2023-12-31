import graph from '/src/assets/reviewsGraph.png'
import star from'/src/assets/star.svg'

export default function Reviews(){
    const reviewsData = [
      {
          rating: 5,
          name: "Elliot",
          date: "January 3, 2023",
          text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
          id: "1",
      },
      {
          rating: 5,
          name: "Sandy",
          date: "December 12, 2022",
          text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
          id: "2",
      },
  ]
  return(
    <div className="p-5 font-inter text-[#161616]">
      <div className='flex gap-4 items-baseline'>
      <h1 className='font-bold text-4xl'>Your reviews</h1>
      <p className="text-[#4D4D4D]"> Last <span className=" font-bold underline">30 days</span></p> 
      </div>
      <img className='py-8' src={graph} alt="graph" />
      {reviewsData.map((review) => (
                <div key={review.id}>
                    <div className="py-5">
                      <div className=' flex gap-1'>
                        {[...Array(review.rating)].map((_, i) => (
                           <img src={star} className='h-4' alt="star" key={i}/>
                        ))}
                        </div>
                        <div className="flex gap-2 py-3">
                            <p className=" font-semibold">{review.name}</p>
                          <p className=" text-[#8C8C8C] font-semibold">{review.date}</p>
                        </div>
                        <p className=' font-medium max-w-4xl'>{review.text}</p>
                    </div>
                    <hr />
                </div>
            ))}
    </div>
  )
  }     