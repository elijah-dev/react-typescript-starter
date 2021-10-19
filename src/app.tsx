import React, { FC } from 'react';
import { myApp, container, inner } from '@/app.scss';
import { Button } from '@/components/button/button';

export const App: FC = () => (
    <>
        <h1 className={myApp}>Hello world!</h1>
        <div className={container}>
            Lorem, ipsum dolor.
            <div className={inner}>Lorem ipsum dolor sit amet.</div>
            <Button />
        </div>
    </>
);
