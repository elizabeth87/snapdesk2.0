/**
 * ************************************
 *
 * @module  BystanderTicketBox
 * @author
 * @date
 * @description  component that renders a single textbox for all Bystanders / Mentors
 *
 * ************************************
 */

import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
// import LiveChat from "./LiveChat.jsx";
let buttons;
class BystanderTicketBox extends Component {
  constructor(props) {
    super(props);
    // this.renderChat = this.renderChat.bind(this);
  }

  render() {
   
    if (this.props.ticket.status === "active") {
      //ticket published by another user but has not been pick up yet
      //Accept button will be active but Cancel button will not and mentee is anonymous
      buttons = (
        <span>
          <Button
            onClick={() => this.props.acceptTicket(this.props.messageId, this.props.userId)}
            type="button"
            className="btn btn-success"
          >
            Accept
          </Button>
          {/* <Button onClick={() => this.props.chat()} className="btn btn-success">
            Chat
          </Button> */}
          <Button disabled={true} type="button" className="btn btn-secondary">
            Cancel
          </Button>
        </span>
      );
    } else if (
      this.props.ticket.userId !== this.props.ticket.mentorId &&
      this.props.ticket.status === "pending"
    ) {
      //this is when the ticket has been picked up by another mentor already
      //Both button will not be active and mentee is anonymous
      buttons = (
        <span>
          <Button disabled={true} type="button" className="btn btn-success">
            Pending
          </Button>
          <Button disabled={true} type="button" className="btn btn-secondary">
            Cancel
          </Button>
        </span>
      );
    } else if (
      this.props.ticket.userId === this.props.ticket.mentorId &&
      this.props.ticket.status === "pending"
    ) {
      //user is the mentor
      //Cancel button is active but Accept is not. mentee userName is active
      buttons = (
        <span>
          <Button disabled={true} type="button" className="btn btn-success">
            Pending
          </Button>
          <Button
            onClick={() => this.props.cancelAccept(this.props.messageId)}
            type="button"
            className="btn btn-warning"
          >
            Decline
          </Button>
        </span>
      );
    }
    
    return (
      
      <div className="BystanderTicketBox ticketbox">
        <p>Request: {this.props.messageInput}</p>
        <p>Expected Snaps: {this.props.messageRating}</p>
        {buttons}
      </div>
    );
  }
}

export default BystanderTicketBox;
