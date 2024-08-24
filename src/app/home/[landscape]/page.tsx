'use client'

import React from 'react';
import Card from '@/components/Card';
import cardImage from '@/img/cardImage.jpg';
import landscapesDetails from '../landscapesDetails';
import { useParams, redirect} from 'next/navigation';


const ExamplePage: React.FC = () => {
    const { landscape } = useParams();

    const landscapeDetail = landscape && (landscapesDetails[landscape as keyof typeof landscapesDetails] as unknown as { imageSrc: string; iamgeAlt: string; title: string; description: string; tags: string[]; });
    
    if (!landscapesDetails) {
        redirect('/')
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
            <p>Landscape: {landscape}</p>
            <Card
                imageSrc={landscapeDetail? landscapeDetail.imageSrc : ""}
                imageAlt={landscapeDetail? landscapeDetail.iamgeAlt : ""}
                title={landscapeDetail? landscapeDetail.title : ""}
                description={landscapeDetail? landscapeDetail.description : ""}
                tags={landscapeDetail? landscapeDetail.tags : []}
            />
        </div>
    );
};

export default ExamplePage;