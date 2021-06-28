import React from 'react';
import styled from "styled-components";
import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import { Error } from '@material-ui/icons';

const StyledContent = styled.div`
  color: white;
`

const StyledDate = styled.div`
  color: #c4c4c4;
`

const PriorityToColor = ["CC3928", "FECC26", "99CC33"];

function Notification(props) {
    const {content, date} = props.notif;
    const priority = props.notif.priority == null ? 2 : props.notif.priority;

    return (
        <ListItem button>
            <ListItemIcon>
                <Error style={{ color: PriorityToColor[priority] }}/>
            </ListItemIcon>
            <ListItemText>
                <StyledContent>{content}</StyledContent>
                <StyledDate>{date}</StyledDate>
            </ListItemText>

        </ListItem>
    );
}

export default Notification;