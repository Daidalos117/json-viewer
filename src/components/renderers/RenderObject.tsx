import React from 'react';
import { RenderByType, Level } from 'components/renderers/RenderByType';
import { Box, HStack, Text, useDisclosure, Link } from '@chakra-ui/react';
import { TriangleUpIcon } from '@chakra-ui/icons';

interface Props extends Level {
    object: Object;
}

export const RenderObject: React.FC<Props> = ({ object, level }) => {
    const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: level < 7 });

    return (
        <>
            <Text color="grey" as="span">
                <Link
                    href="#"
                    onClick={onToggle}
                >
                    <TriangleUpIcon sx={{ transform: `rotate(${isOpen ? '180deg' : 0})` }} />
                </Link> &nbsp;
                {'{'}
            </Text>
            {isOpen ? (
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
            ) : (
                <>...</>
            )}

            <Text color="grey" as="span">{'}'}</Text> <br />
        </>
    );
};
