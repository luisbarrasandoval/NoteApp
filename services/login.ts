export default async function LoginService(email: string, password: string) {
  const response = await fetch("http://192.168.18.75:5000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "My App", // incluir informacion del sistema
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (response.status !== 200) {
    throw new Error("Error al iniciar sesion");
  }

  const data = await response.json();
  const token = response.headers.get("Authorization") as string;

  return { token, data };
}
