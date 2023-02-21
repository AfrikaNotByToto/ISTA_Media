import React from 'react';
import DescriptionCardPage from './DescriptionCardPage';

export default function AboutUs(): JSX.Element {
    return (

        <div style={{ marginTop: '100px', margin: '1rem 2rem 1rem 2rem' }}>
            <h1 style={{ fontWeight: 'bold', color: 'black', fontSize: '30px' }}>Почему вам стоит выбрать нас?</h1>
            <h5 style={{ fontWeight: 'italic', color: 'black' }}>Мы - маркетинговое агентство для сферы недвижимости
                с 2-х летним опытом и множеством успешных кейсов.
            </h5>
            <center>
                <h1 style={{ fontWeight: 'bold', color: 'black', marginTop: '20px', fontSize: '30px' }}>Наши инструменты</h1>
            </center>
            <DescriptionCardPage />
        </div>
    );
}
