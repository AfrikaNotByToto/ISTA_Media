import React from 'react';
import DescriptionCardPage from './DescriptionCardPage';

export default function AboutUs(): JSX.Element {
    return (
        <div style={{ marginTop: '100px' }}>
            <h1 style={{ fontWeight: 'bold', color: 'white' }}>Почему вам стоит выбрать нас?</h1>
            <h5 style={{ fontWeight: 'italic', color: 'white' }}>Мы - маркетинговое агентство для сферы недвижимости
                с 2-х летним опытом и множеством успешных кейсов.
            </h5>
            <DescriptionCardPage />
        </div>
    );
}
