const commonObj = {
    url: 'http://localhost:3000'
}

interface requestType {
    method?: string;
    url: string;
    baseURL?: string;
    headers?: object;
    data?: object;
  }
export const getListings = (listingId): requestType => ({
    ...commonObj,
    url: `/api/listing/get/${listingId}`,
})

export const updateListings = (listingId, data): requestType => ({
    ...commonObj,
    url: `/api/listing/update/${listingId}`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data
})

