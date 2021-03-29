import React from 'react';
import { Dropdown, Button, DropdownButton } from 'react-bootstrap';

export function SortBy({ hike, setOrdered}) {
	return (
		<DropdownButton id="dropdown-basic-button" title="Select Option">
		  <Dropdown.Item href="#/action-1">Alphabetical: A-Z</Dropdown.Item>
		  <Dropdown.Item href="#/action-2">Alphabetical: Z - A</Dropdown.Item>
		  <Dropdown.Item href="#/action-3">Difficulty: Low to High</Dropdown.Item>
		  <Dropdown.Item href="#/action-4">Difficulty: High to Low</Dropdown.Item>
		  <Dropdown.Item href="#/action-5">Closest to Me</Dropdown.Item>
		</DropdownButton>

		)
}