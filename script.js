// Product data for this browser-only shop. Prices and stock are for reference.
const products = [
  {
    "id": "fender-player-ii",
    "sku": "FEN-PII-001",
    "brand": "Fender",
    "name": "Player II Stratocaster RW Polar White",
    "kind": "Electric guitar",
    "category": "guitar",
    "description": "Versatile Stratocaster-style electric guitar with a comfortable modern neck and three single-coil pickups.",
    "priceEUR": 749,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?auto=format&fit=crop&w=750&q=85",
    "inStock": true,
    "rating": "4.9",
    "reviews": 124,
    "popular": 98,
    "tag": "BESTSELLER",
    "old": 829
  },
  {
    "id": "yamaha-hs8",
    "sku": "YAM-HS8-001",
    "brand": "Yamaha",
    "name": "HS8 Active Studio Monitor",
    "kind": "Studio monitor",
    "category": "studio",
    "description": "Powered nearfield monitor for detailed playback in a home or project studio.",
    "priceEUR": 329,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=750&q=85",
    "inStock": true,
    "rating": "4.8",
    "reviews": 86,
    "popular": 94,
    "tag": "BESTSELLER",
    "old": null
  },
  {
    "id": "shure-sm7b",
    "sku": "SHU-SM7B-001",
    "brand": "Shure",
    "name": "SM7B Dynamic Vocal Microphone",
    "kind": "Microphone",
    "category": "studio",
    "description": "Broadcast-style dynamic microphone suited to voice recording and spoken-word production.",
    "priceEUR": 389,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?auto=format&fit=crop&w=750&q=85",
    "inStock": true,
    "rating": "4.7",
    "reviews": 53,
    "popular": 90,
    "tag": "BESTSELLER",
    "old": null
  },
  {
    "id": "roland-fp30x",
    "sku": "ROL-FP30X-001",
    "brand": "Roland",
    "name": "FP-30X Digital Piano",
    "kind": "Digital piano",
    "category": "keys",
    "description": "Compact digital piano with weighted keys for home practice and performance.",
    "priceEUR": 649,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1593078166039-c987c1e2b7b0?auto=format&fit=crop&w=750&q=85",
    "inStock": false,
    "rating": "4.8",
    "reviews": 41,
    "popular": 86,
    "tag": "BESTSELLER",
    "old": null
  },
  {
    "id": "gibson-les-paul-studio",
    "sku": "GIB-LPS-001",
    "brand": "Gibson",
    "name": "Les Paul Studio Electric Guitar",
    "kind": "Electric guitar",
    "category": "guitar",
    "description": "Single-cut electric guitar design with a solid body and dual humbucking pickups.",
    "priceEUR": 1379,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1550291652-6ea9114a47b1?auto=format&fit=crop&w=750&q=85",
    "inStock": true,
    "rating": "4.9",
    "reviews": 28,
    "popular": 82,
    "tag": "",
    "old": null
  },
  {
    "id": "yamaha-pacifica-112v",
    "sku": "YAM-PAC112-001",
    "brand": "Yamaha",
    "name": "Pacifica 112V Electric Guitar",
    "kind": "Electric guitar",
    "category": "guitar",
    "description": "HSS pickup configuration makes this electric guitar a flexible option for varied styles.",
    "priceEUR": 319,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=750&q=85",
    "inStock": true,
    "rating": "4.8",
    "reviews": 67,
    "popular": 78,
    "tag": "",
    "old": null
  },
  {
    "id": "ibanez-azes40",
    "sku": "IBA-AZES40-001",
    "brand": "Ibanez",
    "name": "AZES40 Electric Guitar",
    "kind": "Electric guitar",
    "category": "guitar",
    "description": "Accessible double-cut electric guitar designed for comfortable everyday playing.",
    "priceEUR": 369,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?auto=format&fit=crop&w=750&q=85",
    "inStock": true,
    "rating": "4.7",
    "reviews": 19,
    "popular": 74,
    "tag": "",
    "old": null
  },
  {
    "id": "fender-mustang-lt25",
    "sku": "FEN-MLT25-001",
    "brand": "Fender",
    "name": "Mustang LT25 Combo Amplifier",
    "kind": "Combo amplifier",
    "category": "guitar",
    "description": "Compact guitar combo amplifier for home practice and small-room recording.",
    "priceEUR": 179,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1581378576936-9b10bb143de8?auto=format&fit=crop&w=750&q=85",
    "inStock": false,
    "rating": "4.8",
    "reviews": 32,
    "popular": 70,
    "tag": "",
    "old": null
  },
  {
    "id": "yamaha-thr10ii",
    "sku": "YAM-THR10II-001",
    "brand": "Yamaha",
    "name": "THR10II Desktop Amplifier",
    "kind": "Combo amplifier",
    "category": "guitar",
    "description": "Desktop guitar amplifier built for quiet practice and direct recording workflows.",
    "priceEUR": 299,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1516575869513-3f418f8902ca?auto=format&fit=crop&w=750&q=85",
    "inStock": true,
    "rating": "4.9",
    "reviews": 25,
    "popular": 66,
    "tag": "",
    "old": null
  },
  {
    "id": "ibanez-tube-screamer-mini",
    "sku": "IBA-TSM-001",
    "brand": "Ibanez",
    "name": "Tube Screamer Mini Overdrive",
    "kind": "Effects pedal",
    "category": "guitar",
    "description": "Compact overdrive pedal inspired by a classic mid-focused guitar effect.",
    "priceEUR": 79,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1558098329-a11cff621064?auto=format&fit=crop&w=750&q=85",
    "inStock": true,
    "rating": "4.8",
    "reviews": 44,
    "popular": 62,
    "tag": "",
    "old": null
  },
  {
    "id": "fender-marine-layer",
    "sku": "FEN-MLR-001",
    "brand": "Fender",
    "name": "Marine Layer Reverb Pedal",
    "kind": "Effects pedal",
    "category": "guitar",
    "description": "Guitar reverb pedal for adding room, plate, and ambient-style depth.",
    "priceEUR": 139,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1594435911283-7c2e57f9b2a9?auto=format&fit=crop&w=750&q=85",
    "inStock": true,
    "rating": "4.7",
    "reviews": 17,
    "popular": 58,
    "tag": "",
    "old": null
  }
];
const homeProductIds = products.slice(0,4).map(product => product.id);
const catalogProductIds = products.map(product => product.id);
const byId = id => products.find(product => product.id === id);
const escapeHTML = value => String(value ?? "").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;");
const currencyRates = { EUR: 1, USD: 1.08, UAH: 44 };
let selectedCurrency = 'EUR';
try { selectedCurrency = localStorage.getItem('currency') || 'EUR'; } catch { /* Use the default currency when browser storage is blocked. */ }
if (!currencyRates[selectedCurrency]) selectedCurrency = 'EUR';
let selectedLanguage = 'en';
try { selectedLanguage = localStorage.getItem('language') || 'en'; } catch { /* Use the default language when browser storage is blocked. */ }
if (!['en', 'ru', 'uk'].includes(selectedLanguage)) selectedLanguage = 'en';
// State management: keep storage reads resilient to missing or invalid data.
const readStore = (key, fallback) => {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
};
const writeStore = (key, value) => localStorage.setItem(key, JSON.stringify(value));
// Remove abandoned password hashes from the earlier prototype.
try { localStorage.removeItem('users'); } catch { /* Storage can be unavailable in private browser modes. */ }
const money = (value, currency = selectedCurrency) => new Intl.NumberFormat(({en:'en-IE',ru:'ru-RU',uk:'uk-UA'})[selectedLanguage], {
  style: 'currency',
  currency,
  currencyDisplay: 'narrowSymbol',
  maximumFractionDigits: 0
}).format(value * (currency === 'EUR' ? 1 : currencyRates[currency] || 1));
const toast = document.querySelector('.toast');
function showToast(message) {
  if (!toast || !window.bootstrap) return;
  toast.querySelector('.toast-body').textContent = message;
  bootstrap.Toast.getOrCreateInstance(toast, { delay: 2300 }).show();
}

