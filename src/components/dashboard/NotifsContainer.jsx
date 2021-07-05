import React, {useState} from 'react';
import styled from "styled-components";
import Notification from "./Notification";
import { Collapse, ListItemIcon, ListItem, ListItemText, List } from '@material-ui/core';
import { ExpandLess, ExpandMore, Notifications } from '@material-ui/icons';

const StyledNotifContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  background: #2d2d2d;
  width: 300px;
`

const StyledListText = styled(ListItemText)`
  color: white; 
`

function NotificationBlock(props) {
    if (props.notifs)
        return (
            <div>
                {props.notifs.map((notif, i) =>
                    <Notification notif={notif} key={`${i}-notif`}/>
                )}
            </div>
        );
    else
        return <div>Nothing</div>
}

function NotificationContainer(props){
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <StyledNotifContainer>
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <Notifications style={{ color: "#FFFFFF" }}/>
                </ListItemIcon>
                <StyledListText>
                    Notifications
                </StyledListText>
                {open ? <ExpandLess style={{ color: "#FFFFFF" }}/> : <ExpandMore style={{ color: "#FFFFFF" }}/>}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <NotificationBlock notifs={props.notifs}/>
                </List>
            </Collapse>
        </StyledNotifContainer>
    )
}

export default NotificationContainer;