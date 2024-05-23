import {redirect} from "@sveltejs/kit";

export const load = async ({locals}) => {
  const user = locals.user;

  if (!user) {
    return redirect(303,'/');
  }

  return {user};
};

export const actions = {
  logout: async ({cookies}) => {
    cookies.delete("AuthorizationToken", { path: '/' });
    throw  redirect(302, "/");
  }
}