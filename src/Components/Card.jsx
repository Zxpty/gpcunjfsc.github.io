

export function Card({titleNews,pictureNews, descNews}) {
    return (
        <div className="max-w-sm p-8 flex flex-col items-center justify-center text-center border rounded-lg shadow bg-black border-gray-900 ">
            <div>
                <img className='lg:block md:hidden rounded-2xl mb-2 w-72 h-72' src={pictureNews} alt="" />
            </div>
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{titleNews}</h5>
            </a>
            <p className="mb-3 font-normal  text-gray-400">{descNews}</p>
        </div>
    )
}