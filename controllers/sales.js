const sales = require('../data/supplies');

async function getSales(){    
    return sales.getAllSales();
}

async function getById(id){    
    return sales.getById(id);
}

async function getByPurcheseMethod(method, pageSize, page){    
    return sales.getByPurcheseMethod(method, pageSize, page);
}

async function getByCustomerEmail(email){    
    return sales.getByCustomerEmail(email);
}

async function getByCustomerDissatisfied(pageSize, page){    
    return sales.getByCustomerDissatisfied(pageSize, page);
}

async function getByAmountByLocalization(localization){    
    const salesByLocalizations= await sales.getByLocalization(localization);
    let total = 0;
    salesByLocalizations.map((sale) => {
        sale.items.map((item)=> {
            total += item.price * item.quantity
        });
    });
    return total
}


module.exports = {getSales, getById, getByPurcheseMethod, getByCustomerEmail, getByCustomerDissatisfied, getByAmountByLocalization};