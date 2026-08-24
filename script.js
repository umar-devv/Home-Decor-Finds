/**
 * HomeDecorFinds - Vanilla JavaScript Engine
 * Pure HTML/CSS/JS - Zero dependencies, zero build step required.
 */

// ==========================================
// 1. DATA REPOSITORIES (PRE-FILLED CONTENT)
// ==========================================

const BLOG_POSTS = [
  {
    id: 'blog-1',
    title: '10 Small Apartment Decor Ideas That Make a Big Impact',
    category: 'Decor',
    categoryClass: 'badge-decor',
    date: 'Aug 20, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Transform cramped rental square footage into an airy, high-end sanctuary using strategic scale, mirror illusions, and textural layers.',
    fullContent: `
      <p class="mb-4">Living in a small apartment doesn't mean sacrificing personal style or high design. With the right optical illusions and intentional decor pieces, you can make even a 400-square-foot studio feel expansive, grounded, and luxurious.</p>
      
      <h3 class="font-serif text-xl font-bold mt-6 mb-3">1. Hang Curtains High and Wide</h3>
      <p class="mb-4">Mount curtain rods 3 to 6 inches above the window frame (or all the way to the ceiling) and extend them 8 inches wider than the window itself. This visually draws the eye upward and makes windows appear double their actual size.</p>

      <h3 class="font-serif text-xl font-bold mt-6 mb-3">2. Choose Furniture with Visible Legs</h3>
      <p class="mb-4">Heavy, skirted sofas trap sightlines and make floors feel crowded. Opt for mid-century tapered legs or slender iron bases that allow light to flow underneath.</p>

      <h3 class="font-serif text-xl font-bold mt-6 mb-3">3. Embrace Large-Scale Art Over Cluttered Mini Frames</h3>
      <p class="mb-4">A common mistake in small spaces is using dozens of tiny frames. Instead, hang one statement 24x36" or 30x40" textured canvas. One bold focal point expands the perceived room boundary.</p>

      <h3 class="font-serif text-xl font-bold mt-6 mb-3">4. The 3-Light Source Rule</h3>
      <p class="mb-4">Avoid harsh single overhead boob lights. Layer warm 2700K floor lamps, a diffused table sconce, and dimmable under-cabinet warm LEDs.</p>
    `
  },
  {
    id: 'blog-2',
    title: 'Smart Storage Solutions for Tiny Kitchens',
    category: 'Organization',
    categoryClass: 'badge-org',
    date: 'Aug 18, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Max out every square inch of kitchen cabinet, backsplash, and pantry space with renter-friendly vertical organizers and tiered racks.',
    fullContent: `
      <p class="mb-4">Rental apartment kitchens are notoriously stingy with cabinet depth and counter clearance. Here is how to double your usable vertical storage without drilling holes in rental cabinetry.</p>
      
      <h3 class="font-serif text-xl font-bold mt-6 mb-3">1. Tiered Shelf Risers Inside Deep Cabinets</h3>
      <p class="mb-4">Standard cabinets leave 8-12 inches of empty dead air above plates. Wire or bamboo cabinet shelf risers instantly double your dinnerware capacity.</p>

      <h3 class="font-serif text-xl font-bold mt-6 mb-3">2. Magnetic Backsplash Knife & Spice Bars</h3>
      <p class="mb-4">Free up precious countertop real estate by mounting heavy-duty adhesive magnetic stainless steel strips for knives, peelers, and magnetic metal spice tins.</p>

      <h3 class="font-serif text-xl font-bold mt-6 mb-3">3. Over-the-Cabinet Trash & Towel Bars</h3>
      <p class="mb-4">Take advantage of cabinet door backs for foil organizers, measuring spoons, and compact compost bins.</p>
    `
  },
  {
    id: 'blog-3',
    title: 'DIY Floating Shelves for Under $20',
    category: 'DIY',
    categoryClass: 'badge-diy',
    date: 'Aug 15, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    excerpt: 'A weekend step-by-step woodworking project using affordable pine boards, hidden drywall brackets, and rich walnut stain.',
    fullContent: `
      <p class="mb-4">Floating shelves add custom warmth and vertical display depth to blank rental walls. You don't need expensive store-bought sets when you can build high-end custom wood shelves for under twenty dollars.</p>
      
      <h3 class="font-serif text-xl font-bold mt-6 mb-3">Materials Needed</h3>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>1x 1"x6" Common Pine Board (8 ft length cut in half) - $8.50</li>
        <li>1x Can Minwax Early American / Walnut Stain - $6.20</li>
        <li>2x Heavy-Duty 1/2" Steel Hidden Floating Brackets - $4.99</li>
        <li>220-grit Sandpaper and clear matte topcoat</li>
      </ul>

      <h3 class="font-serif text-xl font-bold mt-6 mb-3">Step-by-Step Instructions</h3>
      <p class="mb-4"><strong>Step 1:</strong> Sand all edges thoroughly until silky smooth, softening sharp 90-degree corners.<br>
      <strong>Step 2:</strong> Apply pre-stain wood conditioner followed by one even coat of rich walnut stain. Wipe excess after 3 minutes.<br>
      <strong>Step 3:</strong> Use a magnetic stud finder and level to install brackets directly into wall studs or toggle anchors for 50lb+ load security.</p>
    `
  },
  {
    id: 'blog-4',
    title: 'Top 10 Amazon Finds Under $50 for Your Rental',
    category: 'Amazon Finds',
    categoryClass: 'badge-amazon',
    date: 'Aug 12, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Budget-friendly, high-aesthetic furniture, ambient lighting, and renter-safe organizers tested and approved for apartments.',
    fullContent: `
      <p class="mb-4">You do not have to spend thousands to give your rental apartment a curated designer feel. We scoured thousands of Amazon reviews to curate the absolute best high-quality decor pieces under $50.</p>
      
      <h3 class="font-serif text-xl font-bold mt-6 mb-3">Top Budget Winners</h3>
      <p class="mb-4"><strong>1. Cordless Rechargeable Warm LED Table Lamps ($24.99):</strong> Touch-activated brass lamp that eliminates ugly extension cords on accent side tables.<br>
      <strong>2. Peel-and-Stick Moroccan Tile Backsplash ($19.99):</strong> Renter-safe vinyl sheets that peel off cleanly with a hairdryer on move-out day.<br>
      <strong>3. Woven Rattan Storage Baskets with Wooden Handles ($28.00):</strong> Tucks unsightly Wi-Fi routers and cable clutter into chic natural textures.</p>
    `
  },
  {
    id: 'blog-5',
    title: 'How to Style Your Small Living Room Like a Pro',
    category: 'Decor',
    categoryClass: 'badge-decor',
    date: 'Aug 09, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Create defined zones, balance color palettes with warm neutrals and terracotta accents, and layer lighting for maximum coziness.',
    fullContent: `
      <p class="mb-4">When your living room also functions as a dining nook and home office, zone definition is key. Here is how interior stylists make compact living rooms feel intentional and cohesive.</p>
      
      <h3 class="font-serif text-xl font-bold mt-6 mb-3">1. Anchor Zones with the Right Size Rug</h3>
      <p class="mb-4">A tiny 3x5 rug makes a room look smaller ("postage stamp effect"). Always size up to at least 5x8 or 6x9 so the front legs of all seating rest comfortably on the rug.</p>

      <h3 class="font-serif text-xl font-bold mt-6 mb-3">2. The 60-30-10 Color Rule</h3>
      <p class="mb-4">Base 60% of the room in warm neutral creams and beiges, 30% in soothing sage green textures or light woods, and 10% in punchy terracotta accent cushions, ceramic pots, or throws.</p>

      <h3 class="font-serif text-xl font-bold mt-6 mb-3">3. Nesting & Multi-Functional Coffee Tables</h3>
      <p class="mb-4">Opt for round nesting tables or a lift-top storage ottoman. Round tables eliminate sharp corners and facilitate smooth walking paths in narrow layouts.</p>
    `
  },
  {
    id: 'blog-6',
    title: 'The Best Organization Hacks for Renters',
    category: 'Organization',
    categoryClass: 'badge-org',
    date: 'Aug 04, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Zero-damage hanging systems, tension rod closet tricks, and under-bed slide solutions that protect your security deposit.',
    fullContent: `
      <p class="mb-4">Renting comes with strict rules: no major drywall modifications, no painting without permission, and no cabinet alterations. Here are the top rental-approved hacks to keep everything organized without risking your deposit.</p>
      
      <h3 class="font-serif text-xl font-bold mt-6 mb-3">1. Tension Rods as Closet Doublers</h3>
      <p class="mb-4">Install a heavy-duty tension rod halfway down a tall wardrobe to create an upper tier for shirts and a lower tier for folded trousers or storage bins.</p>

      <h3 class="font-serif text-xl font-bold mt-6 mb-3">2. Under-Bed Rolling Linen Trays</h3>
      <p class="mb-4">Utilize the 7 inches of floor clearance beneath your bed frame. Fabric zip containers keep winter duvets and extra throw pillows dust-free.</p>

      <h3 class="font-serif text-xl font-bold mt-6 mb-3">3. Command Picture Hanging Strips Over Nails</h3>
      <p class="mb-4">Interlocking hook-and-loop strips distribute frame weight without leaving pinholes, making gallery wall reconfigurations effortless.</p>
    `
  }
];

