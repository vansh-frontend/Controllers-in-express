const getUser = (req, res) => {
    res.json([
        {
            id: 1,
            name: "Vansh",
            role: "Developer"
        },
        {
            id: 2,
            name: "Rahul",
            role: "Designer"
        }
    ]);
};

module.exports = {
    getUser
};