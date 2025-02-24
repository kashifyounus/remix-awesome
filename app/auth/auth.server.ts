import { createCookieSessionStorage } from "@remix-run/node";
import { Authenticator } from "remix-auth";
import { FormStrategy } from "remix-auth-form";

export const auth = new Authenticator<User>();
auth.use(
  new FormStrategy(async ({ form }) => {
    const email = form.get("email")?.toString();
    let user: User;
    const password = form.get("password")?.toString();
    if (!email || !password) throw new Error("Invalid email/password");
    if (email === "test@example.com" && password === "password123") {
      user = { id: 1, email: email };
    } else {
      throw new Error("Invalid email/password");
    }
    return user;
  }),
  "user-pass"
);

type User = {
  id: number;
  email: string;
};

// Create session storage
export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    secrets: [process.env.SESSION_SECRET || "default_secret"],
  },
});
