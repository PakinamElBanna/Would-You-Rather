import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

const NoMatch = ({location}) =>
          <div className="noMatch">
            <h1>404</h1>
            <h3>No match for requested route</h3>
            <div className="noMatch-Button">
            <Button variant="contained" color="primary" fullWidth >
            <Link to={'/home'}>Go Home</Link>
            </Button>
            </div>
          </div>



export default NoMatch
