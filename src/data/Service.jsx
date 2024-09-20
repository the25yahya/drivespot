const FormatResult = (resp) =>{
  let result = [];
  let finalResult = [];
  resp.forEach((item)=>{
    const listingId = item.carListing?.id;
    if (!result[listingId]) {
      result[listingId]={
        car:item.carListing,
        images:[]
      }
    }
    if (item.CarImgs) {
      result[listingId].images.push(item.CarImgs)
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

export default {
  FormatResult,
  FormatResultInventory
}