import React from 'react';
import { Description } from './Types/type';

// eslint-disable-next-line max-len
export default function DescriptionCard({ description }: { description: Description }): JSX.Element {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={description.img} alt="" />
                <div className="p-6 flex flex-col justify-start">

                    <p className="text-gray-700 text-base mb-4">
                        {description.body}
                    </p>

                </div>
            </div>
        </div>
    );
}
