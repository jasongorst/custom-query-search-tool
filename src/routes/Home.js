import { Button, Container, Header, Menu, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import '../css/Home.css'

const Home = () => {
  return (
    <div className="Home">
      <Segment inverted vertical textAlign="center">
        <Container as="nav">
          <Header inverted as="h1">
            Custom Query Search Tool
          </Header>
          <Menu borderless compact inverted>
            <Menu.Item active>Home</Menu.Item>
            <Menu.Item><Link to="/app">App</Link></Menu.Item>
            <Menu.Item><Link to="/about">About</Link></Menu.Item>
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
            Presenting a form allowing the user to create a custom search
            query with up to five filter criteria, which calls a backend API
            and returns the resulting data as a paginated table.
          </p>
          <Button size="huge"><Link to="/app">Check It Out</Link></Button>
        </Container>
        <Segment inverted vertical as="footer">
          Cover template for <a href="http://semantic-ui.com">Semantic-UI</a>,
          by{" "}
          <a href="https://github.com/semantic-ui-forest">
            @Semantic-UI-Forest
          </a>
          .
        </Segment>
      </Segment>
    </div>
  )
}

export default Home
