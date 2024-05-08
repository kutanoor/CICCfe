"use client"
import React from 'react';
import TransakIframe from '@/components/TransakIframe/TransaxIframe';
import Navbar from "@/components/Layout/Navbar";

const App: React.FC = () => {
  const apiKey = '4531b7a7-cd4d-47ef-a046-bf6bdefbbbff';
  const environment = 'production'; 
  const queryParameters = ''; 

  return (
    <div>
        <Navbar />
      <TransakIframe apiKey={apiKey} environment={environment} queryParameters={queryParameters} />
    </div>
  );
};

export default App;
