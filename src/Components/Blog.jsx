export default function Blog() {
    return (
        <div className="section py-28 md:py-28 scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl">
            <div className="max-w-4xl gap-6 flex flex-col">
                <div>
                    <h1 className="text-4xl font-bold  pb-2 max-md:w-full  max-md:text-3xl text-white">Nosotros</h1>
                    <p className="text-xl opacity-70  pb-4 max-md:w-full  max-md:text-lg [&>strong]:text-blue-500 " >
                        El Grupo de Estudio de Programación Competitiva de la Universidad José Faustino Sánchez
                        Carrión, es una comunidad dinámica compuesta por estudiantes apasionados
                        por la programación y el desarrollo de algoritmos. Nos esforzamos por promover el aprendizaje y la práctica
                        del Análisis y Diseño de Algoritmos, con el firme propósito de preparar a nuestros miembros para competir en
                        torneos de programación a nivel local, nacional e internacional.
                    </p>
                    <p className="text-pretty">
                        Nos enorgullece ser una comunidad inclusiva y diversa, donde se valora la creatividad, el esfuerzo y el compañerismo.
                        Sólo necesitas querer apoyar para poder ser parte de nosotros.
                        🙌
                    </p>
                </div>
            </div>
        </div>
    )
}