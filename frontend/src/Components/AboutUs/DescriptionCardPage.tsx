import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import DescriptionCard from './DescriptionCard';
import { initDescription } from './descriptionSlicer';

export default function DescriptionCardPage(): JSX.Element {
    const state = useSelector((store: RootState) => store.descriptions.descriptions);
    const dispatch = useAppDispatch();
    useEffect((): void => {
        dispatch(initDescription());
    }, [dispatch]);
    return (
        <div>
            {state ? (
                <div>
                    <div style={{ display: 'grid', flexFlow: 'row wrap', gridTemplateColumns: 'repeat(3, 1fr)', margin: '2rem 1rem 1rem 14rem' }}>
                        {state.map((description) => (
                            <DescriptionCard key={description.id} description={description} />
                        ))}
                    </div>
                </div>

            ) : (
                <>
                    <div>YOU OBOSRALSIA</div>
                    <div>{state}</div>
                </>
            )}
        </div>
    );
}