function getCart() {
  const cart = readStore('cart', []);
  return Array.isArray(cart) ? cart.filter(line => byId(line?.id) && Number.isInteger(line.quantity) && line.quantity > 0) : [];
}

function getWishlist() {
  const wishlist = readStore('wishlist', []);
  return Array.isArray(wishlist) ? [...new Set(wishlist.filter(id => byId(id)))] : [];
}

// Cart handlers and shared header state.
function updateHeaderCounters() {
  const cart = getCart();
  const count = cart.reduce((sum, line) => sum + line.quantity, 0);
  const totalEUR = cart.reduce((sum, line) => sum + (byId(line.id)?.priceEUR || 0) * line.quantity, 0);
  document.querySelectorAll('.cart-count').forEach(node => {
    node.textContent = count;
  });
  document.querySelectorAll('.cart-total').forEach(node => {
    node.textContent = money(totalEUR);
  });
  document.querySelectorAll('.wishlist-count').forEach(node => {
    node.textContent = getWishlist().length;
  });
  document.querySelectorAll('.drawer-count').forEach(node => {
    node.textContent = count ? `(${count})` : '';
  });
  document.querySelectorAll('.drawer-total').forEach(node => {
    node.textContent = money(totalEUR);
  });

  const currentUser = readStore('user', null);
  document.querySelectorAll('.auth-trigger').forEach(trigger => {
    const oldLogout = trigger.parentElement.querySelector('.logout-trigger');
    if (oldLogout) oldLogout.remove();
    const label = trigger.querySelector('.account-label');
    if (!label) return;
    label.textContent = currentUser ? currentUser.name : 'Guest';
    if (currentUser) {
      trigger.removeAttribute('data-bs-toggle');
      trigger.removeAttribute('data-bs-target');
      const logout = document.createElement('button');
      logout.type = 'button';
      logout.className = 'logout-trigger';
      logout.textContent = 'Sign out';
      logout.addEventListener('click', () => {
        localStorage.removeItem('user');
        updateHeaderCounters();
        showToast('You have signed out');
      });
      trigger.insertAdjacentElement('afterend', logout);
    } else {
      trigger.setAttribute('data-bs-toggle', 'modal');
      trigger.setAttribute('data-bs-target', '#authModal');
    }
  });
  renderCart();
}

