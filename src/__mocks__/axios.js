const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: "Lui",
          last: "Mario"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/62.jpg"
        },
        login: {
          username: "purplepanda830"
        }
      }
    ]
  }
}

export default {
  get: jest.fn().mockResolvedValue(mockResponse)
}