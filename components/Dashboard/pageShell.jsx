"use client";
import { Spacer } from '@nextui-org/react';
import {
    Card,
    Title,
    Text,
    Tab,
    TabList,
    ColGrid,
    Block,
    Flex,
} from '@tremor/react';

import { useState } from 'react';
import MarketAnalytics from './marketanalysis';
import Marketprices from './marketprices';

export default function PageShell() {
    const [selectedView, setSelectedView] = useState(1);
    return (
        <div>
           

           

                <>
                    <ColGrid numColsMd={ 2 } numColsLg={ 2 } gapX="gap-x-6" gapY="gap-y-6" marginTop="mt-6">
                        <Card>
                            { /* Placeholder to set height */ }
                         <Flex>
                         <Marketprices />
                         <Spacer x={3} />
                         <MarketAnalytics />
                        

                         </Flex>
                            
                        </Card>
                       
                        <Card>
                            { /* Placeholder to set height */ }
                 
                        </Card>
                    </ColGrid>

                    <Block marginTop="mt-6">
                        <Card>
                            <div className="h-80" />
                        </Card>
                    </Block>
                </>
          
        </div>
    );
}