class ProductManager {
  static id = 0;
  static products = [];

  constructor(title, description, price, thumbnail, code, stock) {
    this.id = ProductManager.id++;
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
  }

  static addProduct(title, description, price, thumbnail, code, stock) {
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.error("Error: All fields are mandatory");
      return;
    }

    const productExist = this.products.some((p) => p.code === code);
    if (productExist) {
      console.error("Error: Code repeated");
      return;
    }

    let product = {
      id: ProductManager.id++,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    ProductManager.products.push(product);
    console.log("Product added:", product);
  }

  static getProducts() {
    console.log("All this.products: ", this.products);
    return
  }

  static getProductById(id) {


    const product = this.products.filter((p) => p.id === id);

    
    if (product.length === 0) {
      console.error(`The product with id ${id} was not found`);
      return 
    }
    console.log(`The product with the id ${id} that you are looking for is:`, product);
    return
  }
}

ProductManager.addProduct(
  "guitar",
  "stratocaster",
  3000,
  "www.fender.com",
  "strato001",
  10
);

ProductManager.addProduct(
  "guitar",
  "jaguar",
  3200,
  "www.fender.com",
  "jaguar001",
  22
);

ProductManager.addProduct(
  "guitar",
  "lespaul",
  4000,
  "www.gibson.com",
  "lespaul001",
  60
);

ProductManager.getProducts();

// ProductManager.getProductById(4);
