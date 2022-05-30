export const mockFetch = (data) => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(data),
    })
  );
};

export const mockFetchRss = (data) => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      text: () => Promise.resolve(data),
    })
  );
};
