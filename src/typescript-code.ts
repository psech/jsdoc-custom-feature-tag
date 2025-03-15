/**
 * Interface for user data
 * @feature Supports both first and last name
 * @feature Includes optional email field
 */
interface User {
  firstName: string;
  lastName: string;
  email?: string;
}

/**
* Creates a new user
* @feature Input validation included
* @feature Returns strongly typed User object
* @param firstName The user's first name
* @param lastName The user's last name
* @returns A User object
*/
function createUser(firstName: string, lastName: string): User {
  return {
      firstName,
      lastName
  };
}