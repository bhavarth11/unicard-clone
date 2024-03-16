import React from "react";

const cardData = [
  {
    img: "https://www.uni.cards/images/nx-wave/whatsapp_bubble.webp",
    titleText: "Help, just a WhatsApp away. Anytime, Anyday.",
    subText:
      "During hectic work hours. On lazy sunday mornings. In the thick of night. Anytime.",
  },
  {
    img: "https://www.uni.cards/images/nx-wave/rupee_bubble.webp",
    titleText: "No hidden charges, no last minute surprises.",
    subText:
      "100% money back guarantee if a charge is applied without your knowledge.",
  },
  {
    img: "https://www.uni.cards/images/nx-wave/antivirus_bubble.webp",
    titleText: "Super secure. Because we care about your money.",
    subText:
      "During hectic work hours. On lazy sunday mornings. In the thick of night. Anytime.",
  },
];

const bannerData = [
  {
    img: "https://www.uni.cards/images/nx-wave/app_screen_1.webp",
    topWhiteText: "We’ve all heard of instant groceries, now say hello to",
    topGradientText: "instant credit.",
    bottomText: "0% hassle, 100% paperless. Get your Uni Card instantly.",
  },
  {
    img: "https://www.uni.cards/images/nx-wave/app_screen_2.webp",
    topWhiteText: "With Uni,",
    topGradientText: "you’re always in control.",
    bottomText:
      "Set your own payment limits. Choose how and where you spend. Lock and unlock your card. All right from the app.",
  },
];

const Features = () => {
  return (
    <div className="bg-black text-white py-10">
      {bannerData.map((data, idx) => (
        <Banner
          key={idx}
          img={data.img}
          topWhiteText={data.topWhiteText}
          topGradientText={data.topGradientText}
          bottomText={data.bottomText}
        />
      ))}
      <div className="flex flex-col gap-y-12 md:flex-row">
        {cardData.map((data, idx) => (
          <Card
            key={idx}
            img={data.img}
            titleText={data.titleText}
            subText={data.subText}
            rev={idx % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
};

const Banner = ({ img, topWhiteText, topGradientText, bottomText }) => {
  return (
    <div className="flex flex-col items-center md:flex-row md:justify-between w-full ">
      <div className="mx-4">
        <h2 className="font-bold text-3xl">{topWhiteText + topGradientText}</h2>
        <h3>{bottomText}</h3>
      </div>
      <img src={img} alt="" className="w-[500px] md:w-[300px]" />
    </div>
  );
};

const Card = ({ img, titleText, subText, rev }) => {
  return (
    <div
      className={`flex ${
        rev ? "flex-row-reverse" : "flex-row"
      } items-center mx-10 gap-x-5 md:flex-col`}
    >
      <div className="flex-1 ">
        <img src={img} alt="" className=" w-[120px] mx-auto" />
      </div>

      <div className="flex-1 md:text-center">
        <div className="font-bold text-xl">{titleText}</div>
        <div className="text-gray-400">{subText}</div>
      </div>
    </div>
  );
};

export default Features;
