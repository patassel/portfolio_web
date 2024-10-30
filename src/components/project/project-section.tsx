import Image, { StaticImageData } from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";

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
      className={`w-full max-w-4xl mx-auto p-6 bg-transparent transform transition-all duration-1000 ease-in-out ${
        inView ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      }`}
    >
      <div className="flex flex-col md:flex-row gap-20">
        {/* Section de texte */}
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-semibold text-blue-50 mb-2">
            {title}{" "}
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
          <p className="text-gray-200 mb-4">{description}</p>
          <ul className="list-disc list-inside text-gray-200 mb-4">
            {details.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Section d'images */}
        <div
          className={`grid gap-4 md:w-1/2 max-xl:w-1/3 mx-auto ${
            images && images.length > 1 ? "grid-cols-2" : "grid-cols-1"
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
  );
};

export default ProjectSection;