function toggleWishlist(id) {
  const wishlist = getWishlist();
  const exists = wishlist.includes(id);
  const next = exists ? wishlist.filter(item => item !== id) : [...wishlist, id];
  writeStore('wishlist', next);
  updateHeaderCounters();
  renderWishlist();
  applyLanguage();
  return !exists;
}

function addToCart(id, quantity = 1) {
  const product = byId(id);
  if (!product || !product.inStock) return;
  const cart = getCart();
  const line = cart.find(item => item.id === id);
  if (line) line.quantity += quantity;
  else cart.push({ id, quantity: Math.max(1, quantity) });
  writeStore('cart', cart.filter(item => item.quantity > 0));
  updateHeaderCounters();
  const cartDrawer = document.querySelector('#cartDrawer');
  if (cartDrawer && window.bootstrap) bootstrap.Offcanvas.getOrCreateInstance(cartDrawer).show();
  else showToast(`${byId(id).name} added to your basket`);
}

function changeCartQuantity(id, delta) {
  const product = byId(id);
  const current = getCart().find(line => line.id === id)?.quantity || 0;
  if (delta > 0 && !product?.inStock) return;
  const cart = getCart()
    .map(line => line.id === id ? { ...line, quantity: line.quantity + delta } : line)
    .filter(line => line.quantity > 0);
  writeStore('cart', cart);
  updateHeaderCounters();
}

function removeFromCart(id) {
  writeStore('cart', getCart().filter(line => line.id !== id));
  updateHeaderCounters();
}

function renderCart() {
  const container = document.querySelector('.cart-items');
  if (!container) return;
  const cart = getCart();
  if (!cart.length) {
    container.innerHTML = '<div class="cart-empty"><span>♧</span><h3>Your basket is empty</h3><p>Find the gear that gets you inspired.</p><a class="button primary" href="catalog.html">Explore the catalog <span>→</span></a></div>';
  } else {
    container.innerHTML = cart.map(line => {
      const product = byId(line.id);
      if (!product) return '';
      return `<article class="cart-line"><img src="${escapeHTML(product.image)}" alt=""><div class="cart-line-info"><strong>${escapeHTML(product.name)}</strong><small>${escapeHTML(product.brand)}</small><div class="quantity-control"><button data-cart-action="minus" data-id="${escapeHTML(product.id)}" aria-label="Decrease quantity">−</button><span>${line.quantity}</span><button data-cart-action="plus" data-id="${escapeHTML(product.id)}" aria-label="Increase quantity" ${!product.inStock?'disabled':''}>+</button></div></div><div class="cart-line-price"><strong>${money(product.priceEUR * line.quantity)}</strong><button data-cart-action="remove" data-id="${escapeHTML(product.id)}">Remove</button></div></article>`;
    }).join('');
  }
  document.querySelectorAll('.checkout-link').forEach(link => {
    link.classList.toggle('disabled', cart.length === 0);
  });
  container.querySelectorAll('[data-cart-action]').forEach(button => button.addEventListener('click', () => {
    if (button.dataset.cartAction === 'plus') changeCartQuantity(button.dataset.id, 1);
    if (button.dataset.cartAction === 'minus') changeCartQuantity(button.dataset.id, -1);
    if (button.dataset.cartAction === 'remove') removeFromCart(button.dataset.id);
  }));
  renderCheckout();
}

