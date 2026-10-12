import { socialData, headerData } from "../constants/data";
import { captionStyles } from "../styles";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-8 border-t border-white/10 bg-ink/60 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
        <div className="flex flex-col gap-1">
          <p className="font-display font-bold text-white">
            {headerData.websiteName}
          </p>
          <p className={captionStyles}>
            Full-Stack • Python / Django • Java / Spring Boot • Angular
          </p>
          <p className={captionStyles}>© {year} Anirban Basak. All rights reserved.</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {socialData.socialList.map((s, i) => (
            <a
              key={i}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-primary/60 hover:shadow-glow transition-all text-xs font-sans text-white/80 hover:text-white"
            >
              <img
                src={s.logo}
                alt={`${s.type} logo`}
                loading="lazy"
                className="h-4 w-4 object-contain"
              />
              {s.type}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
