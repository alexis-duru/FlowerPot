const displayCard = (data)=>{
    return `
            <li class="col-sm-3">
                <div class="card-wrapper">
                    <img src="${data.img_url}">
                </div>
                <h3>${data.name}</h3>
                <span><img src="./assets/images/flowerpot-product-rank.svg" class="product__rank">(32)</span>
                <p class="price">${data.price}€</p> 
                <a class="btn secondary-btn" href="produit.html">Consulter le produit</a>
            </li>
        `
  }
  
  let config = {
    locateFile: () => "../dist/sql-wasm.wasm",
  };
  initSqlJs(config).then(function (SQL) {
    const cards = document.querySelector('#ourproducts__products__list');
    const db = new SQL.Database();
    db.run("CREATE TABLE users (id, name, price, img_url);");
    db.run(
      `INSERT INTO users (id, name, price, img_url)
      VALUES 
      (1,'Datura','58', './assets/images/products/plant1.webp'),
      (2, 'Begonia', '94','./assets/images/products/plant2.webp'),
      (3, 'Aloe Vera','105','./assets/images/products/plant3.webp'),
      (4, 'Rose', '205', './assets/images/products/plant4.webp'),
      (5, 'Ficus', '58','./assets/images/products/plant5.webp'),
      (6, 'Cactus', '12', './assets/images/products/plant6.webp'),
      (7, 'Ficus', '47', './assets/images/products/plant7.webp'),
      (8, 'Lavande', '5', './assets/images/products/plant8.webp'),
      (9, 'Perodia', '49', './assets/images/products/plant9.webp'),
      (10, 'Pringlei', '42', './assets/images/products/plant10.webp'),
      (11, 'Banzai', '19', './assets/images/products/plant11.webp'),
      (12, 'Coussin de belle-mère', '19', './assets/images/products/plant12.webp'),
      (13, 'Agave', '205', './assets/images/products/plant13.webp'),
      (14, 'Tulipe', '205', './assets/images/products/plant14.webp'),
      (15, 'Ajania', '205', './assets/images/products/plant15.webp');
      `
      );
    const new_id = () =>{
      return db.exec('SELECT * FROM users')[0].values.length + 1
    }
  
    db.run(
      'INSERT INTO users (id, name, price, img_url) VALUES ($id, $name, $price, $img_url)',
      {
        $id: new_id(),
        $name:'FlowerPot',
        $price:'20 000 000 000',
        $img_url:'./assets/images/products/plant1.webp',
      });
  
    let getAll = db.prepare("SELECT * FROM users");
  
    while (getAll.step()) {
      const row = getAll.getAsObject();
      cards.insertAdjacentHTML('beforeend', displayCard(row));
    }
    //avoid memory leak
    getAll.free();
  });



//   HOME // 

const displayCardHome = (data)=>{
    return `
            <li class="col-sm-3">
                <div class="card-wrapper">
                    <img src="${data.img_url}">
                </div>
                <h3>${data.name}</h3>
                <span><img src="./assets/images/flowerpot-product-rank.svg" class="product__rank">(32)</span>
                <p class="price">${data.price}€</p> 
                <a class="btn secondary-btn" href="produit.html">Consulter le produit</a>
            </li>
        `
  }
  
  let configHome = {
    locateFile: () => "../dist/sql-wasm.wasm",
  };
  initSqlJs(config).then(function (SQL) {
    const cards = document.querySelector('#home__products__list');
    const db = new SQL.Database();
    db.run("CREATE TABLE users (id, name, price, img_url);");
    db.run(
      `INSERT INTO users (id, name, price, img_url)
      VALUES 
      (1,'Datura','58', './assets/images/products/plant1.webp'),
      (2, 'Begonia', '94','./assets/images/products/plant2.webp'),
      (3, 'Aloe Vera','105','./assets/images/products/plant3.webp'),
      (4, 'Rose', '205', './assets/images/products/plant4.webp'),
      (5, 'Ficus', '58','./assets/images/products/plant5.webp'),
      (6, 'Cactus', '12', './assets/images/products/plant6.webp'),
      (7, 'Ficus', '47', './assets/images/products/plant7.webp');
      `
      );
    const new_id = () =>{
      return db.exec('SELECT * FROM users')[0].values.length + 1
    }
  
    db.run(
      'INSERT INTO users (id, name, price, img_url) VALUES ($id, $name, $price, $img_url)',
      {
        $id: new_id(),
        $name:'FlowerPot',
        $price:'20 000 000 000',
        $img_url:'./assets/images/products/plant1.webp',
      });
  
    let getAll = db.prepare("SELECT * FROM users");
  
    while (getAll.step()) {
      const row = getAll.getAsObject();
      cards.insertAdjacentHTML('beforeend', displayCard(row));
    }
    //avoid memory leak
    getAll.free();
  });

