import React from "react";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <div className="px-10 pb-32 bg-zinc-900 text-white">
      <Logo fill="white" dotfill="cyan" />
      <div className="text-sm text-gray-500">
        Indiqube Sigma No.3/B, Nexus Koramangala 3rd Block SBI Colony,
        <br />
        Koramangala, Bengaluru, Karnataka 560034
        <br />
        <br />
        Contact Us: 080 68216821 <br />
        Email: care@uni.club
      </div>

      <div className="h-[1px] w-full bg-gradient-to-r from-blue-600 via-green-400 to-yellow-400 mt-5"></div>

      <div className="flex justify-center gap-x-5 mx-10 mt-5">
        <div>Instagram</div>
        <div>LinkedIn</div>
        <div>Twitter</div>
        <div>Facebook</div>
        <div>Careers</div>
      </div>
    </div>
  );
};

export default Footer;
