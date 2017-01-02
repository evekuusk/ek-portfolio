class Content extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <div className="tab-content">
        {this.props.components}
      </div>
    )
  }
}

Content.propTypes = {
  divClass: React.PropTypes.string,
  components: React.PropTypes.element.isRequired
}
