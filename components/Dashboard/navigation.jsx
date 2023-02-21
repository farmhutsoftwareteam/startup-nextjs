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
import { useLocation } from '@/hooks/useLocatio';
import Cookies from 'js-cookie';



export default function NavigationLinks() {
    const location = useLocation();
    Cookies.set('location', location);
  
    return (
        <ColGrid numColsSm={ 3 } gapX="gap-x-6" gapY="gap-y-6">
            
                <Card >
                   
                    <Title marginTop="mt-6">Sales</Title>
                    <Text marginTop="mt-2">Sales</Text>
                    <Footer>
                        <ButtonInline
                            size="sm"
                            text="View details"
                            
                        />
                    </Footer>
                </Card>
                <Card >
                   
                   <Title marginTop="mt-6">Sales</Title>
                   <Text marginTop="mt-2">Sales</Text>
                   <Footer>
                       <ButtonInline
                           size="sm"
                           text="View details"
                           
                       />
                   </Footer>
               </Card>
               <Card >
                   
                   <Title marginTop="mt-6">Sales</Title>
                   <Text marginTop="mt-2">Sales</Text>
                   <Footer>
                       <ButtonInline
                           size="sm"
                           text="View details"
                           
                       />
                   </Footer>
               </Card>
             
        </ColGrid>
    );
}