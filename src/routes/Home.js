import '../css/cover.css'
import { Button, Container, Header, Menu, Segment } from 'semantic-ui-react'
import { Link, NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className="Home">
      <Segment inverted vertical textAlign="center">
        <Container as="nav">
          <Header inverted as="h1">
            Custom Query Search Tool
          </Header>
          <Menu borderless compact inverted>
            <Menu.Item as={NavLink} to="/">Home</Menu.Item>
            <Menu.Item as={NavLink} to="/app">App</Menu.Item>
            <Menu.Item as={NavLink} to="/about">About</Menu.Item>
          </Menu>
        </Container>
        <Container className="content">
          <Header inverted as="h1">
            Custom Query Search Tool
          </Header>
          <Header inverted as="h2">
            A search form to filter transaction data, built with React.
          </Header>
          <p>
            Create a search query with up to five filter criteria, which
            then calls a backend API and returns the resulting data as a
            paginated table.
          </p>
          <Button size="huge"><Link to="/app">Check It Out</Link></Button>
        </Container>
        <Segment inverted vertical as="footer">
          By <a href="https://www.linkedin.com/in/jason-gorst/">Jason Gorst</a> in 2022.
        </Segment>
      </Segment>
    </div>
  )
}

export default Home
