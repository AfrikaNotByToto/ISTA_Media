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
                    <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
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
