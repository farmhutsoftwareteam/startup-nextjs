"use client";
import {
    Card,
    Title,
    Text,
    Tab,
    TabList,
    ColGrid,
    Block,
} from '@tremor/react';

import { useState } from 'react';

export default function PageShell() {
    const [selectedView, setSelectedView] = useState(1);
    return (
        <div>
           

           

                <>
                    <ColGrid numColsMd={ 2 } numColsLg={ 3 } gapX="gap-x-6" gapY="gap-y-6" marginTop="mt-6">
                        <Card>
                            { /* Placeholder to set height */ }
                            <div className="h-28" />
                        </Card>
                        <Card>
                            { /* Placeholder to set height */ }
                            <div className="h-28" />
                        </Card>
                        <Card>
                            { /* Placeholder to set height */ }
                            <div className="h-28" />
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