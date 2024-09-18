import React from 'react'
import Header from '@/components/home/Header'
import { Link } from 'react-router-dom'
import MyListing from '@/components/myListing/MyListing'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"


function Profile() {
  return (
    <div>
        <Header />
        <div className='pt-32 px-10 md:px-20'>
            <Tabs defaultValue="MyListing" className="w-full">
              <TabsList>
                <TabsTrigger value="MyListing">MyListing</TabsTrigger>
                <TabsTrigger value="Inbox">Inbox</TabsTrigger>
                <TabsTrigger value="Profile">Profile</TabsTrigger>
              </TabsList>
              <Separator className='my-6' />
              <TabsContent value="MyListing">
                <MyListing />
              </TabsContent>
              <TabsContent value="Inbox">
                Inbox Tab
              </TabsContent>
              <TabsContent value="Profile">
                Profile Tab
              </TabsContent>
              <TabsContent value="password">Change your password here.</TabsContent>
            </Tabs>
        </div>
    </div>
  )
}

export default Profile