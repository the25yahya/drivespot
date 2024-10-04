import React, { useEffect, useState } from 'react'
import { App as SendbirdApp } from '@sendbird/uikit-react';
import '@sendbird/uikit-react/dist/index.css';
import SendbirdProvider from '@sendbird/uikit-react/SendbirdProvider';
import { useUser } from '@clerk/clerk-react';
import { GroupChannelList } from '@sendbird/uikit-react/GroupChannelList';
import { GroupChannel } from '@sendbird/uikit-react/GroupChannel';

function Inbox() {
    const {user} = useUser()
    const [userId,setUserId] = useState()
    const [channelurl,setChannelUrl] = useState('')

    useEffect(()=>{
        if (user) {
           const id = (user.primaryEmailAddress.emailAddress).split('@')[0];
           setUserId(id)
        }
    },[user])
  return( 
    <div>
        <SendbirdProvider appId={import.meta.env.VITE_SENDBIRD_APP_ID}
         userId={userId} nickname={user.fullName} profileUrl={user.imageUrl} allowProfileEdit={true}>
          <div>
            <div>
              <GroupChannelList
              onChannelSelect={(channel)=>{
                setChannelUrl(channel)
              }}
              channelListQueryParams={
                {
                  includeEmpty: true
                }
              }/>
            </div>
            <div>
             <GroupChannel channelUrl={channelurl} />
            </div>
          </div>
        </SendbirdProvider>
    </div>
  )
}



export default Inbox