import Link from "next/link";
import React from "react";

function IconButton({
    href = "",
    iconName,
    text = "",
    className = "",
    textClass = "",
    iconClass = "",
    btnType = "a",
    iconSize = "text-2xl",
    textSize = "text-sm",
    fontWeight = "font-medium",
    onClick = null,
    ...props
}) {
    const commonClass = `flex flex-row flex-nowrap justify-start items-center ${className}`;
    const commonIconClass = iconName
        ? `bi bi-${iconName} ${iconSize} ${fontWeight} ${iconClass}`
        : "hidden";
    const commonTextClass = `px-3 whitespace-nowrap font-medium ${textSize} ${textClass}`;
    const textBox =
        text == "" ? null : <h4 className={commonTextClass}>{text}</h4>;

    return btnType == "a" ? (
        <Link href={href} className={commonClass}>
            <i className={commonIconClass}></i>
            {textBox}
        </Link>
    ) : btnType == "button" ? (
        <button onClick={onClick} className={commonClass}>
            <i className={commonIconClass}></i>
            {textBox}
        </button>
    ) : null;
}

export default IconButton;
