"use sever";

import { RegisterSchema } from "@/schemas";
import * as z from 'zod'

//This directive indicates that the function can run on the server, enabling server-side actions.

export const register = async (values) => {
  const validateFields = RegisterSchema().safeParse(values);
  
  if(!validateFields.success){
    return { error: 'Invalid fields'} 
  }
  return { sucess: 'Email Sent! '}

};
