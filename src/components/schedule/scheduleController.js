/*************************** GET methods ***************************/
// Render Dashboard
exports.renderTables = (req, res) => {
    res.render("schedule/views/schedule", { 
        active: { Schedule: true }, 
        page: "Quản lý lịch" 
    });
};

