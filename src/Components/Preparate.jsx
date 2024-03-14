export default function Preparate() {
    return (
        <div className="section py-28 md:py-28 scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl">
            <div className="max-w-4xl gap-6 flex flex-col">
                <div>
                    <h1 className="text-4xl font-bold  pb-2 max-md:w-full  max-md:text-3xl text-white">Recursos</h1>
                    <p className="text-xl opacity-70  pb-4 max-md:w-full  max-md:text-lg [&>strong]:text-blue-500 " >
                        Esta sección es donde podras encontrar material para poder entrenar de manera autodidacta.
                    </p>
                    <p className="text-pretty">
                        Podras encontrar una gran diversidad de recursos, libros, paginas web, canales de Youtube,
                        páginas para competir, entre eso y mucho más, te desamos lo mejor de los exitos⭐
                    </p>
                    <p className="text-pretty pt-2 [&>strong]:text-blue-500">
                        <strong>Importante: </strong>Se recomienda usar el lenguaje de programación c++ por la efiencia y rapidez
                        con la que cuenta en cuanto a la entrada y salida de datos.
                    </p>
                </div>
                <div>
                    <h1 className="text-3xl font-bold  pb-2 pt-2 max-md:w-full  max-md:text-3xl text-white">Guías de Aprendizaje</h1>
                    <p className="opacity-70  pb-4  max-md:w-full  max-md:text-lg [&>strong]:text-blue-500 " >
                        Esta guia estara basada con recursos en los cuales hemos podido investigar y recolectar de diferentes páginas
                        la cuales de una u otra manera les servira de mucho apoyo si recien estan empezando.
                    </p>
                    <ul className="list-disc pl-5 ">
                        <li ><a className="hover:border-b-2 hover:border-blue-500" href="">Introducción C++ - OmegaUp</a></li>
                        <li ><a className="hover:border-b-2 hover:border-blue-500" href="https://www.hackerrank.com/domains/cpp">Learn Cpp and Prepare - HackerRank</a></li>
                        <li ><a className="hover:border-b-2 hover:border-blue-500" href="">Learn Cpp and Data Structures - CodeChef</a></li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-3xl font-bold  pb-2 pt-2 max-md:w-full  max-md:text-3xl text-white">Páginas con Documentación</h1>
                    <p className="opacity-70  pb-4  max-md:w-full  max-md:text-lg [&>strong]:text-blue-500 " >
                        Estas páginas sirven de mucho, ya que puedes buscar información detallada de las estructuras por si tienes dudas o como implementar.
                    </p>
                    <ul className="list-disc pl-5 ">
                        <li ><a className="hover:border-b-2 hover:border-blue-500" href="https://cp-algorithms.com/">CP Algorithms</a></li>
                        <li ><a className="hover:border-b-2 hover:border-blue-500" href="http://wcipeg.com/wiki/Special:AllPages">P3GWiki</a></li>
                        <li ><a className="hover:border-b-2 hover:border-blue-500" href="https://en.cppreference.com/w/">Cpp Reference</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}