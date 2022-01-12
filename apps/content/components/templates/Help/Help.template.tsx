import React, { FC } from 'react';
import { Container, Row } from '@jade/ui/atoms';
import HelpTopic from '../../organisms/HelpTopic';

const HelpContent: FC = () => {
    return (
        <Container isFluid>
            <Row>
                <HelpTopic />
            </Row>
        </Container>
    );
};

export default HelpContent;
