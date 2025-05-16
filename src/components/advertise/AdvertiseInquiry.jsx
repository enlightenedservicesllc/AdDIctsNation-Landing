import Emojies from "../../assets/advertise/advertise-emoji.webp";

const AdvertiseInquiry = () => {
  return (
    <div className="relative w-full flex justify-center items-center min-h-[200px] sm:min-h-[250px] md:min-h-[300px] lg:min-h-[350px]">
      {/* Background Image - Responsive */}
      <img
        src={Emojies}
        alt="Advertising Inquiry"
        className="absolute w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] max-w-[1200px] h-auto object-contain"
      />

      {/* Overlay Text */}
      <p className="relative text-black text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-center px-4 sm:px-6">
        For advertising inquiries, contact{" "}
        <a href="mailto:advertise@addictsnation.com" className="underline">
          advertise@addictsnation.com
        </a>
      </p>
    </div>
  );
};

export default AdvertiseInquiry;
