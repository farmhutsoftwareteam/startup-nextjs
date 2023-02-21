"use client"
import {
    Card,
    Text,
    Footer,
    ButtonInline,
    Icon,
    Title,
    ColGrid,
} from '@tremor/react';

import {
    ShoppingBagIcon,
    CashIcon,
    UsersIcon,
    ShoppingCartIcon,
    ArrowNarrowRightIcon,
} from '@heroicons/react/solid';

const categories = [
    {
        title: 'Sales',
        text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`,
        icon: ShoppingBagIcon,
    },
    {
        title: 'Profit',
        text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`,
        icon: CashIcon,
    },
    {
        title: 'Customers',
        text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`,
        icon: UsersIcon,
    },
    {
        title: 'Orders',
        text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`,
        icon: ShoppingCartIcon,
    },
];

export default function NavigationLinks() {
    return (
        <ColGrid numColsSm={ 2 } gapX="gap-x-6" gapY="gap-y-6">
            { categories.map((item) => (
                <Card key={ item.title }>
                    <Icon variant="light" icon={ item.icon } size="lg" color="blue" />
                    <Title marginTop="mt-6">{ item.title }</Title>
                    <Text marginTop="mt-2">{ item.text }</Text>
                    <Footer>
                        <ButtonInline
                            size="sm"
                            text="View details"
                            icon={ ArrowNarrowRightIcon }
                            iconPosition="right"
                        />
                    </Footer>
                </Card>
            )) }
        </ColGrid>
    );
}