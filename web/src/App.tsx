import { SkillListContainer } from "./components/SkillList/SkillListContainer"
import Header from "./components/Template/Header"
import Intro from "./components/Template/Intro"
import Menu from "./components/Template/Menu"
import { WorkHistoryContainer } from "./components/WorkHistory/WorkHistoryContainer"
import "./assets/scss/main.scss"

function App() {
  
  const introDescription = `I am an experienced full stack developer with a specialization in backend microservices.
  While this is just a simple resume site, I built it with a React front end and TypeGraphQL backend to show as sample
  code to prospective employers. I have also worked extensively with Python (frameworks including Django, FastAPI,
  and Flask) and Go.`

  return (
    <div className='app'>
      <Menu />
      <Header />
      <section className="container section">
        <div className="row">
          <Intro title='Intro' description={introDescription} />
          <SkillListContainer />
        </div>
      </section>
      <section className="container section" id="workHistory">
        <WorkHistoryContainer />
      </section>
    </div>
  )
}

export default App