const AMAZON_PRODUCTS = [
  {
    id: 'prod-1',
    title: 'Chunky Bouclé Accent Throw Blanket & Pillow Set',
    category: 'Home Decor',
    price: '$29.99',
    rawPrice: 29.99,
    rating: 4.8,
    reviews: 1420,
    prime: true,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=600&q=80',
    amazonUrl: 'https://amazon.com/dp/B08XYZ101?tag=yourtag-20',
    perk: 'Ultra-soft cozy texture that elevates neutral couches',
    description: 'Generously sized 50x60" warm cream bouclé throw with two matching 18x18" pillow covers. Hypoallergenic, machine washable, and perfect for adding soft dimension to small sofas.'
  },
  {
    id: 'prod-2',
    title: 'Boho Minimalist Arch Wall Art Trio (Framed 12x16")',
    category: 'Home Decor',
    price: '$34.50',
    rawPrice: 34.50,
    rating: 4.9,
    reviews: 890,
    prime: true,
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80',
    amazonUrl: 'https://amazon.com/dp/B08XYZ102?tag=yourtag-20',
    perk: 'Lightweight frames ideal for rental Command strips',
    description: 'Set of 3 gallery prints featuring warm terracotta suns, sage arches, and botanical line drawings. Comes pre-framed in light natural wood-grain frames with shatterproof acrylic glass.'
  },
  {
    id: 'prod-3',
    title: 'Handmade Textured Neutral Jute Area Rug (4x6 ft)',
    category: 'Home Decor',
    price: '$48.00',
    rawPrice: 48.00,
    rating: 4.7,
    reviews: 2150,
    prime: true,
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=600&q=80',
    amazonUrl: 'https://amazon.com/dp/B08XYZ103?tag=yourtag-20',
    perk: 'Durable organic fiber that anchors seating zones',
    description: 'Hand-braided 100% natural organic jute rug with subtle cream fringe. Thick weave cushions cold apartment hardwood floors and withstands high foot traffic.'
  },
  {
    id: 'prod-4',
    title: 'Stackable Bamboo Under-Bed Storage Bins with Lids (Set of 2)',
    category: 'Storage & Organization',
    price: '$32.99',
    rawPrice: 32.99,
    rating: 4.8,
    reviews: 1120,
    prime: true,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80',
    amazonUrl: 'https://amazon.com/dp/B08XYZ104?tag=yourtag-20',
    perk: 'Low 6-inch profile slides under standard bed frames',
    description: 'Breathable linen-wrapped collapsible organizers with sustainable bamboo lids and dual leather pull handles. Keeps out-of-season clothes dust-free and neatly concealed.'
  },
  {
    id: 'prod-5',
    title: 'Over-The-Door Multi-Tier Pantry & Closet Organizer',
    category: 'Storage & Organization',
    price: '$24.99',
    rawPrice: 24.99,
    rating: 4.6,
    reviews: 3410,
    prime: true,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80',
    amazonUrl: 'https://amazon.com/dp/B08XYZ105?tag=yourtag-20',
    perk: 'Zero-tool mounting hangs over any standard 1.5" door',
    description: '6-tier heavy-gauge steel wire basket system with adjustable basket heights. Perfect for spices, pantry overflow, laundry supplies, or skincare products.'
  },
  {
    id: 'prod-6',
    title: 'Compact Retro Single-Serve Pour-Over Coffee Station',
    category: 'Kitchen',
    price: '$38.95',
    rawPrice: 38.95,
    rating: 4.9,
    reviews: 980,
    prime: true,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
    amazonUrl: 'https://amazon.com/dp/B08XYZ106?tag=yourtag-20',
    perk: 'Narrow 5-inch footprint saves precious counter space',
    description: 'Sleek matte sage green pour-over dripper stand with borosilicate heat-resistant glass carafe and laser-cut reusable stainless steel mesh filter.'
  },
  {
    id: 'prod-7',
    title: 'Tiered Expandable Spice Rack & Cabinet Turntable Organizer',
    category: 'Kitchen',
    price: '$18.50',
    rawPrice: 18.50,
    rating: 4.7,
    reviews: 4200,
    prime: true,
    image: 'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&w=600&q=80',
    amazonUrl: 'https://amazon.com/dp/B08XYZ107?tag=yourtag-20',
    perk: 'Smooth 360-degree rotation prevents knock-downs',
    description: 'Heavy-duty non-skid 2-tier Lazy Susan turntable with raised outer rim. Expands cabinet reachability so spices never get lost in back corners.'
  },
  {
    id: 'prod-8',
    title: 'Rustproof Matte Black Tension Shower Caddy Pole (Corner)',
    category: 'Bathroom',
    price: '$27.99',
    rawPrice: 27.99,
    rating: 4.7,
    reviews: 2890,
    prime: true,
    image: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=600&q=80',
    amazonUrl: 'https://amazon.com/dp/B08XYZ108?tag=yourtag-20',
    perk: 'Tension spring rod fits ceilings 5ft to 9ft without drilling',
    description: '4 adjustable self-draining wire baskets with integrated razor hooks and washcloth bar. Powder-coated rustproof matte black finish designed for damp bathroom environments.'
  }
];

