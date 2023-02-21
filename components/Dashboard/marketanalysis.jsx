"use client"
import {
    Card,
    Metric,
    Text,
    Footer,
    Flex,
    ButtonInline,
    Callout,
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionList,
    ProgressBar,
    Block,
} from '@tremor/react';

import {
    ArrowCircleRightIcon,
    ArrowCircleUpIcon,
    ArrowCircleDownIcon,
    ArrowNarrowRightIcon,
} from '@heroicons/react/solid';

const products = [
    {
        name: 'Product A',
        metric: '$ 23,456',
        percentageValue: 80,
        status: 'Performing as average',
        info: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod. Sit amet, consetetur
        sadipscing elitr. Per aspera ad astra.`,
        icon: ArrowCircleRightIcon,
    },
    {
        name: 'Product B',
        metric: '$ 20,123',
        percentageValue: 78,
        status: 'Performing above average',
        info: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod. Sit amet, consetetur
        sadipscing elitr. Per aspera ad astra.`,
        icon: ArrowCircleUpIcon,
    },
    {
        name: 'Product C',
        metric: '$ 8,100',
        percentageValue: 62,
        status: 'Performing below average',
        info: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod. Sit amet, consetetur
        sadipscing elitr. Per aspera ad astra.`,
        icon: ArrowCircleDownIcon,
    },
];

export default function MarketAnalytics() {
    return (
        <Card maxWidth="max-w-md">
            <Text>Product of the Day</Text>
            <Metric>Tobacco</Metric>
            <Text marginTop="mt-4">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod. Sit amet, consetetur
                sadipscing elitr, sed diam nonumy eirmod.
            </Text>
            <AccordionList shadow={ false } marginTop="mt-6">
                { products.map((item, idx) => (
                    <Accordion key={ item.name } expanded={ idx === 0 && true }>
                        <AccordionHeader>
                            <Block spaceY="space-y-2">
                                <Flex>
                                    <Text>{ item.name }</Text>
                                    <Text truncate={ true }>{ `${item.metric} (${item.percentageValue}%)` }</Text>
                                </Flex>
                                <ProgressBar percentageValue={ item.percentageValue } />
                            </Block>
                        </AccordionHeader>
                        <AccordionBody>
                            <Callout
                                title={ item.status }
                                text={ item.info }
                                icon={ item.icon }
                                color="gray"
                                marginTop="mt-2"
                            />
                        </AccordionBody>
                    </Accordion>
                )) }
            </AccordionList>
            <Footer>
                <ButtonInline
                    size="sm"
                    text="View details"
                    icon={ ArrowNarrowRightIcon }
                    iconPosition="right"
                />
            </Footer>
        </Card>
    );
}