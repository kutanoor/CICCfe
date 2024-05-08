import React, { useEffect } from 'react';

interface TransakIframeProps {
  apiKey: string;
  queryParameters?: string;
  environment: 'staging' | 'production';
}

const TransakIframe: React.FC<TransakIframeProps> = ({ apiKey, environment, queryParameters = '' }) => {
  const baseUrl = environment === 'staging' ? 'https://global.transak.com' : 'https://global.transak.com';

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const transakIframe = document.getElementById('transakIframe') as HTMLIFrameElement | null;
      const transakIframeWindow = transakIframe?.contentWindow;

      if (event.source !== transakIframeWindow) return;

      console.log('Event ID: ', event.data?.event_id);
      console.log('Data: ', event.data?.data);

      if (event.data?.event_id === 'TRANSAK_ORDER_SUCCESSFUL') {
        console.log('Order Data: ', event.data?.data);
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <><div className='pt-10'></div>
      <style>
        {`
          .transak-iframe-container {
            height: 100%;
            display: grid;
            margin: 0;
            padding: 0;
          }

          .transak-iframe-wrapper {
            position: relative;
            width: 500px;
            height: 80vh;
            margin: auto;
            
            border-radius: 15px;
            overflow: hidden;
          }

          @media (max-width: 768px) {
            .transak-iframe-wrapper {
              width: 90%;
              height: 70vh;
            }
          }

          @media (max-width: 480px) {
            .transak-iframe-wrapper {
              height: 60vh;
            }
          }
        `}
      </style>
      <div className="transak-iframe-container">
        <div className="transak-iframe-wrapper">
          <iframe
            id="transakIframe"
            src={`${baseUrl}/?apiKey=${apiKey}&${queryParameters}`}
            allow="camera; microphone; payment"
            style={{ height: '100%', width: '100%', border: 'none' }}
            title="Transak"
          />
        </div>
      </div>
    </>
  );
};

export default TransakIframe;
