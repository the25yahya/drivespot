import axios from "axios";

const FormatResult = (resp) =>{
  let result = [];
  let finalResult = [];
  resp.forEach((item)=>{
    const SellerId = item.carSeller?.id;
    if (!result[SellerId]) {
      result[SellerId]={
        car:item.carSeller,
        images:[]
      }
    }
    if (item.CarSellerImgs) {
      result[SellerId].images.push(item.CarSellerImgs)
    }
  })

  result.forEach((item)=>{
    finalResult.push({
      ...item.car,
      images:item.images
    })
  })
  return finalResult
}

const FormatResultInventory = (resp) =>{
  let result = [];
  let finalResult = [];
  resp.forEach((item)=>{
    const inventoryId = item.carInventory?.id;
    if (!result[inventoryId]) {
      result[inventoryId]={
        car:item.carInventory,
        images:[]
      }
    }
    if (item.carInventoryImgs) {
      result[inventoryId].images.push(item.carInventoryImgs)
    }
  })

  result.forEach((item)=>{
    finalResult.push({
      ...item.car,
      images:item.images
    })
  })
  return finalResult
}

const CreateSendbirdUser = (userID,nickname,profileURL) =>{
  console.log('user id :',userID);
  console.log('nickname :',nickname);
  console.log('profile url :',profileURL);
  
  
  
  return axios.post(`https://api-${import.meta.env.VITE_SENDBIRD_APP_ID}.sendbird.com/v3/users`,{
    user_id:userID,
    nickname:nickname,
    profile_url:profileURL,
    issue_access_token:false
  },{
    headers:{
      'Content-Type':"application/json",
      'Api-Token':import.meta.env.VITE_SENDBIRD_API_KEY
    }
  })
}

const CreateSendbirdChannel = async(users,name)=>{
  return await axios.post(`POST https://api-${import.meta.env.VITE_SENDBIRD_APP_ID}.sendbird.com/v3/group_channels`,{
    user_ids:users,
    is_distinct:true,
    name:name
  },{
    headers:{
      'Content-Type':"application/json",
      'Api-Token':import.meta.env.VITE_SENDBIRD_API_KEY
    }
  })
}

export default {
  FormatResult,
  FormatResultInventory,
  CreateSendbirdUser,
  CreateSendbirdChannel
}