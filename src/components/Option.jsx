import React from 'react'
import Col from 'react-bootstrap/lib/Col'
import Image from 'react-bootstrap/lib/Image'
import ToggleButtonGroup from 'react-bootstrap/lib/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/lib/ToggleButton'
import Panel from 'react-bootstrap/lib/Panel'

const Option = function statelessFunctionComponentClass({id, name, description, points}) {

    const title = <b>{name}</b>;

    return (
        <Col xl={2} lg={3} md={4} sm={6}>
        <Panel header={title}>
            {/* <Image src="/assets/thumbnail.png" alt="card image" rounded /> */}
            <p className="card-text">{description}</p>
            <ToggleButtonGroup type="checkbox" block>
            <ToggleButton bsStyle="primary" block value={id}>{points.amount} {points.type}</ToggleButton>
            </ToggleButtonGroup>
        </Panel>
        </Col>
    );
};

export default Option;