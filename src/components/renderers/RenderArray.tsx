import React from 'react';
import { RenderByType, Level } from 'components/renderers/RenderByType';
import { Box } from '@chakra-ui/react';
import { Collapsable } from 'components/Collapsable';

interface Props extends Level {
    array: unknown[];
}

export const RenderArray: React.FC<Props> = ({ array, level }) => (
    <Collapsable before={'['} after={']'} level={level}>
        <Box pl={4}>
            {array.map((item) => (
                <RenderByType data={item} level={level + 1} key={JSON.stringify(item)} />
            ))}
        </Box>
    </Collapsable>
);
