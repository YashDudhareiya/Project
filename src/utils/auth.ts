export const login = async (email: string, password: string) => {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            const mockToken = "jwt-mock-token";
            localStorage.setItem("token", mockToken);
            resolve();
        }, 2000);
    });
};

export const register = async (email: string, password: string) => {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            const mockToken = "jwt-mock-token";
            localStorage.setItem("token", mockToken);
            resolve();
        }, 2000);
    });
};

export const logout = () => {
    localStorage.removeItem("token");
};

export const isAuthenticated = () => {
    return !!localStorage.getItem("token");
};
