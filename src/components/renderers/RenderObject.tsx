import React from 'react';
import { RenderByType, Level } from 'components/renderers/RenderByType';
import { Box, HStack } from '@chakra-ui/react';

import { Collapsable } from 'components/Collapsable';

interface Props extends Level {
    object: Object;
}

export const RenderObject: React.FC<Props> = ({ object, level }) => {
    return (
        <Collapsable before={'{'} after={'}'} level={level}>
            <Box pl={4} ml={0} borderLeft={'1px dashed black'} borderColor={'gray.500'}>
                {Object.entries(object).map(([key, value]) => (
                    <HStack alignItems="flex-start" key={key}>
                        <Box>"{key}" :</Box>
                        <Box>
                            <RenderByType data={value} level={level + 1} />
                        </Box>
                    </HStack>
                ))}
            </Box>
        </Collapsable>
    );
};
