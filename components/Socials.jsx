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
    <div className="flex items-center justify-center xl:justify-start gap-2 sm:gap-3">
      {socialData.map((social) => (
        <a
          key={social.name}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          title={social.name}
          className="
            group inline-flex items-center justify-center
            rounded-xl border border-white/15 bg-white/10
            h-10 w-10 sm:h-11 sm:w-11
            hover:bg-white/15 hover:border-white/25
            transition
            focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70
          "
        >
          <img
            src={social.icon}
            alt=""
            width={28}
            height={28}
            className="w-6 h-6 sm:w-7 sm:h-7 object-contain group-hover:scale-105 transition"
            loading="lazy"
          />
        </a>
      ))}
    </div>
  );
};

export default Socials;
