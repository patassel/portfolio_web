import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { useInView } from 'react-intersection-observer';

type ProjectSectionProps = {
  title: string;
  description: string;
  details: string[];
  images?: StaticImageData[];
  apkLink?: string;
};

const ProjectSection: React.FC<ProjectSectionProps> = ({
  title,
  description,
  details,
  images,
  apkLink,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`h-screen flex flex-col justify-center items-center w-4/5 mx-auto p-6 transform transition-all duration-1000 ease-in-out ${
        inView ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      }`}
    >
      <div className="flex flex-col h-full w-full">
        {/* Section de texte (1/3 de la hauteur) */}
        <div className="flex-grow h-1/3 flex justify-center items-center w-full">
          <div className="w-full text-center">
            <h2 className="text-3xl font-semibold text-blue-50 mb-8">
              {title}{' '}
              {apkLink && (
                <a
                  href={apkLink}
                  className="text-blue-500 hover:text-blue-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link
                </a>
              )}
            </h2>
            <p className="text-gray-200 text-xl mb-4 text-start w-full">
              {description}
            </p>
            <ul className="list-disc list-inside text-gray-200  flex flex-col items-start w-full ">
              {details.map((item, index) => (
                <li key={index} className="text-left w-full">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Section d'images (2/3 de la hauteur) */}
        <div className="flex-grow h-2/3 flex justify-center items-center w-full">
          <div
            className={`grid h-full ${
              images && images.length > 1
                ? 'md:w-1/2 grid-cols-2 gap-2'
                : 'md:w-3/4'
            }`}
          >
            {images &&
              images.length > 0 &&
              images.map((image, index) => (
                <div key={index} className="mx-auto flex-1">
                  <Image
                    src={image}
                    alt={`Project image ${index + 1}`}
                    className="object-fill rounded-lg"
                    layout="responsive"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
