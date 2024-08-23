import React from 'react';
import Card from '@/components/Card';
import cardImage from '@/img/cardImage.jpg';

const ExamplePage: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Card
        imageSrc={cardImage.src}
        imageAlt="Sunset in the mountains"
        title="The Coldest Sunset"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
        tags={['photography', 'travel', 'winter']}
      />
    </div>
  );
};

export default ExamplePage;
