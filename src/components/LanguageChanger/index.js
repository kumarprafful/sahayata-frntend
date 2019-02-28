import React, { Component, Fragment } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { defaultLang } from "Constants/defaultValues";

class LanguageChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text
    };
  }
  componentWillMount() {
    var lang = localStorage.currentLanguage;
    if (lang == null) {
      lang = defaultLang;
    }

    axios
      .get(
        `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190226T184451Z.6cc2ab738833ebb1.b633fa5668b2f350bf87bb8d17c29488ab987290&text=${
          this.state.text
        }&lang=${lang}`
      )
      .then(res => {
        this.setState({ text: res.data.text[0] });
      });
  }

  render() {
    return <span>{this.state.text}</span>;
  }
}

const mapStateToProps = ({ lang }) => {
  return {
    lang
  };
};

export default connect(
  mapStateToProps,
  null
)(LanguageChanger);
