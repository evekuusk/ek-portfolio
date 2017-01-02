class Tab extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <div className="tab">
        <Content components={this.props.content} divClass="tab-content" />
      </div>
    )
  }
}

Tab.propTypes = {
  label: React.PropTypes.string,
  content: React.PropTypes.element,
  index: React.PropTypes.number
}

// <h2 className="tab-label">{this.props.title != undefined ? this.props.title : this.props.label}</h2>
