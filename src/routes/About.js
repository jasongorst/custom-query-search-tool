import { Container, Header } from 'semantic-ui-react'

const About = () => {
  return (
    <div className="About">
      <Container text textAlign="center">
        <Header size="huge">About</Header>
        <p className="lead">
          This application is a form coded in JavaScript that allows the user to create a custom search query, fetches
          the selected transaction data from a back-end API, and presents it in a table.
        </p>
        <p>
          This project was created by <a href="https://jasongorst.com">Jason Gorst</a> during a micro-internship with <a
          href="https://www.openavenuesfoundation.org">Open Avenues Foundation</a> in cooperation with <a
          href="https://www.delaget.com">Delaget</a>, under the supervision of <a
          href="https://www.linkedin.com/in/vaclav-hasenohrl-399431116/">Vaclav Hasenohrl</a>.
        </p>
        <p>
          It was created with <a href="https://reactjs.org">React</a>, utilizing the <a
          href="https://react.semantic-ui.com">React integration</a> for <a href="https://semantic-ui.com">Semantic
          UI</a>. Other libraries utilized are <a href="https://reactrouter.com">React Router</a>, <a
          href="https://github.com/arfedulov/semantic-ui-calendar-react">semantic-ui-calendar-react</a>, <a
          href="https://momentjs.com">Moment</a>, and <a href="https://github.com/Sage/jsurl">JSURL</a>.
        </p>
        <p>
          The source code is available on <a href="https://github.com/jasongorst/custom-query-search-tool">Github</a>,
          and is released under the <a href="https://choosealicense.com/licenses/mit/">MIT License</a>.
        </p>
      </Container>
    </div>
  )
}

export default About
