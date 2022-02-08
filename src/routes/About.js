import { Container, Header } from 'semantic-ui-react'

const About = () => {
  return (
    <div className="About">
      <Container text textAlign="center">
        <Header size="huge">Semantic-UI starter template</Header>
        <p className="lead">
          Use this document as a way to quickly start any new project.
        </p>
        <p className="lead">
          All you get is this text and a mostly barebones HTML document.
        </p>
      </Container>
    </div>
  )
}

export default About
