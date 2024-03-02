import PropTypes from "prop-types";
import LanguageCard from "./LanguageCard";
import { useEffect, useState } from "react";

const LanguageSupport = ({ languageSupports }) => {
  const [langs, setLangs] = useState({});
  let languages = {};

  useEffect(() => {
    languageSupports &&
      languageSupports?.map((language) => {
        languages[language.language.name] +=
          language.language_support_type.id.toString();
      });
    setLangs(languages);
  }, [languageSupports]);

  return (
    <div className="language-supports-container">
      <div className="language-supports-header text-xl mb-2 font-medium">
        Language Support
      </div>
      <div className="language-supports-body">
        <table cellPadding={5} className="language-table w-full">
          <thead className="border-b-[1px]  *:text-sm">
            <tr className="*:w-1/4">
              <th></th>
              <th>Audio</th>
              <th>Subtitles</th>
              <th>Interface</th>
            </tr>
          </thead>
          <tbody>
            {langs &&
              Object.keys(langs)?.map((l, index) => (
                <tr key={index}>
                  <LanguageCard language={l} supportTypes={langs[l]} />
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

LanguageSupport.propTypes = {
  languageSupports: PropTypes.array,
};

export default LanguageSupport;
