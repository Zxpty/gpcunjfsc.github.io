import { Badge } from "./Badge";
import { Card } from "./Card";
import Discord from "./icons/Discord";
import Facebook from "./icons/Facebook";
import { posts } from "../utils/posts";
import { Link } from "react-router-dom";

const firstThree = posts.slice(0, 3);
export default function Main() {
    return (
        <main>
            <section className="w-full  mx-auto py-32 items-center flex flex-col justify-center">
                <h1 className="text-white text-5xl font-bold flex flex-row gap-x-4 pb-2 text-center max-md:text-3xl">
                    Programación Competitiva UNFJSC
                </h1>
                <h2 className="text-xl opacity-60 pb-8 text-center max-md:w-full w-3/5 max-md:text-lg" >
                    Bienvenidos, les presentaremos información sobre el grupo de estudio y la Programacion Competitiva.
                    En el cual compartiremos muchas experiencias y competencias en las cuales puedes participar.
                </h2>
                <div className="w-full flex flex-row items-center justify-center gap-4 pb-4">
                    <Facebook />
                    <Discord />
                </div>
                <div className=" flex flex-row items-center justify-center">
                    <Badge text="UNJFSC" color="blue" />
                    <Badge text="Competitive Programming" color="red" />
                    <Badge text="Data Structures" color="purple" />
                </div>
            </section>
            <section className="flex flex-col  w-full items-center mx-auto py-2">
                <div>
                    <div className="flex text-center text-3xl font-bold pb-4">Ultimas Noticias</div>
                </div>
                <div className="flex flex-col gap-8 md:flex-row">
                    {
                        firstThree.map(post => {
                            return <Card key={post.id} pictureNews={post.pic} titleNews={post.title} descNews={post.shortDesc} />
                        })
                    }
                </div>
                {/* <Link to='/blog' className="mt-3 py-2.5 px-5 me-2 mb-2 text-sm font-medium rounded-lg border  focus:z-10 focus:ring-4 focus:ring-zinc-700 bg-zinc-800 text-zinc-400 border-zinc-600 hover:text-white hover:bg-zinc-700">Ver mas...</Link> */}
            </section>
        </main>
    )
}