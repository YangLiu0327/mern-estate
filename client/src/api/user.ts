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
export const userSignUp = (data): requestType => ({
    ...commonObj,
    method: 'POST',
    url: "/api/auth/signup",
    headers: {
        "Content-Type": "application/json",
    },
    data,
})

export const userSignIn = (data): requestType => ({
    ...commonObj,
    method: 'POST',
    url: "/api/auth/signin",
    headers: {
        "Content-Type": "application/json",
    },
    data,
})

