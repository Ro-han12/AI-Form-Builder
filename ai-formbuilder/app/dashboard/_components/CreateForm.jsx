"use client"
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { AiChatSession } from '@/configs/AIModel'
import { useUser } from '@clerk/nextjs'
import { JsonForms } from '@/configs/schema'
import { db } from '@/configs'
import moment from 'moment/moment'
import { useRouter } from 'next/navigation'; 
import { Loader2 } from 'lucide-react'


const PROMPT=", On the basis of description please give a form in json format with form title,form subheading with form having form field,form name,placeholder name, and form label,fieldTitle,fieldType,field required in JSON format."
  
function CreateForm() {
    const [openDialog,setOpenDailog]=useState(false)
    const [userInput,setUserInput]=useState();
    const [loading,setLoading]=useState();
    const {user}=useUser();
    const route=useRouter();

    const onCreateForm=async()=>{
        // console.log(userInput);
        setLoading(true)

        const result= await AiChatSession.sendMessage("Description:"+userInput+PROMPT);
        console.log(result.response.text());
        if(result.response.text())
        {
            const resp= await db.insert(JsonForms).values({
                jsonform: result.response.text(),
                createdBy:user?.primaryEmailAddress?.emailAddress,
                createdAt:moment().format('DD/MM/yyyy')
            }).returning({id:JsonForms.id});
            console.log("New Form ID",resp[0].id);
            if(resp[0].id)
            {
                route.push('/edit-form/'+resp[0].id)
            }
            setLoading(false);
        }
        setLoading(false);
    }

  return (
      <div>
        <Button
        onClick={()=> setOpenDailog(true)}>Create form
        </Button>
          <Dialog open={openDialog}>
              <DialogContent>
                  <DialogHeader>
                      <DialogTitle>Create new form</DialogTitle>
                      <DialogDescription>
                        <Textarea  className='my-2' 
                            onChange={(event)=>setUserInput(event.target.value)}
                        
                        placeholder="write description of your form"/>
                        <div className='flex gap-2 my-3 justify-end'>
                            <Button 
                            onClick={()=>setOpenDailog(false)}
                            variant='destructive'>Cancel</Button>
                            <Button 
                                disabled={loading}
                            onClick={()=>onCreateForm()}>
                                {loading?
                                <Loader2 className='animate-spin'/>:'Create'
                            }
                            </Button>
                        </div>

                      </DialogDescription>
                  </DialogHeader>
              </DialogContent>
          </Dialog>

    </div>
  )
}

export default CreateForm