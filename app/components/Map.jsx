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
    position: [47.045745939597445, 28.865262866020206],
    title: 'Sexy Place',
    subtitle: 'Here такая вся sexy lives',
    image: '/img/map/2.png',
  },
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
            <Marker key={index} position={marker.position} icon={customIcon}>
              <Popup>
                <div className='flex gap-x-[30px]'>
                  <div className='flex-1'>
                    <h3>{marker.title}</h3>
                    <p className='leading-snug'>{marker.subtitle}</p>
                  </div>
                  <div className='flex-1'>
                    <Image
                      src={marker.image}
                      width={130}
                      height={160}
                      alt={marker.title}
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
