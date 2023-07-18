import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';

const PreviewCard = () => {
  return (
    <div className="w-full xl:w-[546px] h-[450px] bg-gray-50 p-1 shadow-lg">
        <Carousel className='w-full h-[400px] bg-blue-600'>
            <Image
                alt="..."
                src="/assets/countryApi-dark-desk.png"
                width={200}
                height={200}
            />
            <Image
                alt="..."
                src="/assets/countryApi-light-desk.png"
                width={200}
                height={200}
            />
            <Image
                alt="..."
                src="/assets/countryApi-dark-mobile.png"
                width={200}
                height={200}
            />
            <Image
                alt="..."
                src="/assets/countryApi-light-mobile.png"
                width={200}
                height={200}
            />
            <Image
                alt="..."
                src="/assets/countryApi-details-desk-dark.png"
                width={200}
                height={200}
            />
            <Image
                alt="..."
                src="/assets/countryApi-details-desk-light.png"
                width={200}
                height={200}
            />
            <Image
                alt="..."
                src="/assets/countryApi-details-mobile-dark.png"
                width={200}
                height={200}
            />
            <Image
                alt="..."
                src="/assets/countryApi-details-mobile-light.png"
                width={200}
                height={200}
            />
        </Carousel>
        <div className='flex items-center justify-evenly gap-5'>
            <Link href={'/'} className="border-b-2 hover:text-green-400 border-green-700 p-2">View Project</Link>
            <Link href={'/'} className="border-b-2 hover:text-green-400 border-green-700 p-2">View Code</Link>

        </div>
    </div>
  )
}

export default PreviewCard
