class App extends React.Component {
  render() {
    return (
      <div className="global-wrapper">
        <Header />
        <TabsAccordion tabs={[
          <Tab index={0} label="Experience" content={
            <div className="tab-content-wrapper">
              <SubHeader subtitle="Experience" divClass="experience-area-header" iconsrc="img/placeholder.png" iconalt="icon placeholder" />
            </div>
          } />,

          <Tab index={1} label="Playground" content={
            <div className="tab-content-wrapper">
              <SubHeader subtitle="Playground" divClass="playground-area-header" iconsrc="img/placeholder.png" iconalt="icon placeholder" />
            </div>
          } />,

          <Tab index={2} label="About" content={
            <div className="tab-content-wrapper">
              <SubHeader subtitle="About" divClass="about-area-header" iconsrc="img/placeholder.png" iconalt="icon placeholder" />
            </div>
          } />
        ]} />
      </div>
    )
  }
};

ReactDOM.render(<App />, document.getElementById('app'));
