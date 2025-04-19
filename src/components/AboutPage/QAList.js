import QAItem from "./QAItem.js";
import qaData from "../../utils/aboutPageQA.js";

function QAList(){
    return (
      <div className="space-y-6">
        {qaData.map((item, index) => (
          <QAItem
            key={index}
            index={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    );

} 
export default QAList;
