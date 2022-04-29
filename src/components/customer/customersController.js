/*************************** GET methods ***************************/
// Render Dashboard
exports.renderTables = (req, res) => {
    res.render("customer/views/customers", {
      active: { customerInformation: true },
      page: "Hồ sơ khách hàng",
    });
};

