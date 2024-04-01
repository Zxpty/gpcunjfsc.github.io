import { FaDiscord } from "react-icons/fa";
export default function Discord() {

    return (
        <a href="https://discord.gg/VvFMjFdWpg" className="flex flex-row items-center justify-center gap-2 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            <FaDiscord />
            Discord
        </a>
    )
}