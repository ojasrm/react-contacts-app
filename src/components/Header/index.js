import React from "react";
import { Button, Icon, Image, Menu } from "semantic-ui-react";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<Menu secondary pointing>
			<Image src={logo} width={60} />
			<Menu.Item as={Link} to="/" style={{ fontSize: 24 }}>
				TrulyContacts
			</Menu.Item>
			<Menu.Item position="right">
				<Button as={Link} to="/contacts/create" primary icon>
					<Icon name="add"></Icon>Create Contact
				</Button>
			</Menu.Item>
			<Menu.Item>
				<Button color="red" icon>
					<Icon name="log out"></Icon>Logout
				</Button>
			</Menu.Item>
		</Menu>
	);
};

export default Header;
