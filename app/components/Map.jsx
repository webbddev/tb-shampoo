'use client';

import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';

// leaflet css
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

const markers = [
  {
    position: [47.018677119196795, 28.83239329659408],
    title: 'TB Beauty House',
    subtitle:
      'Sunt profesioniste care aduc transformarea în viața cliențelor, oferind servicii de hair styling, makeup, manichiură, pedichiură și masaj.',
    image: '/img/map/5.png',
  },
];

const customIcon = new Icon({
  iconUrl: '/pin-solid.svg',
  iconSize: [40, 40],
});

const Map = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });

  return (
    <section>
      <MapContainer
        center={[46.98959154370678, 28.86788606643677]}
        zoom={isMobile ? 10 : 12}
        className={`${
          isMobile ? 'h-[300px]' : 'h-[900px] w-[95vw] mx-auto'
        } z-10`}
        zoomControl={false}
        // style={{ width: '90%', height: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
          // url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {/* markers */}
        {markers.map((marker, index) => {
          return (
            <Marker
              key={index}
              position={marker.position}
              icon={customIcon}
              eventHandlers={{
                mouseover: (e) => e.target.openPopup(),
              }}
            >
              <Popup className='custom-popup'>
                <div className='flex flex-col gap-4 p-1 max-w-md'>
                  <div className='flex-1 space-y-2'>
                    <h3 className='text-xl font-bold text-primary'>
                      {marker.title}
                    </h3>
                    <p className='text-base text-gray-700 leading-relaxed'>
                      {marker.subtitle}
                    </p>
                  </div>
                  <div className='flex-1 flex justify-center items-center'>
                    <Image
                      src={marker.image}
                      width={130}
                      height={160}
                      alt={marker.title}
                      className='rounded-lg shadow-md hover:scale-105 transition-transform duration-300'
                      priority
                    />
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </section>
  );
};

export default Map;
