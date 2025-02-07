import React from 'react'

export default function Valeurs() {
  return (
    <div className='flex flex-col bg-white py-20 px-16 gap-y-5'> 
        <h1 className='text-4xl font-bold text-center'>Nos valeurs</h1>
        <div className="flex justify-center items-center w-full">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className='p-7 bg-white shadow-lg shadow-gray-400  rounded-2xl lg:w-[25vw] flex flex-col items-center gap-y-3  '>
                    <h1 className='font-bold text-alpha '>Innovation continue </h1>
                    <p className='text-justify'>Chez Newmatic, nous croyons en l'importance de l'innovation pour répondre aux défis modernes. Nous investissons constamment dans la recherche et le développement pour offrir des solutions de sécurité de pointe qui anticipent les besoins futurs de nos clients.</p>
                </div>
                <div className='p-7 bg-white shadow-lg shadow-gray-400  rounded-2xl lg:w-[25vw] flex flex-col items-center gap-y-3'>
                    <h1 className='font-bold text-alpha '>Excellence technologique </h1>
                    <p className='text-justify'>La qualité et la fiabilité sont au cœur de nos produits. Nous nous appuyons sur des technologies de dernière génération pour garantir la sécurité de vos biens et informations, en respectant les plus hauts standards du secteur.</p>
                </div>
                <div className='p-7 bg-white shadow-lg shadow-gray-400  rounded-2xl lg:w-[25vw] flex flex-col items-center gap-y-3  '>
                    <h1 className='font-bold text-alpha '>Proximité et écoute client </h1>
                    <p className='text-justify'>Nous comprenons que chaque client a des besoins uniques. C'est pourquoi nous plaçons l'écoute et la personnalisation au centre de notre approche, afin d'offrir des solutions sur-mesure adaptées à chaque situation.</p>
                </div>
                <div className='p-7 bg-white shadow-lg shadow-gray-400  rounded-2xl lg:w-[25vw] flex flex-col items-center gap-y-3'>
                    <h1 className='font-bold text-alpha '>Responsabilité et éthique </h1>
                    <p className='text-justify'>En tant qu'entreprise responsable, nous nous engageons à respecter les normes éthiques et environnementales les plus strictes. Notre mission est de protéger non seulement vos biens mais aussi de contribuer positivement à la société et à l'environnement.</p>
                </div>
                <div className='p-7 bg-white shadow-lg shadow-gray-400  rounded-2xl lg:w-[25vw] flex flex-col items-center gap-y-3  '>
                    <h1 className='font-bold text-alpha '>Partenariats durables </h1>
                    <p className='text-justify'>Nous privilégions des relations à long terme basées sur la confiance et la transparence. Chaque partenariat est une opportunité de créer ensemble un environnement sécurisé, et de renforcer la collaboration avec nos clients et partenaires.
                    </p>
                </div>
                <div className='p-7 bg-white shadow-lg shadow-gray-400  rounded-2xl lg:w-[25vw] flex flex-col items-center gap-y-3'>
                    <h1 className='font-bold text-alpha '>Rigueur et fiabilité </h1>
                    <p className='text-justify'>La sécurité ne laisse aucune place à l’improvisation. Nous mettons un point d'honneur à fournir des solutions rigoureuses, fiables, et testées, pour garantir des résultats optimaux à nos clients, tout en maintenant une exécution impeccable.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