function renderCheckout() {
  const container = document.querySelector('.checkout-items');
  if (!container) return;
  const cart = getCart();
  const totalEUR = cart.reduce((sum, line) => sum + (byId(line.id)?.priceEUR || 0) * line.quantity, 0);
  container.innerHTML = cart.length ? cart.map(line => {
    const product = byId(line.id);
    return `<div class="checkout-item"><img src="${escapeHTML(product.image)}" alt=""><div><strong>${escapeHTML(product.name)}</strong><small>Qty ${line.quantity}</small></div><b>${money(product.priceEUR * line.quantity)}</b></div>`;
  }).join('') : '<div class="checkout-empty">Your basket is empty.<br><a href="catalog.html">Browse the catalog →</a></div>';
  const shipping = totalEUR === 0 || totalEUR >= 150 ? 0 : 8.99;
  document.querySelector('.checkout-total-eur').textContent = money(totalEUR);
  document.querySelector('.checkout-shipping').textContent = money(shipping);
  document.querySelector('.checkout-total-both').textContent = money(totalEUR + shipping);
  const placeOrder = document.querySelector('.place-order');
  if (placeOrder) placeOrder.disabled = cart.length === 0;
}

function renderOrderHistory() {
  const container = document.querySelector('.order-history-list');
  if (!container) return;
  const orders = readStore('orders', []);
  container.replaceChildren();
  if (!Array.isArray(orders) || !orders.length) {
    container.textContent = 'No orders yet.';
    return;
  }
  [...orders].reverse().forEach(order => {
    const item = document.createElement('p');
    const date = new Date(order.placedAt);
    const total = Number.isFinite(order.total) ? order.total : Array.isArray(order.items) ? order.items.reduce((sum, line) => sum + (byId(line.id)?.priceEUR || 0) * line.quantity, 0) : 0;
    item.textContent = `${order.id} · ${Number.isNaN(date.valueOf()) ? 'Date unavailable' : date.toLocaleDateString()} · ${money(total)}`;
    container.append(item);
  });
}

function renderProductCard(product, {catalog = false} = {}) {
  const inWishlist = getWishlist().includes(product.id);
  const columnClass = catalog ? 'col-12 col-sm-6 col-lg-4' : 'col-12 col-sm-6 col-lg-3';
  return `<div class="${columnClass}"><article class="product-card"><div class="product-image" style="background-image:url('${product.image}')">${product.tag ? `<span class="tag">${product.tag}</span>` : catalog ? `<span class="tag">${product.kind.toUpperCase()}</span>` : ''}<button class="favorite ${inWishlist ? 'selected' : ''}" data-wishlist-id="${product.id}" aria-label="${inWishlist ? 'Remove' : 'Add'} ${product.name} ${inWishlist ? 'from' : 'to'} wishlist" aria-pressed="${inWishlist}">${inWishlist ? '♥' : '♡'}</button></div><div class="product-info"><div class="brand">${product.brand}</div><h3><a href="catalog.html?product=${encodeURIComponent(product.id)}">${product.name}</a></h3><div class="rating" aria-label="Rated ${product.rating} out of 5">★★★★★ <span>${product.rating} (${product.reviews})</span></div><div class="price">${product.old ? `<del>${money(product.old)}</del> ` : ''}${money(product.priceEUR)}</div><p class="stock ${product.inStock ? '' : 'out-of-stock'}">${product.inStock ? 'In stock' : 'Currently unavailable'}</p><button class="btn btn-primary add-cart" data-add-id="${product.id}" ${product.inStock ? '' : 'disabled'}>Add to basket</button></div></article></div>`;
}

function bindProductActions(container) {
  container.querySelectorAll('[data-wishlist-id]').forEach(button => button.addEventListener('click', () => {
    const saved = toggleWishlist(button.dataset.wishlistId);
    button.classList.toggle('selected', saved);
    button.setAttribute('aria-pressed', String(saved));
    button.textContent = saved ? '♥' : '♡';
    showToast(saved ? 'Added to your wishlist' : 'Removed from your wishlist');
  }));
  container.querySelectorAll('[data-add-id]').forEach(button => button.addEventListener('click', () => addToCart(button.dataset.addId)));
}

