const header = "relative bg-white py-16 overflow-hidden";
const bgSplash = "absolute inset-0 pointer-events-none z-0";
const leftSplash =
  "absolute top-1/4 left-0 w-[40%] h-[60%] rounded-full blur-3xl transition-all duration-500";
const rightSplash =
  "absolute top-1/4 right-0 w-[40%] h-[60%] rounded-full blur-3xl transition-all duration-500";
const link = "relative z-10 block group cursor-pointer hover:opacity-90 transition";
const contentWrapper = "max-w-[75%] mx-auto flex flex-col md:flex-row items-center justify-between px-6 text-center md:text-left";
const leftSection = "flex-1 mb-10 md:mb-0 md:pr-10 transition-all duration-300 ease-out";
const heading = "text-4xl font-bold text-gray-800 mb-4";
const paragraph = "text-gray-600 text-lg";
const imageWrapper = "flex-1 relative w-full max-w-[230px] h-60 md:h-72 mx-auto mb-10 md:mb-0 z-10 transition-all duration-300 ease-out flex items-center justify-center";
const image = "rounded-full border-4 border-white shadow-xl object-cover w-full h-full";
const imageBg = "absolute -inset-3 -z-10 bg-purple-200 rounded-full blur-2xl opacity-30";

const styles = {
  header,
  bgSplash,
  leftSplash,
  rightSplash,
  link,
  contentWrapper,
  leftSection,
  heading,
  paragraph,
  imageWrapper,
  image,
  imageBg
};

export default styles;