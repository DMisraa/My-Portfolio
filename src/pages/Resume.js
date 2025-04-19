import CV from '../assets/Daniel_Menahem_CV.pdf'

const container = "min-h-screen bg-gray-100 p-8"

function Resume() {
    return (
      <div className={container}>
        <embed
          src={CV}
          type="application/pdf"
          width="100%"
          height="800px"
        />
      </div>
    );
  }

  export default Resume