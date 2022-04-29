/*************************** GET methods ***************************/
// Render Dashboard
exports.renderTables = (req, res) => {
    res.render("vaccine/views/vaccine", {
      active: { Vaccine: true },
      page: "Thông tin Vaccine",
    });
};

