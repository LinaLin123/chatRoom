import React from 'react'
import MessageItem from './MessageItem'

export default function MessageList() {
    return (
      <div>
        <MessageItem message="hej" />
        <MessageItem message="nlö" />
        <MessageItem message="ks" />
        <MessageItem message="s" />
      </div>
    );
  }