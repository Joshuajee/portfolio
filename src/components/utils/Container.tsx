import React, { ReactNode } from "react"

interface IProps {
    children: ReactNode,
    full: boolean
}

const Container = (props: IProps) => {
    return (
        <div className={`w-full flex py-12 justify-center`}>
            <div className={`h-full min-h-screen w-full flex flex-wrap py-2 lg:py-3 px-2 lg:px-40 2xl:container`}>
                {props.children}
            </div>
        </div>
    )
}

export default Container