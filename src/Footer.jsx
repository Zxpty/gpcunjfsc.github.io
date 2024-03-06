import { FaGithub } from "react-icons/fa";
export default function Footer() {
    return (
        <div className="w-full flex text-wrap gap-1 flex-row mx-auto py-10  text-opacity-60  text-center items-center justify-center max-md:text-xs text-sm">
            Build by<a className=" font-medium underline underline-offset-4" href="https://github.com/Zxpty"> @Zxpty.</a>The source code is available on
            <a className="flex font-medium flex-row gap-2 items-center  underline underline-offset-4" href="https://github.com/gpcunjfsc/gpcunjfsc.github.io"> GitHub<FaGithub /></a>
        </div>
    )
}