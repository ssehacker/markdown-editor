import React from 'react';
import Editor from './Editor';
import Preview from './Preview';

class MarkdownEditor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    const me = this;
    const { handleChange } = me;
    const { value } = me.state;
    return (
      <div className="neo-markdownEditor">
        <Editor onChange={handleChange.bind(me)} />
        <Preview value={value} />
      </div>
    );
  }
}

export default MarkdownEditor;