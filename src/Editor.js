/**
 * Created by ssehacker on 2017/3/10.
 */
import React from 'react';

class Editor extends React.Component {

  static propTypes = {
    value: React.PropTypes.string,
    onChange: React.PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value || '',
    };
  }

  handleChange(e) {
    const { onChange } = this.props;
    this.setState({
      value: e.target.value,
    });
    onChange && onChange(e);
  }

  render() {
    const me = this;
    const { value } = me.state;
    const { handleChange } = me;
    return (
      <div className="ws-md-editor">
        <textarea onChange={handleChange.bind(me)} value={value}>

        </textarea>
      </div>
    );
  }
}

export default Editor;