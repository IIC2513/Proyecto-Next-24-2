'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import landscapesDetails from './landscapesDetails';
import Link from 'next/link';

const ExamplePage: React.FC = () => {
  const router = useRouter();

  const handleClick = (landscape: string) => {
    router.push(`/home/${landscape}`)
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 dark:bg-black">
      <p>Bienvenido! Selecciona una opción:</p>
      {Object.keys(landscapesDetails).map((landscape) => (
        <Link key={landscape} href={`/home/${landscape}`}>Ir a {landscape}</Link>
      ))}
    </div>
  );
};

export default ExamplePage;
