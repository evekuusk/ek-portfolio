class SubHeader extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <div className={"sub-header " + this.props.divClass}>
        <img src={this.props.iconsrc} alt={this.props.iconalt} className="sub-header-icon" />
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}