const homeGrid = document.querySelector('#product-grid');
if (homeGrid) {
  function renderHomeProducts(filter = 'all') {
    const visible = homeProductIds.map(byId).filter(product => filter === 'all' || product.category === filter);
    homeGrid.innerHTML = visible.map(product => renderProductCard(product)).join('');
    bindProductActions(homeGrid);
  }
  renderHomeProducts();
  document.querySelectorAll('.filters button').forEach(button => button.addEventListener('click', () => {
    document.querySelector('.filters .active')?.classList.remove('active'); button.classList.add('active'); renderHomeProducts(button.dataset.filter); applyLanguage();
  }));
}

const catalogGrid = document.querySelector('#catalog-grid');
if (catalogGrid) {
  const priceRange = document.querySelector('#price-range'); const priceValue = document.querySelector('#price-value');
  const resultCount = document.querySelector('#result-count'); const sortSelect = document.querySelector('#catalog-sort');
  const brandChecks = [...document.querySelectorAll('.catalog-filter')]; const categoryChecks = [...document.querySelectorAll('.subcategory-filter')];
  const stockCheck = document.querySelector('#in-stock');
  const params = new URLSearchParams(location.search);
  let searchQuery = (params.get('q') || '').trim().toLowerCase();
  let selectedCategory = params.get('category') || '';
  const rate = currencyRates[selectedCurrency];
  priceRange.max = String(Math.round(2000 * rate));
  priceRange.step = selectedCurrency === 'UAH' ? '1000' : '25';
  priceRange.value = priceRange.max;
  document.querySelector('.price-labels > span').textContent = money(0);
  function renderCatalog() {
    const brands = brandChecks.filter(input => input.checked).map(input => input.value.toLowerCase());
    const kinds = categoryChecks.filter(input => input.checked).map(input => input.value);
    const ceiling = Number(priceRange.value) / rate;
    const visible = catalogProductIds.map(byId).filter(product => product && product.priceEUR <= ceiling && (!selectedCategory || product.category === selectedCategory) && (!brands.length || brands.includes(product.brand.toLowerCase())) && (!kinds.length || kinds.includes(product.kind)) && (!searchQuery || `${product.brand} ${product.name} ${product.kind}`.toLowerCase().includes(searchQuery)) && (!stockCheck.checked || product.inStock));
  const sorters = {
    'price-asc': (firstProduct, secondProduct) => firstProduct.priceEUR - secondProduct.priceEUR,
    'price-desc': (firstProduct, secondProduct) => secondProduct.priceEUR - firstProduct.priceEUR,
    popular: (firstProduct, secondProduct) => secondProduct.popular - firstProduct.popular
  };
    visible.sort(sorters[sortSelect.value] || sorters.popular);
    resultCount.textContent = `${visible.length} products`;
    catalogGrid.innerHTML = visible.length ? visible.map(product => renderProductCard(product,{catalog:true})).join('') : '<div class="col-12"><p class="catalog-empty">No products match these filters. Try changing your selection.</p></div>';
    bindProductActions(catalogGrid);
  }
  [priceRange, sortSelect, stockCheck, ...brandChecks, ...categoryChecks].forEach(control => {
    control.addEventListener('input', () => { renderCatalog(); applyLanguage(); });
  });
  priceRange.addEventListener('input', () => { priceValue.textContent = money(Number(priceRange.value) / rate); });
  document.querySelector('#reset-filters').addEventListener('click', () => {
    priceRange.value = priceRange.max;
    priceValue.textContent = money(Number(priceRange.max) / rate);
    brandChecks.forEach(item => item.checked = false);
    categoryChecks.forEach(item => item.checked = false);
    stockCheck.checked = false;
    sortSelect.value = 'popular';
    searchQuery = '';
    selectedCategory = '';
    document.querySelector('#search').value = '';
    document.querySelector('#product-detail').hidden = true;
    document.querySelector('.catalog-intro h1').textContent = 'Shop all instruments & gear';
    document.querySelector('.catalog-intro > p:last-child').textContent = 'Explore instruments, studio essentials and accessories.';
    document.querySelector('.breadcrumbs span:last-child').textContent = 'All gear';
    history.replaceState(null, '', location.pathname);
    renderCatalog();
    applyLanguage();
  });
  if (document.querySelector('#search')) document.querySelector('#search').value = params.get('q') || '';
  if (searchQuery) document.querySelector('.catalog-intro > p:last-child').textContent = `Search results for “${params.get('q')}”.`;
  const categoryName = { guitar: 'Guitars & gear', studio: 'Studio & recording', keys: 'Keyboards & pianos', drums:'Drums', accessories:'Accessories' }[selectedCategory];
  if (categoryName) {
    document.querySelector('.catalog-intro h1').textContent = categoryName;
    document.querySelector('.catalog-intro > p:last-child').textContent = `Browse ${categoryName.toLowerCase()}.`;
    document.querySelector('.breadcrumbs span:last-child').textContent = categoryName;
  }
  priceValue.textContent = money(Number(priceRange.value) / rate);
  renderCatalog();
  let detailProduct = byId(params.get('product'));
  function renderProductDetail(product) {
    if (!product) return;
    detailProduct = product;
    const panel = document.querySelector('#product-detail');
    document.querySelector('.catalog-intro h1').textContent = product.name;
    document.querySelector('.breadcrumbs span:last-child').textContent = product.name;
    panel.hidden = false;
    panel.innerHTML = `<article class="product-detail-card"><img src="${product.image}" alt="${product.name}"><div><p class="eyebrow">${product.brand} · ${product.kind}</p><h2>${product.name}</h2><p class="price">${money(product.priceEUR)}</p><p class="stock ${product.inStock ? '' : 'out-of-stock'}">${product.inStock ? 'In stock' : 'Currently unavailable'}</p><p>Product specifications, reviews and availability should be confirmed with the retailer.</p><div class="d-flex gap-2"><button class="btn btn-primary add-cart" data-add-id="${product.id}" ${product.inStock ? '' : 'disabled'}>Add to basket</button><button class="btn btn-outline-dark" data-wishlist-id="${product.id}" aria-pressed="${getWishlist().includes(product.id)}">${getWishlist().includes(product.id) ? 'Saved to wishlist' : 'Save to wishlist'}</button></div></div></article>`;
    bindProductActions(panel);
  }
  if (detailProduct) {
    renderProductDetail(detailProduct);
  }
}

