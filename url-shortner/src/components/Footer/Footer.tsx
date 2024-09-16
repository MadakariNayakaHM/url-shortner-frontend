import * as React from 'react';

interface IFooterProps {
}

const Footer: React.FunctionComponent<IFooterProps> = () => {
  return (
    <>
    <div className="bg-slate-900 text-white text-base text-center py-2">
        copyright &#169 urlShortner | Madakari |
    </div>
    </>
  );
};

export default Footer;
