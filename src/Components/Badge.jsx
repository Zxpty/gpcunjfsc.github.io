/* eslint-disable react/prop-types */
export function Badge({ text, color }) {
    let bgColorClass;
    let textColorClass;

    switch (color) {
        case "blue":
            bgColorClass = "bg-blue-900";
            textColorClass = "text-blue-300";
            break;
        case "red":
            bgColorClass = "bg-red-900";
            textColorClass = "text-red-300";
            break;
        case "purple":
            bgColorClass = "bg-purple-900";
            textColorClass = "text-purple-300";
            break;
        case "green":
            bgColorClass = "bg-green-900";
            textColorClass = "text-green-300";
            break;
        default:
            bgColorClass = "bg-gray-900";
            textColorClass = "text-gray-300";
    }

    return (
        <span className={`text-xs font-medium me-2 px-2.5 py-0.5 rounded ${bgColorClass} ${textColorClass}`}>{text}</span>
    )
}
