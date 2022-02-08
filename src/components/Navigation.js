import { useState } from 'react'
import { Button, Container, Grid, Icon, Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  const [dropdownMenuStyle, setDropdownMenuStyle] = useState({display: "none"})

  const handleToggleDropdownMenu = () => {
    if (dropdownMenuStyle.display === "none") {
      setDropdownMenuStyle({display: "flex"})
    } else {
      setDropdownMenuStyle({display: "none"})
    }
  }

  return (
    <div className="Navigation">
      <Grid padded className="tablet computer only">
        <Menu borderless fluid inverted size="huge">
          <Container>
            <Menu.Item header as={NavLink} to="/">
              Custom Query Search Tool
            </Menu.Item>
            <Menu.Item as={NavLink} to="/">
              Home
            </Menu.Item>
            <Menu.Item as={NavLink} to="/app">
              App
            </Menu.Item>
            <Menu.Item as={NavLink} to="/about">
              About
            </Menu.Item>
          </Container>
        </Menu>
      </Grid>
      <Grid padded className="mobile only">
        <Menu borderless fluid inverted size="huge">
          <Menu.Item header as={NavLink} to="/">
            Custom Query Search Tool
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Button
                icon
                inverted
                basic
                toggle
                onClick={handleToggleDropdownMenu}
              >
                <Icon name="content"/>
              </Button>
            </Menu.Item>
          </Menu.Menu>
          <Menu
            borderless
            fluid
            inverted
            vertical
            style={dropdownMenuStyle}
          >
            <Menu.Item as={NavLink} to="/">
              Home
            </Menu.Item>
            <Menu.Item as={NavLink} to="/app">
              App
            </Menu.Item>
            <Menu.Item as={NavLink} to="/about">
              About
            </Menu.Item>
          </Menu>
        </Menu>
      </Grid>
    </div>
  )
}

export default Navigation
