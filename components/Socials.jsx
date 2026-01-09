import Link from "next/link";

export const socialData = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/germano.papetti?locale=it_IT",
    icon: "/icon/social/facebook.apng",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/geginho78/",
    icon: "/icon/social/instagram.apng",
  },
  {
    name: "TikTok",
    link: "https://www.tiktok.com/@germanopapetti",
    icon: "/icon/social/tiktok.apng",
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@GermanoPapetti",
    icon: "/icon/social/youtube.apng",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/germano-papetti-896789136/",
    icon: "/icon/social/linkedin.apng",
  },
  {
    name: "GitHub",
    link: "https://github.com/",
    icon: "/icon/social/github.apng",
  },
];

const Socials = () => {
  return (
    <div className="
      flex items-center justify-center xl:justify-start
      gap-x-4 sm:gap-x-5 md:gap-x-6
    ">
      {socialData.map((social, i) => (
        <Link
          key={i}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          title={social.name}
          className="opacity-80 hover:opacity-100 transition"
        >
          <img
            src={social.icon}
            alt={social.name}
            width={32}
            height={32}
            className="
              w-6 h-6
              sm:w-7 sm:h-7
              md:w-8 md:h-8
              object-contain
            "
            loading="lazy"
          />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
