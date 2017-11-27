import React from 'react'
import PropTypes from 'prop-types'

import { Container, Form, Input, Label } from './commons'

const Search = ({ onChange, onSubmit, query }) => (
  <Container className="row">
    <Form onSubmit={onSubmit}>
      <Container className="row">
        <Container className="input-field col s12">
          <Input onChange={onChange} type="text" value={query} />
          <Label label="search" text="Search by airport, city, or zip code" />
        </Container>
      </Container>
    </Form>
  </Container>
)

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired
}

export default Search