document.querySelectorAll('.search').forEach(form => form.addEventListener('submit', event => {
  event.preventDefault();
  const query = form.querySelector('input[type="search"]')?.value.trim() || '';
  location.href = query ? `catalog.html?q=${encodeURIComponent(query)}` : 'catalog.html';
}));

const wishlistGrid = document.querySelector('#wishlist-grid');
function renderWishlist() {
  if (!wishlistGrid) return;
  const saved = getWishlist().map(byId).filter(Boolean);
  document.querySelector('.wishlist-page-count').textContent = saved.length ? `(${saved.length})` : '';
  document.querySelector('.wishlist-empty').hidden = saved.length > 0; wishlistGrid.hidden = saved.length === 0;
  wishlistGrid.innerHTML = saved.map(product => renderProductCard(product)).join('');
  bindProductActions(wishlistGrid);
}

const drawer = document.querySelector('#cartDrawer');
const authModal = document.querySelector('#authModal');
function closePanels() {
  if (!window.bootstrap) return;
  if (drawer) bootstrap.Offcanvas.getInstance(drawer)?.hide();
  if (authModal) bootstrap.Modal.getInstance(authModal)?.hide();
}
drawer?.addEventListener('show.bs.offcanvas', renderCart);
document.querySelector('#register-form')?.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(form);
  const email = String(formData.get('email')).trim().toLowerCase();
  const message = form.querySelector('.auth-message');

  try {
    const user = { name: String(formData.get('name')).trim(), email };
    writeStore('user', { name: user.name, email: user.email });
    updateHeaderCounters();
    closePanels();
    showToast(`Welcome to Amplify, ${user.name}!`);
    form.reset();
  } catch {
    message.textContent = 'This browser could not save your profile.';
  }
});

// Newsletter and help actions.
document.querySelector('#newsletter-form')?.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  form.classList.add('success');
  form.querySelector('.form-message').textContent = 'Newsletter sign-up is not connected yet.';
  form.reset();
});
document.querySelector('.help-button')?.addEventListener('click', () => {
  showToast('Need a hand? Our music experts are here to help.');
});

