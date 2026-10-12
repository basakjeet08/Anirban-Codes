import { footerData, headerData, heroData } from "../constants/data";
import { captionStyles } from "../styles";

const Footer = () => {
  // UI Data for the Footer
  const { stackSummary } = footerData;
  const { websiteName } = headerData;
  const { name } = heroData;
  const year = new Date().getFullYear();

  return (
    <footer className="mt-8 border-t border-white/10 bg-ink/60 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8">
        {/* Profile and Copyright */}
        <div className="flex flex-col gap-1">
          <p className="font-display font-bold text-white">{websiteName}</p>
          <p className={captionStyles}>{stackSummary}</p>
          <p className={captionStyles}>
            © {year} {name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
