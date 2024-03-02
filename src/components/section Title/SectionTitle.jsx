import PropTypes from "prop-types";

const SectionTitle = ({ title, icon }) => {
  return (
    <div className="my-20 relative">
      {icon}
      <h1 className="text-white text-8xl relative handy-font font-light max-md:text-6xl">
        {title}
      </h1>
    </div>
  );
};
SectionTitle.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.any,
};

export default SectionTitle;
