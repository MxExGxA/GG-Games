import PropTypes from "prop-types";
import { RxCross2, RxCheck } from "react-icons/rx";

//1 Audio
//2 Subtitles
//3 Interface

const LanguageCard = ({ language, supportTypes }) => {
  let types = supportTypes.split("undefined")[1].split("").sort();
  let typesValues = ["1", "2", "3"];
  let newTypes = [];

  typesValues?.map((type) => {
    if (types.includes(type)) {
      newTypes.push(type);
    } else {
      newTypes.push("*");
    }
  });

  return (
    <>
      <td className="language-name max-w-5 text-sm">{language}</td>
      {newTypes &&
        newTypes?.map((type, index) => {
          if (type !== "*") {
            return (
              <td key={index} align="center">
                <RxCheck />
              </td>
            );
          } else {
            return (
              <td key={index} align="center">
                <RxCross2 />
              </td>
            );
          }
        })}
    </>
  );
};

LanguageCard.propTypes = {
  language: PropTypes.string,
  supportTypes: PropTypes.string,
};

export default LanguageCard;
