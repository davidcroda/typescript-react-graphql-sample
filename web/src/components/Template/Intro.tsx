export default function Intro(props: {title: string, description: string}) {
  return (
    <div className="col">
      {
        props.title ?
        <h3 className="progress-list__title">{props.title}</h3>
        : <></>
      }
      <p className="section__description">{props.description}</p>
      <a href="https://www.github.com/davidcroda/resume-graphql-react" className="section_btn site-btn"><i className="fa fa-github" /> View Source</a>
      <a href="/David_Roda_Resume.pdf" className="mx-5 section_btn site-btn"><img src="assets/img/img_btn_icon.png" alt="" />Download CV</a>
    </div>
  )
}