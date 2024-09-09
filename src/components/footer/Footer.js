import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="text-white border-t border-sofBlack w-full h-[500px] bg-[url('./images/footerBg.png')] bg-left-bottom bg-no-repeat bg-cover pt-14 flex justify-center items-center text-center font-custom text-2xl px-4">
      {t("footerFirst")}
      <br className="hidden lg:flex" />
      {t("footerSecond")}
    </div>
  );
};

export default Footer;
