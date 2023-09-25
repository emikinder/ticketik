export const formatDate = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
};
