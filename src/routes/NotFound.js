import { Container, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="NotFound">
      <Container text textAlign="center">
        <Header size="huge">Not Found</Header>
        <p className="lead">
          We couldn't find the page you were looking for.
        </p>
        <p className="lead">
          Click <Link to="/">here</Link> to return to the home page.
        </p>
      </Container>
    </div>
  )
}

export default NotFound
