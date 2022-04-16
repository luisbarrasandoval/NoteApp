import { createContext, useContext, useState } from "react";
import LoginService from "../services/login";

export interface User {
  id: string;
  name: string;
  token: string;
}

export interface Context {
  user: User | undefined;
  login: (email: string, password: string) => Promise<User | undefined>
  logout: () => Promise<Boolean>;
}

const UserContext = createContext<Context>({
  user: undefined,
  login: async () => undefined,
  logout: async () => true,
});

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | undefined>();

  const login = async (email: string, password: string) => {

    const { token, data } = await LoginService(email, password);

    setUser({
      id: data.id,
      name: data.username,
      token,
    });

    return user;
  };

  const logout = async () => {
    setUser(undefined);
    return true;
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  return useContext(UserContext);
}

export { useUser };
