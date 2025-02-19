

export default function Article({img,number,title,text}) {
  return (
    <article className='flex  h-[162px] md:w-[343px] md:flex-grow md:gap-10'>
        <div className='w-[100px] flex-none'>
            <img src={img} alt=""/>            
        </div>
        <div className=' pl-6'>
            <p className='text-gray-400 text-3xl mb-[18px] font-bold'>{number}</p>
            <h2 className='font-bold mb-[18px] hover:text-orange-400 cursor-pointer'>{title}</h2>
            <p className='text-purple-700 text-[16px]'>{text}</p>
        </div>
    </article>
  )
}
 


