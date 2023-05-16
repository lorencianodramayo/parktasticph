import React from "react";
import PropTypes from "prop-types";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import _ from "lodash";

export default function Pager({ title, content }) {
  const titlePrefix = "Parktastic PH ";
  useDocumentTitle(
    _.isEmpty(title) ? titlePrefix : `${title} - ${titlePrefix}`
  );

  return <>{content}</>;
}

Pager.propTypes = {
  title: PropTypes.string,
  content: PropTypes.any,
};
