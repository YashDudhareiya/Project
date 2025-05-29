export const login = async (email: string, password: string) => {
    const mockToken = "jwt-mock-token";
    localStorage.setItem("token", mockToken);
};

export const logout = () => {
    localStorage.removeItem("token");
};

export const isAuthenticated = () => {
    return !!localStorage.getItem("token");
};
