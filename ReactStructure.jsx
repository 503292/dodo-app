import React, { Component } from 'react';

// - First Enter (active LogOut):
// APP Enter

class ReactStructure extends Component {
  state = {};
  render() {
    return (
      <>
        <Header>
          <Weather />
          <CourseRate />
          <ButtonInOut />
        </Header>
        <Main>
          <PlanYourDayTasks />
          <Contacts />
        </Main>
        <Footer>
          <Timer />
          <ToglleTheme />
        </Footer>
      </>
    );
  }
}

export default ReactStructure;
