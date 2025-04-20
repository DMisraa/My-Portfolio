import CV from "../assets/Daniel_Menahem_CV.pdf";

const container = "min-h-screen bg-gray-100 p-4 flex flex-col items-center";
const button =
  "mb-4 px-6 py-2 bg-purple-600 text-white rounded-full shadow-md hover:bg-purple-700 transition-all text-sm sm:text-base";

function Resume() {
  return (
    <div className={container}>
      <a href={CV} download="Daniel_Menahem_CV.pdf" className={button}>
        Download Resume
      </a>
      <embed
        src={CV}
        type="application/pdf"
        width="100%"
        height="800px"
        className="max-w-4xl w-full"
      />
    </div>
  );
}

export default Resume;
