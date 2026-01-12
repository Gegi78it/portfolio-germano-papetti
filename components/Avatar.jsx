import Image from "next/image";

const Avatar = () => {
  return (
    <Image
      src="/avatar.png"
      alt="avatar"
      width={737}
      height={678}
      className="w-full h-full object-contain pointer-events-none select-none"
      priority
    />
  );
};

export default Avatar;
