import "./index.scss";

type QuestCardImageProps = {
  image?: string;
  placeholder: string;
};

export default function QuestCardImage({ image, placeholder }: QuestCardImageProps) {
  return (
    <div className="quest__image">
      <img
        alt="quest_image"
        src={image || placeholder}
        onError={(e) => (e.currentTarget.src = placeholder)}
      />
    </div>
  );
}
