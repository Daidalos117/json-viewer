import React, { useMemo } from 'react';
import {RenderByType} from "components/renderers/RenderByType";

interface Props {
    JSONData: string;
}

export const JSONRender: React.FC<Props> = ({ JSONData }) => {
    const data = useMemo(() => JSON.parse(JSONData), [JSONData]);
    console.log({data})
    return <RenderByType data={data} />;
};
