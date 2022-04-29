/*************************** GET methods ***************************/
// Render Dashboard
exports.renderTables = (req, res) => {
    res.render("orders/views/orders", { 
        active: { ordersInformation: true }, 
        page: "Đơn đặt hàng" 
    });
};

