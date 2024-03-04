

export function CardUsers({pictureNews, name}) {
    return (
        <div className="w-72 p-8 flex flex-col items-center justify-center  border rounded-lg shadow bg-black border-gray-900 ">
            <div>
                <img className='lg:block  rounded-full mb-2 w-28 h-28' src={pictureNews} alt="" />
            </div>
            <a href="#">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-white">{name}</h5>
            </a>
            <p className="mb-3 font-normal  text-gray-400">Lider de Comunidad</p>
        </div>
    )
}