import httpService from "./http.service";

const endPoint = "todos";

const todosService = {
  get: async () =>
    await httpService.get(endPoint, {
      params: {
        _page: 1,
        _limit: 5,
      },
    }),
  create: async (payload) => await httpService.post(endPoint, payload),
};

export default todosService;
