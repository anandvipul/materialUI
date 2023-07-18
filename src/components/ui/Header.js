import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useScrollTrigger } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Button } from '@mui/material';

import logo from '../../assets/logo.svg';

function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, { elevation: trigger ? 4 : 0 });
}

const BottomSpacer = styled('div')(({ theme }) => ({
  marginBottom: '8em',
}));

const Logo = styled('img')(({ theme }) => ({
  height: '7em',
}));

const TabContainer = styled(Tabs)(({ theme }) => ({
  marginLeft: 'auto',
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  minWidth: 10,
  marginLeft: '25px',
  ...theme.typography.tab,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '50px',
  marginLeft: '50px',
  marginRight: '50px',
  ...theme.typography.estimate,
  height: '45px',
  color: 'white',
}));

export default function Header(props) {
  const [value, setValue] = useState(0);

  const handleChange = (event, value) => {
    event.stopPropagation();
    setValue(value);
  };

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters={true}>
            <Logo alt="company logo" src={logo} />

            <TabContainer
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              textColor="secondary"
            >
              <StyledTab label="Home" component={Link} value={0} to="/" />
              <StyledTab
                label="Services"
                component={Link}
                value={1}
                to="/services"
              />
              <StyledTab
                label="The Revolution"
                component={Link}
                value={2}
                to="/revolution"
              />
              <StyledTab
                label="About Us"
                component={Link}
                value={3}
                to="/about"
              />
              <StyledTab
                label="Contact Us"
                component={Link}
                value={4}
                to="/contact"
              />
            </TabContainer>

            <StyledButton variant="contained" color="secondary">
              Free Estimate
            </StyledButton>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <BottomSpacer></BottomSpacer>
    </>
  );
}
