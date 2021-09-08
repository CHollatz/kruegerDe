import React from 'react'

interface ICustomImage {
    src?: string;
    onClick: () => void
    className?: string;
}

export const CustomImage = (props: ICustomImage) => {
    const { src, onClick, className } = props;
    return (
        <img
            className={`rounded-lg cursor-pointer mb-16 mx-4 ${className ?? 'h-64'}`}
            src={src ?? 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3'}
            alt=""
            onClick={onClick}
        />
    )
}