import React, { useMemo, useEffect } from 'react';
import {RenderByType} from "components/renderers/RenderByType";

interface Props {
    JSONData: string;
    onError: (error: string) => void;
}

export const JSONRender: React.FC<Props> = ({ JSONData, onError }) => {

    const data = useMemo(() => {
        try {
            return JSON.parse(JSONData)
        }catch (e) {
            return false;
        }

    }, [JSONData]);

    useEffect(() => {
        if(!data) onError("JSON not valid");
    }, [data, onError]);

    return data && <RenderByType data={data} level={0} />;
};
