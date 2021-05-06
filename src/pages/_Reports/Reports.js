import React, { Component } from 'react';
import { Container } from "reactstrap";
import { Button, Form, FormGroup, Label, Input,Col } from 'reactstrap';
import Row from 'reactstrap/lib/Row';

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';


class Reports extends Component {
    constructor(props) {
        super(props);
        this.state={
            breadcrumbItems : [
                { title : "International Affairs Office", link : "#" },
                { title : "Reports", link : "#" },
            ],
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                    <Breadcrumbs title="Reports" breadcrumbItems={this.state.breadcrumbItems} />
                    
                    </Container> 
                </div>
                <Row>
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <Form inline>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="exampleDate" className="mr-sm-2">From Date</Label>
                            <Input
                            type="date"
                            name="date"
                            id="exampleDate"
                            placeholder="date placeholder"
                            />
                        </FormGroup>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="exampleDate" className="mr-sm-2">To Date</Label>
                            <Input
                            type="date"
                            name="date"
                            id="exampleDate"
                            placeholder="date placeholder"
                            />
                        </FormGroup>
                            
                            <Button color="primary">Download</Button>
                        </Form>
                    </Col>
                </Row>
                
            </React.Fragment>
        );
    }
}

export default Reports;