// Checkout and cross-tab state updates.
document.querySelector('#checkout-form')?.addEventListener('submit', event => {
  event.preventDefault(); const form = event.currentTarget; const message = form.querySelector('.checkout-message');
  if (!getCart().length) { message.textContent = 'Your basket is empty. Add something before placing an order.'; return; }
  const orders = readStore('orders', []), orderId = `AMP-${Date.now()}`, savedOrders = Array.isArray(orders) ? orders : [];
  const subtotal = getCart().reduce((sum, line) => sum + (byId(line.id)?.priceEUR || 0) * line.quantity, 0), shipping = subtotal === 0 || subtotal >= 150 ? 0 : 8.99;
  savedOrders.push({ id: orderId, placedAt: new Date().toISOString(), email: String(new FormData(form).get('email') || ''), total: subtotal + shipping, items: getCart() });
  writeStore('orders', savedOrders); writeStore('cart', []); updateHeaderCounters(); form.hidden = true;
  message.textContent = `Order ${orderId} saved in this browser. No payment was taken.`;
  document.querySelector('.checkout-summary h2').textContent = 'Thank you for your order'; renderOrderHistory();
});

document.querySelectorAll('.checkout-link').forEach(link => link.addEventListener('click', event => {
  if (!getCart().length) {
    event.preventDefault();
    showToast('Your basket is empty');
  }
}));
window.addEventListener('storage', event => {
  if (['cart', 'wishlist', 'user', 'orders'].includes(event.key)) {
    updateHeaderCounters();
    renderWishlist();
    renderOrderHistory();
    applyLanguage();
  }
});

