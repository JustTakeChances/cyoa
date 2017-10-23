import React from 'react'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Option from './Option'

const Section = function statelessFunctionComponentClass({id,
                                                            name,
                                                            description,
                                                            min,
                                                            max,
                                                            points,
                                                            options}) {

  const createOption = function(optionProps) {
    return <Option {...optionProps} key={optionProps.id} />; 
  }

  return (
        <Grid>
            <b>{name}</b>
            <p>{description}</p>
            <Row>
            {options.map(createOption)}
            </Row>
        </Grid>
    );
};

export default Section;