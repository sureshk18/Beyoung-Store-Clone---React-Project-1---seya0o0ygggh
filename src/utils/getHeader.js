const projectID = 'f104bi07c490'
// const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ODE0MzQyNzFmNjFkNjE2YWMwYzNjYSIsImlhdCI6MTcxOTc0NzM5NywiZXhwIjoxNzUxMjgzMzk3fQ.rxq5Muz_hToParfTiTHOnayIqyA6BvWNrva6CTe1foo`


export const headerWithProjectIdOnly = () => {
    return {
        headers: {
            projectID: projectID,
        },
    };
};
export const getHeaderWithProjectIdAndBody = () => {
    return {
        headers: { projectId: projectID, "Content-Type": "application/json" },
    };
};

export const getAuthHeaderConfig = () => {
    const token = sessionStorage.getItem("authToken");
    if (token) {
        return {
            headers: {
                Authorization: `Bearer ${token}`,
                projectId: projectID,
            },
        };
    } else {
        return {
            error: "user not logged in"
        }
    }
}