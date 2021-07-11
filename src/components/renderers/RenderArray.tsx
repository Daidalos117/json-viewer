import React from 'react';
import { RenderByType, Level } from 'components/renderers/RenderByType';
import {Box, Text} from '@chakra-ui/react';

interface Props extends Level {
    array: unknown[];
}

export const RenderArray: React.FC<Props> = ({ array, level }) => (
    <>
        <Text color="grey">[</Text>
        <Box pl={4}>
            {array.map((item) => (
                <RenderByType data={item} level={level + 1} key={JSON.stringify(item)}/>
            ))}
        </Box>
        <Text color="grey">]</Text>
    </>
);