// ==========================================
// 2. STATE & STORAGE MANAGEMENT
// ==========================================

const STATE = {
  currentBlogFilter: 'All',
  blogSearchQuery: '',
  currentProductFilter: 'All',
  savedItemIds: JSON.parse(localStorage.getItem('hdf_saved_items') || '[]')
};

function saveState() {
  localStorage.setItem('hdf_saved_items', JSON.stringify(STATE.savedItemIds));
  updateWishlistUI();
}

function toggleSaveItem(id, title) {
  const index = STATE.savedItemIds.indexOf(id);
  if (index > -1) {
    STATE.savedItemIds.splice(index, 1);
    showToast(`Removed from saved list`);
  } else {
    STATE.savedItemIds.push(id);
    showToast(`Saved "${title}" to your favorites!`);
  }
  saveState();
  renderProducts();
}

// ==========================================
// 3. TOAST NOTIFICATION SYSTEM
// ==========================================

function showToast(message, icon = 'fa-check') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fa-solid ${icon} text-accent"></i> <span>${message}</span>`;
  
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ==========================================
// 4. RENDERERS: BLOG GRID
// ==========================================

function renderBlogPosts() {
  const blogContainer = document.getElementById('blog-grid-container');
  if (!blogContainer) return;

  const filtered = BLOG_POSTS.filter(post => {
    const matchesCategory = STATE.currentBlogFilter === 'All' || post.category === STATE.currentBlogFilter;
    const matchesSearch = STATE.blogSearchQuery === '' || 
      post.title.toLowerCase().includes(STATE.blogSearchQuery.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(STATE.blogSearchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    blogContainer.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem 1rem; color: var(--color-dark-muted);">
        <i class="fa-solid fa-feather-pointed" style="font-size: 2.5rem; margin-bottom: 1rem; color: var(--color-accent);"></i>
        <h3 class="font-serif text-xl font-bold mb-2">No matching posts found</h3>
        <p>Try searching for a different keyword or select "All Posts".</p>
      </div>
    `;
    return;
  }

  blogContainer.innerHTML = filtered.map(post => `
    <article class="blog-card" id="${post.id}">
      <div class="blog-card-media">
        <img src="${post.image}" alt="${post.title}" loading="lazy">
        <div class="blog-card-overlay-btn">
          <button class="btn btn-pinterest btn-sm" onclick="shareToPinterest('${encodeURIComponent(post.title)}', '${encodeURIComponent(post.image)}', window.location.href)">
            <i class="fa-brands fa-pinterest"></i> Save
          </button>
        </div>
      </div>
      <div class="blog-card-content">
        <div class="blog-meta-top">
          <span class="badge ${post.categoryClass}">${post.category}</span>
          <span class="blog-read-time"><i class="fa-regular fa-clock"></i> ${post.readTime}</span>
        </div>
        <h3 class="blog-card-title" onclick="openBlogModal('${post.id}')">${post.title}</h3>
        <p class="blog-card-excerpt">${post.excerpt}</p>
        <div class="blog-card-footer">
          <span class="text-muted" style="font-size: 0.8rem;">${post.date}</span>
          <span class="read-more-link" onclick="openBlogModal('${post.id}')">
            Read Guide <i class="fa-solid fa-arrow-right-long"></i>
          </span>
        </div>
      </div>
    </article>
  `).join('');
}

// ==========================================
// 5. RENDERERS: AMAZON PRODUCTS GRID
// ==========================================

function renderProducts() {
  const prodContainer = document.getElementById('products-grid-container');
  if (!prodContainer) return;

  const filtered = AMAZON_PRODUCTS.filter(prod => {
    const matchesCategory = STATE.currentProductFilter === 'All' || prod.category === STATE.currentProductFilter;
    return matchesCategory;
  });

  prodContainer.innerHTML = filtered.map(prod => {
    const isSaved = STATE.savedItemIds.includes(prod.id);
    return `
      <div class="product-card" id="${prod.id}">
        <div class="product-media">
          <img src="${prod.image}" alt="${prod.title}" loading="lazy">
          <button class="product-fav-btn ${isSaved ? 'saved' : ''}" 
                  title="${isSaved ? 'Remove from saved' : 'Save item'}"
                  onclick="toggleSaveItem('${prod.id}', '${prod.title.replace(/'/g, "\\'")}')">
            <i class="fa-${isSaved ? 'solid' : 'regular'} fa-heart"></i>
          </button>
        </div>
        
        <div class="product-category-tag">${prod.category}</div>
        <h4 class="product-title" onclick="openProductModal('${prod.id}')">${prod.title}</h4>
        
        <div class="product-rating">
          <i class="fa-solid fa-star"></i>
          <span class="product-rating-num">${prod.rating}</span>
          <span class="product-reviews-count">(${prod.reviews.toLocaleString()})</span>
          ${prod.prime ? '<span class="badge badge-prime" style="margin-left:auto;">Prime</span>' : ''}
        </div>

        <div class="product-footer">
          <div class="product-price-row">
            <span class="product-price">${prod.price}</span>
            <span class="badge badge-org" style="font-size: 0.65rem;">Renter Pick</span>
          </div>
          
          <div class="product-actions-row">
            <a href="${prod.amazonUrl}" target="_blank" rel="noopener noreferrer" class="btn-amazon">
              <i class="fa-brands fa-amazon"></i> View on Amazon
            </a>
            <button class="btn-quickview" title="Quick Details" onclick="openProductModal('${prod.id}')">
              <i class="fa-solid fa-eye"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ==========================================
// 6. WISHLIST / SAVED ITEMS UI
// ==========================================

function updateWishlistUI() {
  const countBadge = document.getElementById('wishlist-badge-count');
  if (countBadge) {
    countBadge.textContent = STATE.savedItemIds.length;
    countBadge.style.display = STATE.savedItemIds.length > 0 ? 'flex' : 'none';
  }

  const container = document.getElementById('wishlist-items-body');
  if (!container) return;

  const savedProds = AMAZON_PRODUCTS.filter(p => STATE.savedItemIds.includes(p.id));

  if (savedProds.length === 0) {
    container.innerHTML = `
      <div class="wishlist-empty-state">
        <i class="fa-regular fa-heart"></i>
        <h4 class="font-serif text-lg font-bold mb-2">Your wishlist is empty</h4>
        <p style="font-size: 0.9rem;">Click the heart icon on any decor item to save it for your apartment makeover!</p>
      </div>
    `;
  } else {
    container.innerHTML = savedProds.map(prod => `
      <div class="wishlist-item">
        <img src="${prod.image}" alt="${prod.title}" class="wishlist-item-img">
        <div class="wishlist-item-info">
          <h5 class="wishlist-item-title">${prod.title}</h5>
          <div class="wishlist-item-price">${prod.price}</div>
          <a href="${prod.amazonUrl}" target="_blank" rel="noopener noreferrer" style="font-size: 0.8rem; color: var(--color-accent); font-weight: 600; text-decoration: underline;">
            Buy on Amazon &rarr;
          </a>
        </div>
        <button class="wishlist-item-remove" onclick="toggleSaveItem('${prod.id}', '${prod.title.replace(/'/g, "\\'")}')" title="Remove">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `).join('');
  }
}

function toggleWishlistDrawer(open) {
  const drawer = document.getElementById('wishlist-drawer');
  const overlay = document.getElementById('drawer-overlay');
  if (!drawer || !overlay) return;

  if (open) {
    updateWishlistUI();
    drawer.classList.add('open');
    overlay.classList.add('active');
  } else {
    drawer.classList.remove('open');
    if (!document.getElementById('mobile-drawer')?.classList.contains('open')) {
      overlay.classList.remove('active');
    }
  }
}

// ==========================================
// 7. MODALS (ARTICLE READER & PRODUCT QUICK VIEW)
// ==========================================

function openBlogModal(id) {
  const post = BLOG_POSTS.find(p => p.id === id);
  if (!post) return;

  const modal = document.getElementById('generic-modal');
  const modalContent = document.getElementById('modal-content-container');
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <div class="modal-body">
      <div class="flex items-center justify-between mb-4">
        <span class="badge ${post.categoryClass}">${post.category}</span>
        <span class="text-muted" style="font-size: 0.85rem;"><i class="fa-regular fa-calendar"></i> ${post.date} &bull; ${post.readTime}</span>
      </div>

      <h2 class="font-serif text-2xl md:text-3xl font-bold mb-4">${post.title}</h2>
      
      <div style="border-radius: var(--radius-md); overflow: hidden; margin-bottom: 1.75rem; max-height: 380px;">
        <img src="${post.image}" alt="${post.title}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>

      <div class="article-rich-text" style="color: var(--color-dark); line-height: 1.8; font-size: 1rem;">
        ${post.fullContent}
      </div>

      <div style="margin-top: 2.5rem; padding-top: 1.5rem; border-top: 1px solid var(--color-border); display: flex; flex-wrap: wrap; gap: 1rem; align-items: center; justify-content: space-between;">
        <div style="font-weight: 600; font-size: 0.9rem;">
          <i class="fa-solid fa-tag text-accent"></i> Category: ${post.category}
        </div>
        <button class="btn btn-pinterest" onclick="shareToPinterest('${encodeURIComponent(post.title)}', '${encodeURIComponent(post.image)}', window.location.href)">
          <i class="fa-brands fa-pinterest"></i> Save this Guide to Pinterest
        </button>
      </div>
    </div>
  `;

  modal.classList.add('active');
}

function openProductModal(id) {
  const prod = AMAZON_PRODUCTS.find(p => p.id === id);
  if (!prod) return;

  const modal = document.getElementById('generic-modal');
  const modalContent = document.getElementById('modal-content-container');
  if (!modal || !modalContent) return;

  const isSaved = STATE.savedItemIds.includes(prod.id);

  modalContent.innerHTML = `
    <div class="modal-body">
      <div style="display: grid; grid-template-columns: 1fr 1.2fr; gap: 2rem; align-items: start;" class="product-modal-grid">
        <div style="border-radius: var(--radius-md); overflow: hidden; border: 1px solid var(--color-border);">
          <img src="${prod.image}" alt="${prod.title}" style="width: 100%; height: 320px; object-fit: cover;">
        </div>

        <div>
          <span class="product-category-tag">${prod.category}</span>
          <h3 class="font-serif text-2xl font-bold mb-2">${prod.title}</h3>
          
          <div class="product-rating mb-3">
            <i class="fa-solid fa-star"></i>
            <span class="product-rating-num">${prod.rating}</span>
            <span class="product-reviews-count">(${prod.reviews.toLocaleString()} Amazon customer reviews)</span>
          </div>

          <div style="font-size: 1.8rem; font-weight: 800; color: var(--color-dark); margin-bottom: 1rem;">
            ${prod.price}
            ${prod.prime ? '<span class="badge badge-prime" style="font-size: 0.75rem; vertical-align: middle; margin-left: 0.5rem;">FREE Prime Delivery</span>' : ''}
          </div>

          <div style="background-color: var(--color-secondary-light); border-radius: var(--radius-sm); padding: 0.75rem 1rem; font-size: 0.85rem; color: var(--color-secondary-dark); margin-bottom: 1.25rem; font-weight: 600;">
            🌿 Renter Highlight: ${prod.perk}
          </div>

          <p style="color: var(--color-dark-muted); font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.75rem;">
            ${prod.description}
          </p>

          <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
            <a href="${prod.amazonUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="background-color: #232F3E; box-shadow: none;">
              <i class="fa-brands fa-amazon"></i> View Product on Amazon
            </a>
            <button class="btn btn-outline" onclick="toggleSaveItem('${prod.id}', '${prod.title.replace(/'/g, "\\'")}')">
              <i class="fa-${isSaved ? 'solid' : 'regular'} fa-heart text-accent"></i> ${isSaved ? 'Saved' : 'Save to Favorites'}
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
}

function closeModal() {
  const modal = document.getElementById('generic-modal');
  if (modal) modal.classList.remove('active');
}

// Pinterest Share URL generator
function shareToPinterest(title, image, url) {
  const pinterestUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&media=${image}&description=${title} - via HomeDecorFinds`;
  window.open(pinterestUrl, '_blank', 'noopener,noreferrer,width=750,height=550');
  showToast('Opening Pinterest pin share dialog...', 'fa-brands fa-pinterest');
}

// ==========================================
// 8. EVENT LISTENERS & INITIALIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  // Initialize renderings
  renderBlogPosts();
  renderProducts();
  updateWishlistUI();

  // Scroll listener for sticky header & back-to-top button
  const header = document.getElementById('site-header');
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    if (window.scrollY > 400) {
      backToTopBtn?.classList.add('visible');
    } else {
      backToTopBtn?.classList.remove('visible');
    }
  });

  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Mobile menu drawer
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const drawerCloseBtn = document.getElementById('drawer-close-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerOverlay = document.getElementById('drawer-overlay');

  function openMobileMenu() {
    mobileDrawer?.classList.add('open');
    drawerOverlay?.classList.add('active');
  }

  function closeMobileMenu() {
    mobileDrawer?.classList.remove('open');
    if (!document.getElementById('wishlist-drawer')?.classList.contains('open')) {
      drawerOverlay?.classList.remove('active');
    }
  }

  hamburgerBtn?.addEventListener('click', openMobileMenu);
  drawerCloseBtn?.addEventListener('click', closeMobileMenu);
  drawerOverlay?.addEventListener('click', () => {
    closeMobileMenu();
    toggleWishlistDrawer(false);
    closeModal();
  });

  // Close mobile drawer on link click
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Blog Category Filter Pills
  document.querySelectorAll('.blog-filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.blog-filter-btn').forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      STATE.currentBlogFilter = e.currentTarget.getAttribute('data-category');
      renderBlogPosts();
    });
  });

  // Blog Search Input
  const blogSearchInput = document.getElementById('blog-search-input');
  blogSearchInput?.addEventListener('input', (e) => {
    STATE.blogSearchQuery = e.target.value;
    renderBlogPosts();
  });

  // Amazon Products Filter Pills
  document.querySelectorAll('.prod-filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.prod-filter-btn').forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      STATE.currentProductFilter = e.currentTarget.getAttribute('data-category');
      renderProducts();
    });
  });

  // Contact Form Submission Handling
  const contactForm = document.getElementById('contact-form');
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name')?.value;
    const email = document.getElementById('contact-email')?.value;
    const message = document.getElementById('contact-message')?.value;

    if (!name || !email || !message) {
      showToast('Please fill out all required fields.', 'fa-circle-exclamation');
      return;
    }

    // Success simulation
    showToast(`Thank you, ${name}! Your message has been received.`);
    contactForm.reset();
  });

  // Newsletter Form Submission
  const newsletterForm = document.getElementById('newsletter-form');
  newsletterForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = document.getElementById('newsletter-email');
    if (emailInput && emailInput.value) {
      showToast(`Subscribed! We sent your free decor checklist to ${emailInput.value}.`);
      emailInput.value = '';
    }
  });

  // Wishlist toggle buttons
  document.getElementById('nav-wishlist-btn')?.addEventListener('click', () => toggleWishlistDrawer(true));
  document.getElementById('mobile-wishlist-btn')?.addEventListener('click', () => {
    closeMobileMenu();
    toggleWishlistDrawer(true);
  });
  document.getElementById('wishlist-close-btn')?.addEventListener('click', () => toggleWishlistDrawer(false));

  // Modal close handlers
  document.getElementById('modal-close-btn')?.addEventListener('click', closeModal);
  document.getElementById('generic-modal')?.addEventListener('click', (e) => {
    if (e.target.id === 'generic-modal') closeModal();
  });

  // Escape key closes modals and drawers
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      closeMobileMenu();
      toggleWishlistDrawer(false);
    }
  });

  // Active navigation highlight on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelectorAll(`.nav-link[href*="#${sectionId}"]`).forEach(link => {
          link.classList.add('active');
        });
        document.querySelectorAll(`.mobile-nav-link[href*="#${sectionId}"]`).forEach(link => {
          link.classList.add('active');
        });
      } else {
        document.querySelectorAll(`.nav-link[href*="#${sectionId}"]`).forEach(link => {
          link.classList.remove('active');
        });
        document.querySelectorAll(`.mobile-nav-link[href*="#${sectionId}"]`).forEach(link => {
          link.classList.remove('active');
        });
      }
    });
  });
});
