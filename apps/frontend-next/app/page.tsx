import Image from 'next/image';
import Link from 'next/link';

const partners = [
  { name: 'ABSA', logo: '/Images/absa-logo-red.webp', url: 'https://www.absa.africa' },
  { name: 'Cisco', logo: '/Images/cisco.webp', url: 'https://www.cisco.com' },
  { name: 'Hilton', logo: '/Images/conradhiltonfoundation.webp', url: 'https://www.hiltonfoundation.org' },
  { name: 'County', logo: '/Images/county.webp', url: '#' },
  { name: 'Datacamp', logo: '/Images/datacamp.png', url: 'https://www.datacamp.com' },
  { name: 'GDI', logo: '/Images/GDI.webp', url: 'https://globaldevincubator.org' },
  { name: 'Huawei', logo: '/Images/huawei.webp', url: 'https://www.huawei.com' },
  { name: 'ICT', logo: '/Images/ict.webp', url: '#' },
  { name: 'KNCCI', logo: '/Images/KNCCI.webp', url: 'https://www.kncci.or.ke' },
  { name: 'Konza', logo: '/Images/Konza.webp', url: 'https://www.konzacity.go.ke' },
  { name: 'Liquid', logo: '/Images/liquid.webp', url: 'https://liquid.tech' },
  { name: 'Mastercard', logo: '/Images/mastercard-foundation.webp', url: 'https://www.mastercardfoundation.org' },
  { name: 'NGO Source', logo: '/Images/ngosource.webp', url: 'https://www.ngosource.org' },
  { name: 'NMK', logo: '/Images/nmk.webp', url: '#' },
  { name: 'Seacom', logo: '/Images/seacom.webp', url: 'https://seacom.com' },
];

export default function Spfm() {
  return (
    <div className="bg-white min-h-screen text-gray-900">
      {/* Header */}
      <header className="bg-blue-900 text-white py-6">
        <div className="container mx-auto flex justify-between px-6">
          <nav className="flex space-x-6">
            <Link href="#">Home</Link>
            <Link href="#">About</Link>
            <Link href="#">Programs</Link>
            <Link href="#">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Listen Section */}
      <div className="text-center py-12">
        <Image src="/Images/Swahilipotfm.webp" alt="Swahilipot FM Logo" width={150} height={100} className="mx-auto" />
        <h2 className="text-3xl font-bold mt-4">Swahilipot FM Live Streaming</h2>
        <h2 className="text-3xl font-bold mt-4">Listen to Swahilipot FM</h2>
        <p className="text-lg mt-2">Enjoy live streaming and stay connected</p>
        <Link href="https://streaming-link.com">
          <button className="mt-4 px-6 py-2 bg-red-600 hover:bg-red-700 transition text-white rounded-md">
            Listen Live
          </button>
        </Link>
      </div>

      {/* Streaming Section */}
      <div className="container mx-auto py-12 text-center">
        <h2 className="text-3xl font-bold">Watch Swahilipot FM Live</h2>
        <div className="mt-6 w-full max-w-3xl mx-auto bg-black text-white p-6 rounded-md shadow-lg">
          <p className="text-xl">OFFLINE</p>
        </div>
      </div>

      {/* Partners Section */}
      <div className="bg-gray-100 py-12">
        <h2 className="text-3xl font-bold text-center">Our Partners</h2>
        <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
          {partners.map((partner, index) => (
            <Link key={index} href={partner.url} target="_blank" rel="noopener noreferrer">
              <Image
                src={partner.logo}
                alt={`${partner.name} Logo`}
                width={120}
                height={60}
                className="cursor-pointer hover:opacity-80 transition"
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6 mt-12">
        <div className="container mx-auto flex flex-wrap justify-between px-6">
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-bold">ABOUT SWAHILIPOT</h3>
            <ul className="text-sm">
              <li>Contact us</li>
              <li>About us</li>
              <li>Our Origin Story</li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-bold">DEPARTMENTS</h3>
            <ul className="text-sm">
              <li>Communication</li>
              <li>Creatives</li>
              <li>Community Experience</li>
              <li>Engineering Team</li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-bold">Location</h3>
            <iframe
              src="https://maps.google.com/maps?q=Swahilipot%20Hub&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="300"
              height="200"
              className="rounded-md"
            ></iframe>
          </div>
        </div>
      </footer>
    </div>
  );
}
