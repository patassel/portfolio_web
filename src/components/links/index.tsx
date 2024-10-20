// components/SocialIcons.js
import { Github, Linkedin, FileUser } from "lucide-react";

const SocialIcons = () => {
  return (
    <div className="flex items-center space-x-4">
      <a
        href="https://github.com/patassel"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-100 hover:text-green-500 transition-colors duration-300"
      >
        <Github
          size={40}
          className="hover:scale-110 transition-transform duration-300"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/fayssal-ben-hammou-835125115/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-100 hover:text-green-500 transition-colors duration-300"
      >
        <Linkedin
          size={40}
          className="hover:scale-110 transition-transform duration-300"
        />
      </a>
      <a
        href="https://drive.google.com/file/d/11DdiGojGpYaCfvF72nTt0LfOJOMGIMST/view"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-100 hover:text-green-500 transition-colors duration-300"
      >
        <FileUser
          size={40}
          className="hover:scale-110 transition-transform duration-300"
        />
      </a>
    </div>
  );
};

export default SocialIcons;
