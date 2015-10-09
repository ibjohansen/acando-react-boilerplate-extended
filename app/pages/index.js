'use strict';

import React from 'react';
import Menu from './menu';
import {Grid, Row, Col} from 'react-bootstrap';

export default React.createClass({

    displayName: 'app/pages/index.js',

    render() {

        const {children} = this.props;
        const {location} = this.props;
        return (
            <Grid>
                <Row>
                    <Col md={12}>
                        <Menu location={location.pathname}/>
                    </Col>
                </Row>

                <Row className="spacer">
                    <Col md={12}>
                        &nbsp;
                    </Col>
                </Row>

                <Row>
                    <Col md={3}></Col>
                    <Col md={6}>

                        {children ? children.content : <span/>}
                    </Col>
                    <Col md={3}></Col>
                </Row>

            </Grid>
        )
    }
});