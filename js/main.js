class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionData: {}
    }
  };
  // getSectionData(name) {
  //   name = name.toString().split(' ').join('_')
  //   return formAnswersObj != undefined ? formAnswersObj.hasOwnProperty(name) ? formAnswersObj[name] : null : null
  // };
  componentDidMount() {
    fetch("data/section-data.json")
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        console.log(json)
        console.log(new Date(json['EXPERIENCE']["positions"][0]['start']))
        console.log(getTimeline(monthDiff(new Date(json['EXPERIENCE']["positions"][0]['start'])))) // returns number of years and months since the position start date
        this.setState({
          aboutData: json["ABOUT"],
          experienceData: json["EXPERIENCE"],
          playgroundData: json["PLAYGROUND"]
        })
      })
    };
  render() {
    return (
      <div className="global-wrapper">
        <Header />
        <TabsAccordion tabs={[
          <Tab index={0} label="Experience" content={
            <div className="tab-content-wrapper">
              <SubHeader subtitle="Professional Experience" divClass="experience-area-header" iconsrc="img/placeholder.png" iconalt="icon placeholder" />
              <ExperienceContent />
            </div>
          } />,

          <Tab index={1} label="Playground" content={
            <div className="tab-content-wrapper">
              <SubHeader subtitle="Playground" divClass="playground-area-header" iconsrc="img/placeholder.png" description="Directory of Mini Example Projects" iconalt="icon placeholder" />
              <PlaygroundContent />
            </div>
          } />,

        <Tab index={2} label="About & Contact" content={
            <div className="tab-content-wrapper">
              <SubHeader subtitle="About & Contact" divClass="about-area-header" iconsrc="img/placeholder.png" iconalt="icon placeholder" />
              <AboutContent />
            </div>
          } />
        ]} />
      </div>
    )
  }
};

ReactDOM.render(<App />, document.getElementById('app'));
