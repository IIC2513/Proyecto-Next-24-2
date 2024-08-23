import Image from 'next/image';

interface CardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  tags: string[];
}

const Card: React.FC<CardProps> = ({ imageSrc, imageAlt, title, description, tags }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Image className="w-full" src={imageSrc} alt={imageAlt} width={400} height={225} />
      <div className="px-6 py-4">
        <div className="font-bold text-black text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
