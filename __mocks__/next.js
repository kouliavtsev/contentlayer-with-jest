import * as nextRouter from "next/router";

export const mockRouter = (options) => {
  const router = nextRouter;

  router.useRouter = jest.fn();
  router.useRouter.mockImplementation(() => ({ asPath: "/", ...options }));
};
