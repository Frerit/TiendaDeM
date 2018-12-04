import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Image, Header} from "native-base";



class SingleDetail extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Image>

                    </Image>
                </Header>
               <Body>

               </Body>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(SingleDetail);
