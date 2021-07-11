import React from 'react';

interface Props {
    data: unknown;

}

export const RenderByType: React.FC<Props> = ({data}) => {

    if(typeof data === "number") {
        return <>data</>;
    } else if (typeof data === "string") {
        return <>"{data}"</>
    }


    return (<></>);
}
