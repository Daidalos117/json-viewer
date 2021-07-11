import React from 'react';
import { Collapse, Link, Text, useDisclosure } from '@chakra-ui/react';
import { TriangleUpIcon } from '@chakra-ui/icons';
import { Level } from 'components/renderers/RenderByType';

interface Props extends Level {
    before: React.ReactNode;
    after: React.ReactNode;
}

export const Collapsable: React.FC<Props> = ({ children, level, before, after }) => {
    const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: level < 7 });

    return (
        <>
            <Text color="grey" as="span">
                <Link href="#" onClick={onToggle}>
                    <TriangleUpIcon sx={{ transform: `rotate(${isOpen ? '180deg' : 0})` }} />
                </Link>{' '}
                &nbsp;
                {before}
                <Collapse in={isOpen} animateOpacity>
                    {children}
                </Collapse>
                {!isOpen && <>...</>}
                <Text color="grey" as="span">
                    {after}
                </Text>

                <br />
            </Text>
        </>
    );
};