const languageCopy = {
  ru: {
    search: 'Поиск', searchPlaceholder: 'Поиск товаров, брендов, моделей и SKU...', profile: 'Профиль', wishlist: 'Избранное', basket: 'Корзина', expert: 'Помощь эксперта', track: 'Мои заказы', continue: 'Продолжить покупки',
    guitars: 'Гитары и усилители', studio: 'Студия и запись', keys: 'Клавишные', allGear: 'Все товары',
    heroEyebrow: 'AMPLIFY · МУЗЫКАЛЬНОЕ ОБОРУДОВАНИЕ', heroCopy: 'Инструменты и студийное оборудование для вашей музыки.',
    catalog: 'Перейти в каталог', catalogHeading: 'Инструменты и студийное оборудование', categories: 'Категории', popular: 'Популярные категории', browse: 'Все категории',
    featured: 'Рекомендуем', add: 'В корзину', stock: 'В наличии', outOfStock: 'Временно нет в наличии',
    newsletter: 'Новости, новые товары и полезные подборки.', checkoutLabel: 'ОФОРМЛЕНИЕ ЗАКАЗА', checkout: 'Оформление заказа', saveOrder: 'Подтвердить заказ'
  },
  uk: {
    search: 'Пошук', searchPlaceholder: 'Пошук товарів, брендів, моделей і SKU...', profile: 'Профіль', wishlist: 'Обране', basket: 'Кошик', expert: 'Поради фахівця', track: 'Мої замовлення', continue: 'Продовжити покупки',
    guitars: 'Гітари та підсилювачі', studio: 'Студія та запис', keys: 'Клавішні', allGear: 'Усі товари',
    heroEyebrow: 'AMPLIFY · МУЗИЧНЕ ОБЛАДНАННЯ', heroCopy: 'Інструменти та студійне обладнання для вашої музики.',
    catalog: 'До каталогу', catalogHeading: 'Інструменти та студійне обладнання', categories: 'Категорії', popular: 'Популярні категорії', browse: 'Усі категорії',
    featured: 'Рекомендуємо', add: 'До кошика', stock: 'Є в наявності', outOfStock: 'Тимчасово немає',
    newsletter: 'Новини, нові товари та корисні добірки.', checkoutLabel: 'ОФОРМЛЕННЯ ЗАМОВЛЕННЯ', checkout: 'Оформлення замовлення', saveOrder: 'Підтвердити замовлення'
  }
};
// Swaps in translations (translations.js) for the information pages, newsletter block and footer.
function applyPageCopy() {
  const dict = window.pageCopy?.[selectedLanguage];
  if (!dict) return;
  document.querySelectorAll('footer *, .newsletter *, .info-main *').forEach(element => {
    if (!element.isConnected) return;
    const translated = dict[element.innerHTML.trim()];
    if (translated !== undefined) element.innerHTML = translated;
  });
  document.querySelectorAll('footer [placeholder], .newsletter [placeholder]').forEach(input => {
    const translated = dict[input.getAttribute('placeholder')];
    if (translated !== undefined) input.setAttribute('placeholder', translated);
  });
  if (dict[document.title] !== undefined) document.title = dict[document.title];
}
function applyLanguage() {
  document.documentElement.lang = selectedLanguage;
  const copy = languageCopy[selectedLanguage];
  document.querySelectorAll('#language-select').forEach(select => { select.value = selectedLanguage; });
  document.querySelectorAll('#currency-select').forEach(select => { select.value = selectedCurrency; });
  if (!copy) return;
  document.querySelectorAll('.search button').forEach(node => { node.textContent = copy.search; });
  document.querySelectorAll('.search input').forEach(node => { node.placeholder = copy.searchPlaceholder; });
  document.querySelectorAll('.account-label').forEach(node => { if (!readStore('user', null)) node.textContent = copy.profile; });
  document.querySelectorAll('.wishlist-link strong').forEach(node => { if (node.firstChild) node.firstChild.textContent = `${copy.wishlist} `; });
  document.querySelectorAll('.topline a').forEach(node => { if (node.href.includes('order-history')) node.textContent = copy.track; else if (node.href.includes('#support')) node.textContent = copy.expert; else node.textContent = copy.continue; });
  document.querySelectorAll('.category-nav a').forEach(node => {
    if (node.href.includes('category=guitar')) node.textContent = copy.guitars;
    if (node.href.includes('category=studio')) node.textContent = copy.studio;
    if (node.href.includes('category=keys')) node.textContent = copy.keys;
    if (node.href.endsWith('catalog.html')) node.textContent = copy.allGear;
  });
  const heroEyebrow = document.querySelector('.hero .eyebrow'); if (heroEyebrow) heroEyebrow.textContent = copy.heroEyebrow;
  const heroCopy = document.querySelector('.hero-copy'); if (heroCopy) heroCopy.textContent = copy.heroCopy;
  const heroButton = document.querySelector('.hero .btn-primary'); if (heroButton) heroButton.textContent = copy.catalog;
  const categoryHeading = document.querySelector('#categories h2'); if (categoryHeading) categoryHeading.textContent = copy.popular;
  const categoryLink = document.querySelector('#categories .text-link'); if (categoryLink) categoryLink.textContent = copy.browse;
  document.querySelectorAll('.category-card').forEach(card => { const label = card.querySelector('span'); if (!label) return; if (card.classList.contains('guitar')) label.firstChild.textContent = `${copy.guitars} `; if (card.classList.contains('studio')) label.firstChild.textContent = `${copy.studio} `; if (card.classList.contains('synth')) label.firstChild.textContent = `${copy.keys} `; });
  const featured = document.querySelector('#bestsellers h2'); if (featured) featured.textContent = copy.featured;
  document.querySelectorAll('.add-cart').forEach(button => { if (!button.disabled) button.textContent = copy.add; });
  const checkoutTitle = document.querySelector('.checkout-form-panel h1'); if (checkoutTitle) checkoutTitle.textContent = copy.checkout;
  const checkoutEyebrow = document.querySelector('.checkout-form-panel .eyebrow'); if (checkoutEyebrow) checkoutEyebrow.textContent = copy.checkoutLabel;
  const orderButton = document.querySelector('.place-order'); if (orderButton) orderButton.textContent = copy.saveOrder;
  const catalogHeading = document.querySelector('.catalog-intro h1');
  const catalogParams = new URLSearchParams(location.search);
  if (catalogHeading && !catalogParams.has('product')) {
    const categoryTitles = { guitar: copy.guitars, studio: copy.studio, keys: copy.keys };
    catalogHeading.textContent = categoryTitles[catalogParams.get('category')] || copy.catalogHeading;
  }
  const wishlistHeading = document.querySelector('.wishlist-content h1'); if (wishlistHeading) wishlistHeading.firstChild.textContent = `${copy.wishlist} `;
  const checkoutSummary = document.querySelector('.checkout-summary h2'); if (checkoutSummary) checkoutSummary.textContent = document.querySelector('#checkout-form')?.hidden ? 'Thank you for your order' : copy.checkout;
  applyPageCopy();
}
document.querySelectorAll('#language-select').forEach(select => select.addEventListener('change', () => {
  selectedLanguage = select.value;
  try { localStorage.setItem('language', selectedLanguage); } catch { /* Keep the choice for this page view. */ }
  location.reload();
}));
document.querySelectorAll('#currency-select').forEach(select => select.addEventListener('change', () => {
  selectedCurrency = select.value;
  try { localStorage.setItem('currency', selectedCurrency); } catch { /* Keep the choice for this page view. */ }
  location.reload();
}));
updateHeaderCounters();
renderWishlist();
renderCheckout();
renderOrderHistory();
applyLanguage();
