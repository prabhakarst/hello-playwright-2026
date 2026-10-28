export interface User  { username: string; password: string;
    
 }


const password = process.env.SAUCE_PASSWORD ?? 'secret_sauce';

export const users = {
  standard: { username: 'standard_user', password },
  locked: { username: 'locked_out_user', password },
  problem: { username: 'problem_user', password },
} satisfies Record<string, User>;

export type UserKey = keyof typeof users;

export function getUser(key: string): User {
  const user = users[key as UserKey];
  if (!user) {
    throw new Error(`Unknown user "${key}". Known users: ${Object.keys(users).join(', ')}`);
  }
  return user;
}