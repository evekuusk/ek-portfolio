class TabsAccordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openTab: 0,
      nextBtn: true,
      prevBtn: false,
      lastTabIndex: this.props.tabs.length - 1
    }
  };
  incrementTab() {
    this.goToTab(this.state.openTab + 1)
  };
  decrementTab() {
    this.goToTab(this.state.openTab - 1)
  };
  goToTab(num) {
    this.setState({
      openTab: num,
      nextBtn: this.state.lastTabIndex == num ? false : true,
      prevBtn: num == 0 ? false : true
    })
  };
  render() {
    const navBtns = this.props.tabs.map((btn) => (
      <button type="button" className={this.state.openTab == btn.props.index ? "tab-nav disabled" : "tab-nav"} onClick={() => this.goToTab(btn.props.index)}>{btn.props.label}</button>
    ));
    return (
      <div className="tabs-accordion">
        {navBtns}
        {this.props.tabs[this.state.openTab]}
        <button type="button" className={this.state.prevBtn ? "prev-tab-btn" : "prev-tab-btn disabled"} onClick={() => this.decrementTab()}>Previous</button>
        <button type="button" className={this.state.nextBtn ? "next-tab-btn" : "next-tab-btn disabled"} onClick={() => this.incrementTab()}>Next</button>
      </div>
    )
  }
}

TabsAccordion.propTypes = {
  tabs: React.PropTypes.arrayOf(React.PropTypes.element).isRequired
}
