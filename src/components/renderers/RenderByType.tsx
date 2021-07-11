import React from 'react';
import { RenderArray } from 'components/renderers/RenderArray';
import {RenderObject} from "components/renderers/RenderObject";
import {Text} from "@chakra-ui/react";

export interface Level {
    level: number;
}

interface Props extends Level {
    data: unknown;
}

export const RenderByType: React.FC<Props> = ({ data, level }) => {
    if (typeof data === 'number') {
        return <Text color="blue">{data}</Text>;
    } else if (typeof data === 'string') {
        return <Text color="green">"{data}"</Text>;
    } else if (Array.isArray(data)) {
        return <RenderArray array={data} level={level} />;
    } else if(data && typeof data === "object") {
        return <RenderObject object={data} level={level} />;
    } else {}

    return <></>;
};
