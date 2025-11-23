export function usernameValidator(username: string): boolean {
    if (username.length < 3 || username.length > 20) {
        return false;
    }

    if (username.includes(' ')) {
        return false;
    }

    return true;
}