import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemAction';

class ShoppingList extends Component{
    static propTypes = {
        getItems: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    }

    componentDidMount() {
        this.props.getItems();
    }

    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    }

    render() {
        const { items } = this.props.item;
        return(
            <Container>                
                <ListGroup>
                    <TransitionGroup className='shopping-list'>
                        { this.props.isAuthenticated ?

                            items.map(({_id,name}) => (
                                <CSSTransition key={_id} timeout={500} classNames='fade'>
                                    <ListGroupItem>
                                        <Button
                                            className='remove-btn'
                                            color='danger'
                                            size='sm'
                                            onClick={this.onDeleteClick.bind(this, _id)}
                                        >
                                            &times;
                                        </Button>
                                        {name}
                                    </ListGroupItem>
                                </CSSTransition>
                            ))

                            :

                            null                        
                        }                        
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

const mapStateToProps = (state) => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);