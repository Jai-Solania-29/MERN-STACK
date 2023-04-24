import { AppBar, Toolbar, styled } from '@mui/material';

const Header = styled(AppBar)`
background: #111111
`;

const Tabs = styled('p')`
font-size: 20px;
margin-right: 20px;
`;

const NavBar = () => {
    return (
        <Header position='static'>
            <Toolbar>
                <Tabs>Jaideep Solania</Tabs>
                <Tabs>All Users</Tabs>
                <Tabs>Add User</Tabs>
            </Toolbar>
        </Header>
    )
}

export default NavBar;