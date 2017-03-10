/**
 * Created by ssehacker on 2017/3/10.
 */
import React from 'react';
import Markdown from 'markdown-it';
import classnames from 'classnames';

const md = Markdown({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (e) {
        console.log(e);
      }
    }
    return ''; // use external default escaping
  },
  breaks: true
});

class Preview extends React.Component {
  static propTypes = {
    value: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      showHtml: true,
    };
  }

  switchPanel() {
    this.setState({
      showHtml: !this.state.showHtml,
    });
  }

  render() {
    const { value } = this.props;
    const { showHtml } = this.state;
    const me = this;
    const html = md.render(value);
    return (
      <div className="ws-md-preview">
        <div className={classnames({'ws-md-preview-html': true, 'markdown-body': true, 'ws-hidden': !showHtml})} dangerouslySetInnerHTML={{__html: html}}/>
        <pre className={classnames({'ws-md-preview-view': true, 'ws-hidden': showHtml})}>{html}</pre>
        <a className="ws-md-preview-switch" onClick={me.switchPanel.bind(me)}>
          {showHtml ? 'source' : 'view'}
        </a>
      </div>
    );
  }
}

export default Preview;
