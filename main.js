// js/main.js

// ==================== KONFIGURASI JSONBIN.IO ====================
const JSONBIN_ACCESS_KEY = '$2a$10$Idssm7MPctlzL/quJlXUyOiFa5bSp2W3ERWxRSLbpJS/QKeUj8kt2';
const JSONBIN_BIN_ID = '6a282856f5f4af5e29d26758';

// === FUNGSI UNTUK NORMALISASI PATH GAMBAR ===
function normalizeImagePath(imagePath) {
    if (!imagePath) return './default.jpeg';
    
    // Jika sudah menggunakan ./ (relative path dari root)
    if (imagePath.startsWith('./')) {
        return imagePath;
    }
    
    // Jika menggunakan /img/ (absolute path)
    if (imagePath.startsWith('/img/')) {
        // Convert ke ./ (relative path)
        const filename = imagePath.replace('/img/', '');
        return `./${filename}`;
    }
    
    // Jika hanya nama file saja
    if (!imagePath.includes('/') && !imagePath.startsWith('http')) {
        return `./${imagePath}`;
    }
    
    // Jika URL external (placeholder)
    if (imagePath.startsWith('http')) {
        return imagePath;
    }
    
    return imagePath;
}

// Data awal jika bin kosong - GUNakan PATH RELATIVE (./)
const DEFAULT_PRODUCTS = [
    { "id": "prod-chocolate-original", "name": "Chocolate Original", "description": "Cokelat premium pekat berpadu sempurna dengan susu segar organik yang creamy.", "category": "chocolate", "image": "./cokelat-original.jpeg", "accentColor": "#4A2C2A", "priceK": 10000, "priceB": 13000, "isBestSeller": true, "onlySizeB": false, "noToppings": false },
    { "id": "prod-chocolate-hazelnut", "name": "Chocolate Hazelnut", "description": "Cokelat premium pekat dikombinasikan dengan sirup hazelnut panggang dan susu dingin berkualitas.", "category": "chocolate", "image": "./cokelat-hazelnut.jpeg", "accentColor": "#A67C52", "priceK": 13000, "priceB": 16000, "isBestSeller": true, "onlySizeB": false, "noToppings": false },
    { "id": "prod-chocolate-strawberry", "name": "Chocolate Strawberry", "description": "Perpaduan sempurna antara cokelat premium dan stroberi segar yang manis dan menyegarkan.", "category": "chocolate", "image": "./cokelat-strawberry.jpeg", "accentColor": "#E11D48", "priceK": 12000, "priceB": 15000, "isBestSeller": false, "onlySizeB": false, "noToppings": false },
    { "id": "prod-chocolate-coffee", "name": "Chocolate Coffee", "description": "Kombinasi nikmat antara cokelat pekat dan espresso Arabika yang kuat dan beraroma.", "category": "chocolate", "image": "./cokelat-kopi.jpeg", "accentColor": "#6F4E37", "priceK": 15000, "priceB": 18000, "isBestSeller": false, "onlySizeB": false, "noToppings": false },
    { "id": "prod-matcha-latte", "name": "Matcha Latte", "description": "Bubuk matcha Jepang premium Uji diseduh dengan susu segar organik yang lembut.", "category": "tea", "image": "./tea-matcha.jpeg", "accentColor": "#6B8E23", "priceK": 12000, "priceB": 15000, "isBestSeller": true, "onlySizeB": false, "noToppings": false },
    { "id": "prod-thai-tea", "name": "Thai Tea", "description": "Teh Thailand asli dengan rasa khas yang creamy dan manis, disajikan dengan susu kental manis.", "category": "tea", "image": "./tea-thai.jpeg", "accentColor": "#D97706", "priceK": 12000, "priceB": 15000, "isBestSeller": true, "onlySizeB": false, "noToppings": false },
    { "id": "prod-lemon-tea", "name": "Lemon Tea", "description": "Kesegaran teh hitam dengan perasan lemon asli dan madu hutan alami.", "category": "tea", "image": "./tea-lemon.jpeg", "accentColor": "#EAB308", "priceK": 10000, "priceB": 13000, "isBestSeller": false, "onlySizeB": false, "noToppings": false },
    { "id": "prod-solo-wasgitel", "name": "Solo Wasgitel", "description": "Minuman khas Solo dengan rasa wasgitel yang unik dan menyegarkan.", "category": "tea", "image": "./tea-solo-wasgitel.jpeg", "accentColor": "#8B5E3C", "priceK": 7000, "priceB": 7000, "isBestSeller": false, "onlySizeB": true, "noToppings": true },
    { "id": "prod-americano", "name": "Americano", "description": "Espresso otentik dari biji kopi Arabika pilihan, disajikan dengan air pegunungan dingin yang segar.", "category": "coffee", "image": "./coffe-americano.jpeg", "accentColor": "#6F4E37", "priceK": 10000, "priceB": 13000, "isBestSeller": true, "onlySizeB": false, "noToppings": false },
    { "id": "prod-cappucino", "name": "Cappucino", "description": "Perpaduan sempurna antara espresso, susu panas, dan busa susu yang lembut.", "category": "coffee", "image": "./coffe-cappucino.jpeg", "accentColor": "#A67C52", "priceK": 12000, "priceB": 15000, "isBestSeller": true, "onlySizeB": false, "noToppings": false },
    { "id": "prod-latte", "name": "Latte", "description": "Espresso dengan susu steamed yang creamy, menghasilkan rasa yang halus dan lembut.", "category": "coffee", "image": "./coffe-late.jpeg", "accentColor": "#8B5E3C", "priceK": 12000, "priceB": 15000, "isBestSeller": false, "onlySizeB": false, "noToppings": false },
    { "id": "prod-brown-sugar-latte", "name": "Brown Sugar Latte", "description": "Caramel gula merah Okinawa berpadu indah dengan espresso dan susu segar premium.", "category": "coffee", "image": "./coffe-late-brown-sugar.jpeg", "accentColor": "#4A2C2A", "priceK": 15000, "priceB": 18000, "isBestSeller": true, "onlySizeB": false, "noToppings": false },
    { "id": "prod-strawberry", "name": "Strawberry", "description": "Puree stroberi segar organik dipadukan dengan es batu serut.", "category": "fruit", "image": "./fruit-strawberry.jpeg", "accentColor": "#E11D48", "priceK": 10000, "priceB": 13000, "isBestSeller": true, "onlySizeB": false, "noToppings": false },
    { "id": "prod-mango", "name": "Mango", "description": "Kesegaran puree mangga alami yang manis dan menyegarkan, cocok untuk cuaca panas.", "category": "fruit", "image": "./fruit-manggo.jpeg", "accentColor": "#F59E0B", "priceK": 10000, "priceB": 13000, "isBestSeller": false, "onlySizeB": false, "noToppings": false }
];

const DEFAULT_CAMPAIGNS = [
    { "id": "campaign-midnight-chocolate", "title": "Midnight Chocolate", "subTitle": "Sensasi Kakao Pekat yang Elegan", "badge": "Edisi Terbatas", "description": "Masuki petualangan rasa yang mendalam. Bubuk cokelat hitam pilihan dari Afrika Barat berpadu dengan susu premium organik, menghasilkan rasa yang intens, lembut, dan menenangkan malam Anda.", "image": "./cokelat-original.jpeg", "accentColor": "#4A2C2A", "highlightText": "KOSMIK COKELAT" },
    { "id": "campaign-matcha-signature", "title": "Matcha Signature", "subTitle": "Ketenangan Zen dalam Setiap Tegukan", "badge": "Terlaris", "description": "Ditanam di kebun teh Kyoto yang sejuk, digiling secara tradisional dengan presisi tingkat tinggi, lalu dibalur susu organik segar demi memberikan fokus dan kesegaran penuh.", "image": "./tea-matcha.jpeg", "accentColor": "#6B8E23", "highlightText": "MATCHA KYOTO" },
    { "id": "campaign-strawberry", "title": "Strawberry Mango Fusion", "subTitle": "Kebahagiaan Tropis Penuh Kesegaran", "badge": "Edisi Spesial", "description": "Kesegaran buah stroberi matang pilihan yang dipadukan secara harmonis dengan kelembutan puree mangga Alfonzo berlapis madu. Ledakan rasa menakjubkan bagi hari Anda.", "image": "./fruit-strawberry.jpeg", "accentColor": "#E11D48", "highlightText": "PERPADUAN TROPIS" }
];

const DEFAULT_TESTIMONIALS = [
    { "id": "test-ronald", "reviewTitle": "Belum pernah menikmati Brown Sugar Latte seenak ini!", "reviewText": "Saya sudah mencoba banyak Brown Sugar Latte di Indonesia, dan jujur ini adalah yang terbaik yang pernah saya rasakan! Rasa manisnya alami dan aroma kopinya tetap kuat.", "customerName": "Ronald Simatupang", "city": "Jakarta, Indonesia", "date": "25 Maret 2025", "productImage": "./coffe-late-brown-sugar.jpeg", "ratingValue": 5 },
    { "id": "test-olivia", "reviewTitle": "Banyak pilihan rasa dan semuanya kualitas terbaik! Tidak ada yang mengecewakan", "reviewText": "THE. C DRINKS memiliki variasi yang sangat beragam dan semuanya lezat! Konsistensinya pas dan kemasannya sangat premium. Benar-benar direkomendasikan!", "customerName": "Olivia Grace Tjondro", "city": "Surabaya, Indonesia", "date": "5 Juli 2025", "productImage": "./tea-matcha.jpeg", "ratingValue": 5 },
    { "id": "test-stephanie", "reviewTitle": "Sangat menyukai varian Stroberi!", "reviewText": "Varian stroberi selalu menjadi favorit saya. Belum pernah menemukan minuman yang bisa meningkatkan mood saya secepat ini! Premium, segar, dan sangat cantik saat difoto.", "customerName": "Stephanie Raitama", "city": "Bandung, Indonesia", "date": "7 September 2025", "productImage": "./fruit-strawberry.jpeg", "ratingValue": 5 }
];

const DEFAULT_INSTAGRAM = [
    { "id": "post-1", "image": "https://placehold.co/600x600/333333/white?text=Instagram+1", "likes": "1,420", "comments": "48", "caption": "Pagi hari di sudut kota yang chic ditemani americano yang kuat. ✨ #thecdrinks", "type": "photo" },
    { "id": "post-2", "image": "https://placehold.co/600x600/444444/white?text=Instagram+2", "likes": "2,110", "comments": "92", "caption": "Proses brewing dengan presisi tinggi. Setiap cangkir disajikan dengan penuh kasih.", "type": "carousel" },
    { "id": "post-3", "image": "https://placehold.co/600x600/2a2a2a/white?text=Instagram+3", "likes": "1,894", "comments": "64", "caption": "Sensasi menikmati cokelat premium larut malam yang meningkatkan suasana hati Anda.", "type": "photo" },
    { "id": "post-4", "image": "https://placehold.co/600x600/3a3a3a/white?text=Instagram+4", "likes": "3,020", "comments": "124", "caption": "Matcha latte hangat untuk fokus kognitif yang bersih di sore hari. 🍃", "type": "video" },
    { "id": "post-5", "image": "https://placehold.co/600x600/4a4a4a/white?text=Instagram+5", "likes": "4,103", "comments": "210", "caption": "Saat kehangatan mentari berpadu di dalam gelas: Puree mangga manis dan stroberi segar.", "type": "photo" },
    { "id": "post-6", "image": "https://placehold.co/600x600/252525/white?text=Instagram+6", "likes": "2,740", "comments": "88", "caption": "Arsitektur minimalis yang elegan. Outlet Jl. Premium Rasa kami kini resmi dibuka.", "type": "photo" }
];

const categoriesData = [
    { "id": "all", "name": "Semua Koleksi" },
    { "id": "best-seller", "name": "Terlaris" },
    { "id": "chocolate", "name": "Seri Cokelat" },
    { "id": "tea", "name": "Seri Teh" },
    { "id": "fruit", "name": "Seri Buah" },
    { "id": "coffee", "name": "Seri Kopi" },
    { "id": "seasonal", "name": "Seri Musiman" }
];

const storeData = {
    "id": "store-bondowoso", "name": "The. C Drinks, Diponegoro, Bondowoso", "address": "Jl. Diponegoro, Kotakulon, Kec. Bondowoso, Kabupaten Bondowoso, Jawa Timur 68213", "phone": "0822 9999 9035", "hours": "10:00 Pagi - 10:00 Malam", "mapsUrl": "https://www.google.com/maps/place/The.+C+Drinks/@-7.9108787,113.8193598", "city": "Bondowoso"
};

const STORE_LOCATION = { lat: -7.9108787, lng: 113.8193598 };

// ==================== GLOBAL DATA ====================
let productsData = [];
let campaignsData = [];
let testimonialsData = [];
let instagramPostsData = [];

// State
let cartItems = [];
let receiptData = null;
let activeCategory = 'all';
let productSizes = {};
let userLocation = null;
let productTemp = {};
let currentFormType = null;
let currentEditId = null;

// ==================== API FUNCTIONS ====================
async function loadDataFromAPI() {
    try {
        console.log('🔄 Loading data from JSONBin...');
        
        const response = await fetch(`https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}/latest`, {
            method: 'GET',
            headers: { 
                'X-Access-Key': JSONBIN_ACCESS_KEY,
                'Content-Type': 'application/json'
            },
            cache: 'no-store'
        });
        
        if (response.ok) {
            const data = await response.json();
            const record = data.record;
            console.log('📦 Raw data from JSONBin:', record);
            
            if (record && record.products && record.products.length > 0) {
                // === PERBAIKAN: Normalisasi path gambar dari JSONBin ===
                productsData = record.products.map(p => ({
                    ...p,
                    image: normalizeImagePath(p.image)
                }));
                campaignsData = (record.campaigns || DEFAULT_CAMPAIGNS).map(c => ({
                    ...c,
                    image: normalizeImagePath(c.image)
                }));
                testimonialsData = (record.testimonials || DEFAULT_TESTIMONIALS).map(t => ({
                    ...t,
                    productImage: normalizeImagePath(t.productImage)
                }));
                instagramPostsData = record.instagram || DEFAULT_INSTAGRAM;
                
                console.log('✅ Data after normalization:', { 
                    products: productsData.map(p => p.image),
                    campaigns: campaignsData.map(c => c.image)
                });
            } else {
                console.log('⚠️ Bin kosong, mengisi dengan data default...');
                await initializeDefaultData();
            }
        } else {
            console.error('❌ API response error:', response.status);
            await initializeDefaultData();
        }
    } catch (error) {
        console.error('❌ Error loading data:', error);
        await initializeDefaultData();
        showNotification('Menggunakan data lokal (koneksi ke server terputus)', 'info');
    }
}

async function initializeDefaultData() {
    productsData = DEFAULT_PRODUCTS;
    campaignsData = DEFAULT_CAMPAIGNS;
    testimonialsData = DEFAULT_TESTIMONIALS;
    instagramPostsData = DEFAULT_INSTAGRAM;
    
    try {
        // Simpan data default ke JSONBin dengan format path yang benar
        await saveAllDataToAPI();
        console.log('✅ Data default berhasil diinisialisasi!');
    } catch(e) {
        console.error('❌ Gagal menyimpan ke JSONBin:', e);
    }
}

async function saveAllDataToAPI() {
    // === PENTING: Saat menyimpan ke JSONBin, konversi path ./ ke /img/ ===
    const dataToSave = {
        products: productsData.map(p => ({
            ...p,
            image: convertToAbsolutePath(p.image)
        })),
        campaigns: campaignsData.map(c => ({
            ...c,
            image: convertToAbsolutePath(c.image)
        })),
        testimonials: testimonialsData.map(t => ({
            ...t,
            productImage: convertToAbsolutePath(t.productImage)
        })),
        instagram: instagramPostsData,
        lastUpdated: new Date().toISOString()
    };
    
    try {
        console.log('💾 Saving data to JSONBin with absolute paths...');
        const response = await fetch(`https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Access-Key': JSONBIN_ACCESS_KEY
            },
            body: JSON.stringify(dataToSave)
        });
        
        if (response.ok) {
            console.log('✅ Data saved successfully');
            showNotification('Data berhasil disimpan!', 'success');
        } else {
            console.error('❌ Save failed:', response.status);
        }
    } catch (error) {
        console.error('❌ Error saving data:', error);
    }
}

// === FUNGSI KONVERSI PATH UNTUK DISIMPAN KE JSONBIN ===
function convertToAbsolutePath(path) {
    if (!path) return '/img/default.jpeg';
    
    // Jika sudah dalam format /img/, biarkan
    if (path.startsWith('/img/')) {
        return path;
    }
    
    // Jika dalam format ./namafile.jpeg, konversi ke /img/namafile.jpeg
    if (path.startsWith('./')) {
        const filename = path.substring(2);
        return `/img/${filename}`;
    }
    
    // Jika hanya nama file
    if (!path.includes('/') && !path.startsWith('http')) {
        return `/img/${path}`;
    }
    
    // Jika URL external, biarkan
    if (path.startsWith('http')) {
        return path;
    }
    
    return path;
}

async function saveProducts() { await saveAllDataToAPI(); }
async function saveCampaigns() { await saveAllDataToAPI(); }
async function saveTestimonials() { await saveAllDataToAPI(); }
async function saveInstagram() { await saveAllDataToAPI(); }

// ==================== NOTIFICATION ====================
function showNotification(message, type = 'info') {
    const colors = {
        success: 'bg-green-600',
        error: 'bg-red-600',
        info: 'bg-[#111111]'
    };
    const notification = document.createElement('div');
    notification.className = `fixed top-20 right-4 z-[100] ${colors[type]} text-white text-xs font-bold py-2 px-4 rounded-lg shadow-lg transition-all duration-300`;
    notification.innerHTML = message;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ==================== CRUD HELPERS ====================
function generateId(prefix) {
    return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`;
}

// ==================== PRODUCT FUNCTIONS ====================
function getProductPrice(product, size) {
    if (product.id === "prod-solo-wasgitel") return product.priceB;
    return size === 'B' ? product.priceB : product.priceK;
}

function getToppingPrice(toppings, productId) {
    if (productId === "prod-solo-wasgitel") return 0;
    let total = 0;
    if (toppings.boba) total += 3000;
    if (toppings.creamCheese) total += 5000;
    return total;
}

function calculateDeliveryFee(distance) {
    if (isNaN(distance) || distance <= 0) return 0;
    if (distance <= 3) return 3000;
    const extraKm = Math.ceil(distance - 3);
    return 3000 + (extraKm * 2000);
}

function getDeliveryFee() {
    const distanceInput = document.getElementById('delivery-distance');
    if (!distanceInput) return 0;
    const distance = parseFloat(distanceInput.value);
    if (isNaN(distance) || distance <= 0) return 0;
    return calculateDeliveryFee(distance);
}

function updateDeliveryFee() {
    const distanceInput = document.getElementById('delivery-distance');
    let distance = 0;
    if (distanceInput) {
        distance = parseFloat(distanceInput.value);
        if (isNaN(distance)) distance = 0;
    }
    const fee = calculateDeliveryFee(distance);
    const display = document.getElementById('delivery-fee-display');
    if (display) {
        if (fee > 0 && distance > 0) {
            let feeExplanation = '';
            if (distance <= 3) {
                feeExplanation = `(${distance} km × flat rate Rp3.000)`;
            } else {
                const extraKm = Math.ceil(distance - 3);
                feeExplanation = `(${distance} km: Rp3.000 + ${extraKm} km × Rp2.000)`;
            }
            display.textContent = `Ongkir: Rp ${fee.toLocaleString()} ${feeExplanation}`;
            display.classList.remove('hidden');
        } else {
            display.classList.add('hidden');
        }
    }
    updateCartTotals();
}

// ==================== GEOLOCATION ====================
function getUserLocationWA() {
    const statusEl = document.getElementById('location-status-wa');
    const resetBtn = document.getElementById('reset-permission-btn');
    const distanceInput = document.getElementById('delivery-distance');
    
    if (!navigator.geolocation) {
        if (statusEl) {
            statusEl.textContent = '❌ Browser tidak mendukung geolokasi';
            statusEl.classList.remove('hidden');
            setTimeout(() => statusEl.classList.add('hidden'), 3000);
        }
        return;
    }
    
    if (statusEl) {
        statusEl.textContent = '📍 Mendapatkan lokasi Anda... Mohon izinkan akses lokasi.';
        statusEl.classList.remove('hidden');
        statusEl.classList.remove('text-red-600', 'text-emerald-600');
        statusEl.classList.add('text-blue-600');
    }
    
    if (resetBtn) resetBtn.classList.add('hidden');
    
    navigator.geolocation.getCurrentPosition(
        function(position) {
            userLocation = { lat: position.coords.latitude, lng: position.coords.longitude };
            const distance = calculateDistance(STORE_LOCATION.lat, STORE_LOCATION.lng, userLocation.lat, userLocation.lng);
            if (distanceInput) distanceInput.value = distance.toFixed(1);
            
            const fee = calculateDeliveryFee(distance);
            
            if (statusEl) {
                let feeInfo = '';
                if (distance <= 3) {
                    feeInfo = ` (Ongkir flat Rp3.000)`;
                } else {
                    const extraKm = Math.ceil(distance - 3);
                    feeInfo = ` (Ongkir Rp3.000 + ${extraKm}km × Rp2.000 = Rp${fee.toLocaleString()})`;
                }
                statusEl.innerHTML = `📍 Jarak ke toko: ${distance.toFixed(1)} km ✅${feeInfo}`;
                statusEl.classList.remove('text-blue-600', 'text-red-600');
                statusEl.classList.add('text-emerald-600');
                setTimeout(() => statusEl.classList.add('hidden'), 4000);
            }
            updateDeliveryFee();
            if (resetBtn) resetBtn.classList.add('hidden');
        },
        function(error) {
            let errorMessage = '';
            let showResetButton = false;
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    errorMessage = '❌ Izin lokasi ditolak. Klik tombol Reset untuk meminta izin kembali.';
                    showResetButton = true;
                    break;
                case error.POSITION_UNAVAILABLE:
                    errorMessage = '❌ Informasi lokasi tidak tersedia. Silakan coba lagi atau isi jarak manual.';
                    showResetButton = false;
                    break;
                case error.TIMEOUT:
                    errorMessage = '❌ Waktu permintaan lokasi habis. Silakan coba lagi.';
                    showResetButton = false;
                    break;
                default:
                    errorMessage = '❌ Terjadi kesalahan saat mengambil lokasi.';
                    showResetButton = false;
            }
            if (statusEl) {
                statusEl.innerHTML = errorMessage;
                statusEl.classList.remove('hidden', 'text-blue-600', 'text-emerald-600');
                statusEl.classList.add('text-red-600');
                setTimeout(() => {
                    if (statusEl.classList.contains('text-red-600')) {
                        statusEl.classList.add('hidden');
                    }
                }, 5000);
            }
            if (resetBtn && showResetButton) {
                resetBtn.classList.remove('hidden');
            } else if (resetBtn) {
                resetBtn.classList.add('hidden');
            }
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
    );
}

function resetLocationPermission() {
    const statusEl = document.getElementById('location-status-wa');
    const resetBtn = document.getElementById('reset-permission-btn');
    const distanceInput = document.getElementById('delivery-distance');
    
    userLocation = null;
    if (distanceInput) distanceInput.value = '';
    updateDeliveryFee();
    
    if (statusEl) {
        statusEl.innerHTML = '🔄 Mereset perizinan... Silakan klik "Ambil Lokasi Saya" lagi.';
        statusEl.classList.remove('hidden', 'text-red-600', 'text-emerald-600');
        statusEl.classList.add('text-blue-600');
        setTimeout(() => statusEl.classList.add('hidden'), 3000);
    }
    if (resetBtn) resetBtn.classList.add('hidden');
}

function clearLocationWA() {
    userLocation = null;
    const distanceInput = document.getElementById('delivery-distance');
    const statusEl = document.getElementById('location-status-wa');
    const resetBtn = document.getElementById('reset-permission-btn');
    if (distanceInput) distanceInput.value = '';
    if (statusEl) statusEl.classList.add('hidden');
    if (resetBtn) resetBtn.classList.add('hidden');
    updateDeliveryFee();
}

function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

function deg2rad(deg) { return deg * (Math.PI / 180); }

// ==================== LOAD & RENDER ====================
async function loadData() {
    showLoadingIndicator(true);
    await loadDataFromAPI();
    renderCategories();
    renderProductsByCategory('all');
    renderCampaigns();
    renderTestimonials();
    renderInstagramPosts();
    updateStoreInfo();
    showLoadingIndicator(false);
}

function showLoadingIndicator(show) {
    const grids = ['products-grid', 'campaigns-grid', 'testimonials-grid', 'instagram-grid'];
    if (show) {
        grids.forEach(id => {
            const el = document.getElementById(id);
            if (el && el.children.length === 0) {
                el.innerHTML = '<div class="col-span-full text-center py-12"><div class="inline-block w-8 h-8 border-4 border-neutral-200 border-t-[#111111] rounded-full animate-spin"></div><p class="text-neutral-400 text-xs mt-2">Memuat data...</p></div>';
            }
        });
    }
}

function renderProductsByCategory(categoryId) {
    let filtered = [...productsData];
    if (categoryId === 'best-seller') filtered = filtered.filter(p => p.isBestSeller);
    else if (categoryId !== 'all') filtered = filtered.filter(p => p.category === categoryId);
    renderProducts(filtered);
}

function renderCategories() {
    const container = document.getElementById('category-filters');
    if (!container) return;
    container.innerHTML = categoriesData.map(cat => {
        const isActive = (cat.id === activeCategory);
        return `<button onclick="filterProducts('${cat.id}')" data-category="${cat.id}" class="category-btn px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer border ${isActive ? 'bg-[#111111] text-white border-[#111111]' : 'bg-white text-[#555555] border-neutral-200 hover:text-[#111111] hover:border-[#111111]'}">${cat.name}</button>`;
    }).join('');
}

function filterProducts(categoryId) {
    activeCategory = categoryId;
    document.querySelectorAll('.category-btn').forEach(btn => {
        const btnCategory = btn.getAttribute('data-category');
        if (btnCategory === categoryId) {
            btn.classList.remove('bg-white', 'text-[#555555]', 'border-neutral-200');
            btn.classList.add('bg-[#111111]', 'text-white', 'border-[#111111]');
        } else {
            btn.classList.remove('bg-[#111111]', 'text-white', 'border-[#111111]');
            btn.classList.add('bg-white', 'text-[#555555]', 'border-neutral-200');
        }
    });
    renderProductsByCategory(categoryId);
}

function setProductSize(productId, size) {
    const product = productsData.find(p => p.id === productId);
    if (product && product.onlySizeB) {
        size = 'B';
    }
    productSizes[productId] = size;
    document.querySelectorAll(`.size-btn-${productId}`).forEach(btn => {
        const btnSize = btn.getAttribute('data-size');
        if (btnSize === size) {
            btn.classList.remove('text-[#555555]', 'hover:text-[#111111]');
            btn.classList.add('bg-[#111111]', 'text-white');
        } else {
            btn.classList.remove('bg-[#111111]', 'text-white');
            btn.classList.add('text-[#555555]', 'hover:text-[#111111]');
        }
    });
    renderProductsByCategory(activeCategory);
}

function addToCart(productId, size, temperature, toppings) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;
    
    let finalSize = size;
    let finalToppings = { ...toppings };
    if (product.onlySizeB) {
        finalSize = 'B';
        finalToppings = { boba: false, creamCheese: false };
    }
    if (product.noToppings) {
        finalToppings = { boba: false, creamCheese: false };
    }
    
    const itemId = `${productId}-${finalSize}-${temperature}-${finalToppings.boba ? 'boba' : ''}-${finalToppings.creamCheese ? 'creamcheese' : ''}`;
    const price = getProductPrice(product, finalSize);
    const toppingPrice = getToppingPrice(finalToppings, productId);
    const totalItemPrice = price + toppingPrice;
    
    const existing = cartItems.find(i => i.id === itemId);
    if (existing) {
        existing.quantity++;
    } else {
        cartItems.push({ 
            id: itemId, 
            productId, 
            product, 
            size: finalSize, 
            temperature,
            toppings: { ...finalToppings },
            quantity: 1,
            basePrice: price,
            toppingPrice: toppingPrice,
            totalPrice: totalItemPrice
        });
    }
    updateCartUI();
    showAddToCartNotification(product.name);
}

function showAddToCartNotification(productName) {
    const notification = document.createElement('div');
    notification.className = 'fixed bottom-24 right-6 z-50 bg-[#111111] text-white text-xs font-bold py-2 px-4 rounded-full shadow-lg transition-all duration-300 animate-bounce';
    notification.innerHTML = `✨ ${productName} ditambahkan ke keranjang!`;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

function renderProducts(products) {
    const container = document.getElementById('products-grid');
    if (!container) return;
    if (!products.length) {
        container.innerHTML = '<div class="col-span-full text-center py-12 text-neutral-400">Tidak ada produk dalam kategori ini.</div>';
        return;
    }
    
    products.forEach(product => {
        if (productTemp[product.id] === undefined) {
            productTemp[product.id] = 'DINGIN';
        }
    });
    
    container.innerHTML = products.map(product => {
        let defaultSize = 'B';
        if (!product.onlySizeB) {
            defaultSize = productSizes[product.id] || 'K';
        }
        const activeSize = defaultSize;
        const price = getProductPrice(product, activeSize);
        const isKActive = (activeSize === 'K' && !product.onlySizeB);
        const isBActive = (activeSize === 'B');
        const showSizeOptions = !product.onlySizeB;
        const showToppings = !product.noToppings;
        const currentTemp = productTemp[product.id] || 'DINGIN';
        
        const hotButtonClass = currentTemp === 'PANAS' 
            ? 'bg-[#111111] text-white border-[#111111]' 
            : 'bg-white text-neutral-600 border-neutral-200 hover:bg-neutral-50';
        const coldButtonClass = currentTemp === 'DINGIN' 
            ? 'bg-[#111111] text-white border-[#111111]' 
            : 'bg-white text-neutral-600 border-neutral-200 hover:bg-neutral-50';
        
        // Gunakan normalizeImagePath untuk memastikan path gambar benar saat render
        const imageSrc = normalizeImagePath(product.image);
        
        return `<div class="product-card group bg-white rounded-[1.75rem] border border-neutral-100 shadow-sm p-3.5 hover:shadow-xl hover:translate-y-[-6px] transition-all duration-300 flex flex-col justify-between">
            <div>
                <div class="product-image-container relative w-full aspect-square bg-[#FBFBFB] rounded-[18px] mb-4 flex items-center justify-center overflow-hidden">
                    ${product.isBestSeller ? '<span class="absolute top-2.5 left-2.5 z-20 bg-neutral-900 text-[8px] font-extrabold text-white px-2 py-0.5 rounded-full shadow-sm">Terlaris</span>' : ''}
                    ${product.onlySizeB ? '<span class="absolute top-2.5 right-2.5 z-20 bg-amber-600 text-[8px] font-extrabold text-white px-2 py-0.5 rounded-full shadow-sm">Only Size B</span>' : ''}
                    <img src="${imageSrc}" alt="${product.name}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onerror="this.src='https://placehold.co/600x800/1a1a1a/white?text=Image'">
                </div>
                <div class="text-left px-1">
                    <h3 class="font-bold text-neutral-900 text-xs mb-1 truncate">${product.name}</h3>
                    <p class="text-neutral-500 text-[10px] leading-relaxed line-clamp-2 mb-3">${product.description}</p>
                </div>
            </div>
            <div class="border-t border-neutral-100 pt-3 flex flex-col gap-2">
                <div class="flex items-center justify-between gap-2">
                    ${showSizeOptions ? `
                    <div class="flex items-center space-x-0.5 bg-neutral-50 rounded-full p-0.5 border">
                        <button onclick="setProductSize('${product.id}', 'K')" data-product="${product.id}" data-size="K" class="size-btn-${product.id} px-2 py-1 rounded-full text-[9px] font-extrabold transition-all ${isKActive ? 'bg-[#111111] text-white shadow-sm' : 'text-[#555555] hover:text-[#111111]'}">K</button>
                        <button onclick="setProductSize('${product.id}', 'B')" data-product="${product.id}" data-size="B" class="size-btn-${product.id} px-2 py-1 rounded-full text-[9px] font-extrabold transition-all ${isBActive ? 'bg-[#111111] text-white shadow-sm' : 'text-[#555555] hover:text-[#111111]'}">B</button>
                    </div>
                    ` : `
                    <div class="flex items-center space-x-0.5 bg-neutral-50 rounded-full p-0.5 border">
                        <button class="px-2 py-1 rounded-full text-[9px] font-extrabold bg-[#111111] text-white shadow-sm">B Only</button>
                    </div>
                    `}
                    <div class="text-right font-mono font-bold text-[11px]">Rp ${price.toLocaleString('id-ID')}</div>
                </div>
                
                <div class="flex gap-2 mt-1">
                    <button onclick="setProductTemp('${product.id}', 'PANAS')" id="temp-hot-${product.id}" class="temp-btn-${product.id} flex-1 py-1.5 rounded-lg text-[8px] font-bold transition-all border ${hotButtonClass}">🔥 Panas</button>
                    <button onclick="setProductTemp('${product.id}', 'DINGIN')" id="temp-cold-${product.id}" class="temp-btn-${product.id} flex-1 py-1.5 rounded-lg text-[8px] font-bold transition-all border ${coldButtonClass}">❄️ Dingin</button>
                </div>
                
                ${showToppings ? `
                <div class="flex flex-wrap gap-2 mt-1">
                    <label class="flex items-center gap-1 text-[8px] font-medium text-neutral-600 bg-neutral-50 px-2 py-1 rounded-full cursor-pointer hover:bg-neutral-100 transition-colors">
                        <input type="checkbox" id="topping-boba-${product.id}" class="w-3 h-3 accent-[#111111]" onchange="updateToppingSelection('${product.id}')">
                        <span>⚫️ Boba +3k</span>
                    </label>
                    <label class="flex items-center gap-1 text-[8px] font-medium text-neutral-600 bg-neutral-50 px-2 py-1 rounded-full cursor-pointer hover:bg-neutral-100 transition-colors">
                        <input type="checkbox" id="topping-creamcheese-${product.id}" class="w-3 h-3 accent-[#111111]" onchange="updateToppingSelection('${product.id}')">
                        <span>🧀 Cream Cheese +5k</span>
                    </label>
                </div>
                ` : `
                <div class="flex flex-wrap gap-2 mt-1">
                    <span class="text-[8px] font-medium text-neutral-400 bg-neutral-50 px-2 py-1 rounded-full">🚫 Tanpa Topping</span>
                </div>
                `}
                
                <button onclick="addToCartFromCard('${product.id}', '${activeSize}')" class="w-full rounded-full flex items-center justify-center gap-1 text-[9px] font-extrabold py-2 bg-[#111111] hover:bg-neutral-800 text-white transition-all mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                    <span>Pesan Sekarang</span>
                </button>
            </div>
        </div>`;
    }).join('');
}

function updateToppingSelection(productId) {}

function setProductTemp(productId, temp) {
    productTemp[productId] = temp;
    
    const hotBtn = document.getElementById(`temp-hot-${productId}`);
    const coldBtn = document.getElementById(`temp-cold-${productId}`);
    
    if (hotBtn && coldBtn) {
        if (temp === 'PANAS') {
            hotBtn.classList.remove('bg-white', 'text-neutral-600', 'border-neutral-200', 'hover:bg-neutral-50');
            hotBtn.classList.add('bg-[#111111]', 'text-white', 'border-[#111111]');
            
            coldBtn.classList.remove('bg-[#111111]', 'text-white', 'border-[#111111]');
            coldBtn.classList.add('bg-white', 'text-neutral-600', 'border-neutral-200', 'hover:bg-neutral-50');
        } else {
            coldBtn.classList.remove('bg-white', 'text-neutral-600', 'border-neutral-200', 'hover:bg-neutral-50');
            coldBtn.classList.add('bg-[#111111]', 'text-white', 'border-[#111111]');
            
            hotBtn.classList.remove('bg-[#111111]', 'text-white', 'border-[#111111]');
            hotBtn.classList.add('bg-white', 'text-neutral-600', 'border-neutral-200', 'hover:bg-neutral-50');
        }
    }
}

function addToCartFromCard(productId, size) {
    const product = productsData.find(p => p.id === productId);
    const temperature = productTemp[productId] || 'DINGIN';
    
    let finalSize = size;
    if (product && product.onlySizeB) finalSize = 'B';
    
    let bobaChecked = false;
    let creamCheeseChecked = false;
    
    if (!product || !product.noToppings) {
        bobaChecked = document.getElementById(`topping-boba-${productId}`)?.checked || false;
        creamCheeseChecked = document.getElementById(`topping-creamcheese-${productId}`)?.checked || false;
    }
    
    const toppings = { boba: bobaChecked, creamCheese: creamCheeseChecked };
    addToCart(productId, finalSize, temperature, toppings);
}

function renderCampaigns() {
    const container = document.getElementById('campaigns-grid');
    if (!container) return;
    container.innerHTML = campaignsData.map(camp => {
        const imageSrc = normalizeImagePath(camp.image);
        return `<div class="group relative rounded-[2rem] bg-[#1C1C1C] overflow-hidden shadow-lg flex flex-col transition-all duration-500 hover:translate-y-[-8px]"><div class="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#1C1C1C]/95 to-[#1C1C1C]/90"></div><div class="relative z-10 p-6 flex flex-col h-full"><div class="flex items-start justify-between mb-4"><div><span class="text-[9px] font-bold text-neutral-400 uppercase block mb-1">${camp.subTitle}</span><h3 class="text-base font-bold text-white">${camp.title}</h3></div><span class="text-[9px] font-extrabold text-neutral-900 bg-white px-2.5 py-1 rounded-full">${camp.badge}</span></div><div class="relative mb-4"><div class="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-white/5"><img src="${imageSrc}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onerror="this.src='https://placehold.co/600x800/1a1a1a/white?text=Image'"></div></div><div class="mt-auto"><div class="border-t border-white/10 pt-4"><div class="font-mono text-[10px] text-zinc-300 mb-3 flex justify-between"><span>${camp.highlightText}</span><span>EDISI: 2026</span></div><p class="text-neutral-200/90 text-xs leading-relaxed line-clamp-3 mb-4">${camp.description}</p><button onclick="scrollToMenu()" class="w-full bg-white hover:bg-neutral-100 text-[#111111] text-xs font-bold py-2.5 rounded-xl transition-all">Temukan Rasa</button></div></div></div></div>`;
    }).join('');
}

function renderTestimonials() {
    const container = document.getElementById('testimonials-grid');
    if (!container) return;
    container.innerHTML = testimonialsData.map(test => {
        const imageSrc = normalizeImagePath(test.productImage);
        return `<div class="bg-white rounded-3xl border border-neutral-100 shadow-xs hover:shadow-xl transition-all p-6 flex flex-col justify-between"><div><div class="bg-[#F8F8F8] rounded-2xl p-4 mb-6 flex items-center gap-2"><div class="aspect-[3/4] w-[30%] rounded-xl overflow-hidden shadow-xs border bg-white -rotate-6"><img src="${imageSrc}" class="w-full h-full object-cover" onerror="this.src='https://placehold.co/400x500/1a1a1a/white?text=Image'"></div><div class="aspect-[3/4] w-[35%] rounded-xl overflow-hidden shadow-md border bg-white z-10 scale-105"><img src="${imageSrc}" class="w-full h-full object-cover" onerror="this.src='https://placehold.co/400x500/1a1a1a/white?text=Image'"></div><div class="aspect-[3/4] w-[30%] rounded-xl overflow-hidden shadow-xs border bg-white rotate-6"><img src="${imageSrc}" class="w-full h-full object-cover" onerror="this.src='https://placehold.co/400x500/1a1a1a/white?text=Image'"></div></div><div class="flex items-center gap-1 mb-4">${'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" class="w-3.5 h-3.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>'.repeat(test.ratingValue)}</div><h3 class="text-sm font-extrabold text-[#111111] mb-3">"${test.reviewTitle}"</h3><p class="text-neutral-500 text-xs leading-relaxed mb-6">${test.reviewText}</p></div><div class="border-t border-neutral-100 pt-4"><div class="flex justify-between"><div><h4 class="font-bold text-neutral-900 text-xs">${test.customerName}</h4><span class="text-[10px] text-neutral-400 flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>${test.city}</span></div><span class="text-[10px] text-neutral-400 flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>${test.date}</span></div></div></div>`;
    }).join('');
}

function renderInstagramPosts() {
    const container = document.getElementById('instagram-grid');
    if (!container) return;
    container.innerHTML = instagramPostsData.map(post => `<button onclick="openLightbox('${post.id}')" class="group relative aspect-square rounded-2xl overflow-hidden shadow-xs border cursor-pointer"><img src="${post.image}" class="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" onerror="this.src='https://placehold.co/600x600/1a1a1a/white?text=Image'"><div class="absolute inset-0 bg-[#111111]/40 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white transition-opacity"><div class="flex items-center space-x-6"><span class="flex items-center gap-1 font-mono text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white" stroke="none"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>${post.likes}</span><span class="flex items-center gap-1 font-mono text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white" stroke="none"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>${post.comments}</span></div><span class="absolute bottom-4 left-4 right-4 text-[10px] text-zinc-100 italic truncate">${post.caption}</span></div></button>`).join('');
    window.instagramPostsData = instagramPostsData;
}

// ==================== CART FUNCTIONS ====================
function getSubtotal() {
    return cartItems.reduce((sum, item) => {
        const itemTotal = (item.basePrice + item.toppingPrice) * item.quantity;
        return sum + itemTotal;
    }, 0);
}

function updateCartUI() {
    const count = cartItems.reduce((s, i) => s + i.quantity, 0);
    const badge = document.getElementById('cart-count-badge');
    const checkoutCount = document.getElementById('checkout-item-count');
    const checkoutLength = document.getElementById('checkout-items-length');
    const floatingBtn = document.getElementById('cart-floating-btn');
    
    if (badge) badge.textContent = count;
    if (checkoutCount) checkoutCount.textContent = count;
    if (checkoutLength) checkoutLength.textContent = `${cartItems.length} menu`;
    if (floatingBtn) floatingBtn.classList.toggle('hidden', count === 0);
    
    renderCartItems();
    updateCartTotals();
}

function renderCartItems() {
    const container = document.getElementById('cart-items-list');
    const footer = document.getElementById('cart-footer');
    if (!container) return;
    if (!cartItems.length) {
        container.innerHTML = `<div class="text-center py-16"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="mx-auto text-neutral-300"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg><h4 class="font-bold text-xs text-neutral-400 mt-2">Nampan Anda Masih Kosong</h4></div>`;
        if (footer) footer.classList.add('hidden');
        return;
    }
    
    container.innerHTML = cartItems.map(item => {
        const totalItemPrice = (item.basePrice + item.toppingPrice) * item.quantity;
        let toppingsText = '';
        if (item.toppings.boba) toppingsText += 'Boba ';
        if (item.toppings.creamCheese) toppingsText += 'Cream Cheese ';
        if (!toppingsText) toppingsText = 'Tanpa Topping';
        const tempIcon = item.temperature === 'PANAS' ? '🔥' : '❄️';
        const imageSrc = normalizeImagePath(item.product.image);
        
        return `<div class="p-3 bg-neutral-50 rounded-xl flex gap-3"><div class="w-14 h-14 bg-white rounded-lg p-1"><img src="${imageSrc}" class="w-full h-full object-contain" onerror="this.src='https://placehold.co/100x100/1a1a1a/white?text=Image'"></div><div class="flex-grow"><div class="flex justify-between"><h4 class="font-bold text-xs">${item.product.name}</h4><button onclick="removeCartItem('${item.id}')" class="text-neutral-400 hover:text-red-500"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></button></div><div class="flex flex-wrap gap-1 mt-1"><span class="bg-neutral-900 text-white px-1.5 py-0.5 rounded text-[8px]">${item.size === 'B' ? 'Besar' : 'Kecil'}</span><span class="bg-neutral-200 text-neutral-800 px-1.5 py-0.5 rounded text-[8px]">${tempIcon} ${item.temperature}</span>${item.toppings.boba ? '<span class="bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded text-[8px]">+Boba</span>' : ''}${item.toppings.creamCheese ? '<span class="bg-pink-100 text-pink-800 px-1.5 py-0.5 rounded text-[8px]">+Cream Cheese</span>' : ''}</div><div class="flex justify-between mt-2"><div class="flex items-center bg-white rounded border"><button onclick="updateQuantity('${item.id}', -1)" class="w-6 h-6 flex items-center justify-center">-</button><span class="w-6 text-center text-xs">${item.quantity}</span><button onclick="updateQuantity('${item.id}', 1)" class="w-6 h-6 flex items-center justify-center">+</button></div><span class="font-mono text-xs font-bold">Rp ${totalItemPrice.toLocaleString()}</span></div></div></div>`;
    }).join('');
    if (footer) footer.classList.remove('hidden');
}

function updateCartTotals() {
    const subtotal = getSubtotal();
    const deliveryFee = getDeliveryFee();
    const total = subtotal + deliveryFee;
    
    const subtotalEl = document.getElementById('cart-subtotal');
    const taxEl = document.getElementById('cart-tax');
    const totalEl = document.getElementById('cart-total');
    const checkoutTotal = document.getElementById('checkout-total');
    
    if (subtotalEl) subtotalEl.textContent = `Rp ${subtotal.toLocaleString()}`;
    if (taxEl) taxEl.textContent = deliveryFee > 0 ? `Rp ${deliveryFee.toLocaleString()}` : 'Rp 0';
    if (totalEl) totalEl.textContent = `Rp ${total.toLocaleString()}`;
    if (checkoutTotal) checkoutTotal.textContent = `Rp ${total.toLocaleString()}`;
    
    window.cartSubtotal = subtotal;
    window.cartDeliveryFee = deliveryFee;
    window.cartTotal = total;
}

function updateQuantity(itemId, delta) {
    const item = cartItems.find(i => i.id === itemId);
    if (item) {
        const newQty = item.quantity + delta;
        if (newQty >= 1) item.quantity = newQty;
        else cartItems = cartItems.filter(i => i.id !== itemId);
        updateCartUI();
    }
}

function removeCartItem(itemId) { cartItems = cartItems.filter(i => i.id !== itemId); updateCartUI(); }
function openCartDrawer() { const drawer = document.getElementById('cart-drawer'); if (drawer) { drawer.classList.remove('hidden'); drawer.classList.add('flex'); } renderCartItems(); }
function closeCartDrawer() { const drawer = document.getElementById('cart-drawer'); if (drawer) { drawer.classList.add('hidden'); drawer.classList.remove('flex'); } }

// ==================== CHECKOUT FUNCTIONS ====================
function openCheckoutModal() {
    if (cartItems.length) {
        closeCartDrawer();
        const distanceInput = document.getElementById('delivery-distance');
        const statusEl = document.getElementById('location-status-wa');
        const feeDisplay = document.getElementById('delivery-fee-display');
        const resetBtn = document.getElementById('reset-permission-btn');
        if (distanceInput) distanceInput.value = '';
        if (statusEl) statusEl.classList.add('hidden');
        if (feeDisplay) feeDisplay.classList.add('hidden');
        if (resetBtn) resetBtn.classList.add('hidden');
        userLocation = null;
        updateCartTotals();
        const modal = document.getElementById('checkout-modal');
        if (modal) { modal.classList.remove('hidden'); modal.classList.add('flex'); }
    }
}
function closeCheckoutModal() { const modal = document.getElementById('checkout-modal'); if (modal) { modal.classList.add('hidden'); modal.classList.remove('flex'); } }

function checkoutViaWhatsApp() {
    if (cartItems.length === 0) return;
    const customerName = document.getElementById('customer-name')?.value || 'Pelanggan';
    const distance = parseFloat(document.getElementById('delivery-distance')?.value) || 0;
    const deliveryFee = calculateDeliveryFee(distance);
    
    const itemsText = cartItems.map((item, idx) => {
        const itemTotal = (item.basePrice + item.toppingPrice) * item.quantity;
        let toppingsText = '';
        if (item.toppings.boba) toppingsText += '+Boba ';
        if (item.toppings.creamCheese) toppingsText += '+Cream Cheese ';
        const tempIcon = item.temperature === 'PANAS' ? '🔥 Panas' : '❄️ Dingin';
        return `${idx+1}. *${item.product.name}* (${item.size === 'B' ? 'Besar' : 'Kecil'}, ${tempIcon}${toppingsText ? ', ' + toppingsText : ''}) x${item.quantity} - Rp ${itemTotal.toLocaleString()}`;
    }).join('\n');
    
    const subtotal = getSubtotal();
    const total = subtotal + deliveryFee;
    
    let feeText = '';
    if (deliveryFee > 0) {
        if (distance <= 3) feeText = `Ongkir (${distance} km): Rp ${deliveryFee.toLocaleString()} (flat rate Rp3.000)`;
        else { const extraKm = Math.ceil(distance - 3); feeText = `Ongkir (${distance} km): Rp ${deliveryFee.toLocaleString()} (Rp3.000 + ${extraKm} km × Rp2.000)`; }
    } else feeText = 'Ongkir: GRATIS (Ambil Sendiri)';
    
    const msg = `Halo THE. C DRINKS! 🥤✨\n\nSaya ingin memesan:\n${itemsText}\n\n${feeText}\nSubtotal: Rp ${subtotal.toLocaleString()}\nTotal: Rp ${total.toLocaleString()}\n\nNama: ${customerName}\nMetode: ${deliveryFee > 0 ? 'WhatsApp Delivery' : 'Ambil di Toko'}`;
    const waUrl = `https://wa.me/6282299999035?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank');
    processCheckout('whatsapp', customerName, deliveryFee, distance);
}

function checkoutViaGrabFood() { if (cartItems.length === 0) return; window.open('https://food.grab.com/id/id/', '_blank'); processCheckout('grab', 'Pelanggan GrabFood', 0, 0); }
function checkoutViaShopeeFood() { if (cartItems.length === 0) return; window.open('https://shopee.co.id/', '_blank'); processCheckout('shopee', 'Pelanggan ShopeeFood', 0, 0); }
function checkoutViaStorePickup() { if (cartItems.length === 0) return; const customerName = document.getElementById('pickup-name')?.value || 'Pelanggan'; processCheckout('pickup', customerName, 0, 0); }

function processCheckout(type, customerName, deliveryFee, distance) {
    const subtotal = getSubtotal();
    const total = subtotal + deliveryFee;
    receiptData = { items: [...cartItems], orderType: type, customerName, distance, deliveryFee, receiptId: `TC-${type.toUpperCase()}-${Math.floor(100000 + Math.random() * 900000)}`, subtotal, total };
    closeCheckoutModal();
    showReceipt();
    cartItems = [];
    updateCartUI();
    closeCartDrawer();
    const distanceInput = document.getElementById('delivery-distance');
    const feeDisplay = document.getElementById('delivery-fee-display');
    const statusEl = document.getElementById('location-status-wa');
    const resetBtn = document.getElementById('reset-permission-btn');
    if (distanceInput) distanceInput.value = '';
    if (feeDisplay) feeDisplay.classList.add('hidden');
    if (statusEl) statusEl.classList.add('hidden');
    if (resetBtn) resetBtn.classList.add('hidden');
    userLocation = null;
}

function showReceipt() {
    document.getElementById('receipt-id').textContent = `ID RESI: ${receiptData.receiptId}`;
    const badge = document.getElementById('receipt-badge');
    if (receiptData.orderType === 'grab') { badge.textContent = 'Order via GrabFood'; badge.className = 'text-[9px] bg-emerald-100 text-[#00B14F] font-bold px-2 py-0.5 rounded-full mb-2 inline-block'; }
    else if (receiptData.orderType === 'shopee') { badge.textContent = 'Order via ShopeeFood'; badge.className = 'text-[9px] bg-orange-100 text-[#EE4D2D] font-bold px-2 py-0.5 rounded-full mb-2 inline-block'; }
    else if (receiptData.orderType === 'whatsapp' && receiptData.deliveryFee > 0) { badge.textContent = `WhatsApp Delivery (Ongkir Rp${receiptData.deliveryFee.toLocaleString()})`; badge.className = 'text-[9px] bg-emerald-100 text-[#128C7E] font-bold px-2 py-0.5 rounded-full mb-2 inline-block'; }
    else { badge.textContent = 'Ambil di Toko (GRATIS)'; badge.className = 'text-[9px] bg-neutral-100 text-[#111111] font-extrabold px-2 py-0.5 rounded-full mb-2 inline-block'; }
    
    document.getElementById('receipt-items').innerHTML = receiptData.items.map(item => {
        const itemTotal = (item.basePrice + item.toppingPrice) * item.quantity;
        let toppingsText = '';
        if (item.toppings.boba) toppingsText += '+Boba ';
        if (item.toppings.creamCheese) toppingsText += '+Cream Cheese ';
        const tempIcon = item.temperature === 'PANAS' ? '🔥' : '❄️';
        return `<div class="flex justify-between text-[10px]"><span>${item.quantity}x ${item.product.name} (${item.size === 'B' ? 'B' : 'K'}, ${tempIcon} ${toppingsText})</span><span>Rp ${itemTotal.toLocaleString()}</span></div>`;
    }).join('');
    
    document.getElementById('receipt-subtotal').textContent = `Rp ${receiptData.subtotal?.toLocaleString() || 0}`;
    const serviceFeeEl = document.getElementById('receipt-service-fee');
    if (serviceFeeEl) {
        if (receiptData.orderType === 'whatsapp' && receiptData.deliveryFee > 0) serviceFeeEl.innerHTML = `<span>Biaya Ongkir (${receiptData.distance} km)</span><span>Rp ${receiptData.deliveryFee?.toLocaleString()}</span>`;
        else if (receiptData.orderType === 'whatsapp') serviceFeeEl.innerHTML = '<span>Biaya Ongkir</span><span class="text-green-600">GRATIS (Ambil Sendiri)</span>';
        else if (receiptData.orderType === 'grab' || receiptData.orderType === 'shopee') serviceFeeEl.innerHTML = '<span>Biaya Ongkir</span><span class="text-blue-600">Dari Aplikasi Mitra</span>';
        else serviceFeeEl.innerHTML = '<span>Biaya Ongkir</span><span class="text-green-600">GRATIS</span>';
    }
    document.getElementById('receipt-total').textContent = `Rp ${receiptData.total?.toLocaleString() || 0}`;
    let message = '';
    if (receiptData.orderType === 'grab') message = 'Pesanan dialihkan ke GrabFood. Ongkir akan dihitung oleh aplikasi Grab.';
    else if (receiptData.orderType === 'shopee') message = 'Pesanan dialihkan ke ShopeeFood. Ongkir akan dihitung oleh aplikasi Shopee.';
    else if (receiptData.orderType === 'whatsapp' && receiptData.deliveryFee > 0) message = `Pesanan akan segera diproses dan dikirim dengan ongkir Rp${receiptData.deliveryFee.toLocaleString()}. Terima kasih!`;
    else message = `Tunjukkan struk digital atas nama <strong>${receiptData.customerName}</strong> ke kasir.`;
    document.getElementById('receipt-message').innerHTML = message;
    const modal = document.getElementById('receipt-modal');
    if (modal) { modal.classList.remove('hidden'); modal.classList.add('flex'); }
}

function closeReceiptModal() { const modal = document.getElementById('receipt-modal'); if (modal) { modal.classList.add('hidden'); modal.classList.remove('flex'); } receiptData = null; }
function downloadReceipt() { const el = document.getElementById('receipt-card'); if (el && typeof html2canvas !== 'undefined') { html2canvas(el, { scale: 2.5 }).then(c => { const a = document.createElement('a'); a.download = `Struk-${receiptData?.receiptId || 'THE-C'}.png`; a.href = c.toDataURL(); a.click(); }).catch(console.error); } closeReceiptModal(); }

// ==================== ADMIN PANEL FUNCTIONS ====================
function openAdminPanel() {
    const passwordModal = document.getElementById('admin-password-modal');
    if (passwordModal) {
        passwordModal.classList.remove('hidden');
        passwordModal.classList.add('flex');
        document.getElementById('admin-password-input').value = '';
        document.getElementById('admin-password-input').focus();
    }
}

function closeAdminPanel() {
    document.getElementById('admin-modal').classList.add('hidden');
    document.getElementById('admin-modal').classList.remove('flex');
}

function verifyAdminPassword() {
    const password = document.getElementById('admin-password-input').value;
    const hashedPassword = CryptoJS.SHA256(password).toString();
    const correctHash = 'e6b8b7f8e7d9c1a3f2e4d5c6b7a8f9e0d1c2b3a4f5e6d7c8b9a0f1e2d3c4b5a6';
    
    if (hashedPassword === correctHash) {
        closePasswordModal();
        document.getElementById('admin-modal').classList.remove('hidden');
        document.getElementById('admin-modal').classList.add('flex');
        refreshAdminLists();
    } else {
        alert('Password salah! Akses ditolak.');
        document.getElementById('admin-password-input').value = '';
        document.getElementById('admin-password-input').focus();
    }
}

function closePasswordModal() {
    const modal = document.getElementById('admin-password-modal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
}

function setAdminTab(tab) {
    const tabs = ['products', 'campaigns', 'testimonials', 'instagram'];
    tabs.forEach(t => {
        const panel = document.getElementById(`admin-${t}-panel`);
        const btn = document.getElementById(`admin-tab-${t}`);
        if (panel) panel.classList.add('hidden');
        if (btn) {
            btn.classList.remove('border-[#111111]', 'text-[#111111]');
            btn.classList.add('border-transparent', 'text-neutral-500');
        }
    });
    
    const activePanel = document.getElementById(`admin-${tab}-panel`);
    const activeBtn = document.getElementById(`admin-tab-${tab}`);
    if (activePanel) activePanel.classList.remove('hidden');
    if (activeBtn) {
        activeBtn.classList.remove('border-transparent', 'text-neutral-500');
        activeBtn.classList.add('border-[#111111]', 'text-[#111111]');
    }
}

function refreshAdminLists() {
    renderAdminProducts();
    renderAdminCampaigns();
    renderAdminTestimonials();
    renderAdminInstagram();
}

function renderAdminProducts() {
    const container = document.getElementById('admin-products-list');
    if (!container) return;
    container.innerHTML = productsData.map(product => `
        <div class="bg-neutral-50 rounded-xl p-3 flex justify-between items-center">
            <div class="flex-1">
                <div class="font-bold text-xs">${product.name}</div>
                <div class="text-[9px] text-neutral-500">${product.category} | Rp ${product.priceK.toLocaleString()} (K) / Rp ${product.priceB.toLocaleString()} (B)</div>
            </div>
            <div class="flex gap-1">
                <button onclick="editProduct('${product.id}')" class="px-2 py-1 bg-blue-500 text-white rounded text-[9px]">Edit</button>
                <button onclick="deleteProduct('${product.id}')" class="px-2 py-1 bg-red-500 text-white rounded text-[9px]">Hapus</button>
            </div>
        </div>
    `).join('');
}

function renderAdminCampaigns() {
    const container = document.getElementById('admin-campaigns-list');
    if (!container) return;
    container.innerHTML = campaignsData.map(campaign => `
        <div class="bg-neutral-50 rounded-xl p-3 flex justify-between items-center">
            <div class="flex-1">
                <div class="font-bold text-xs">${campaign.title}</div>
                <div class="text-[9px] text-neutral-500">${campaign.subTitle}</div>
            </div>
            <div class="flex gap-1">
                <button onclick="editCampaign('${campaign.id}')" class="px-2 py-1 bg-blue-500 text-white rounded text-[9px]">Edit</button>
                <button onclick="deleteCampaign('${campaign.id}')" class="px-2 py-1 bg-red-500 text-white rounded text-[9px]">Hapus</button>
            </div>
        </div>
    `).join('');
}

function renderAdminTestimonials() {
    const container = document.getElementById('admin-testimonials-list');
    if (!container) return;
    container.innerHTML = testimonialsData.map(testimonial => `
        <div class="bg-neutral-50 rounded-xl p-3 flex justify-between items-center">
            <div class="flex-1">
                <div class="font-bold text-xs">${testimonial.customerName}</div>
                <div class="text-[9px] text-neutral-500">"${testimonial.reviewTitle.substring(0, 50)}..."</div>
            </div>
            <div class="flex gap-1">
                <button onclick="editTestimonial('${testimonial.id}')" class="px-2 py-1 bg-blue-500 text-white rounded text-[9px]">Edit</button>
                <button onclick="deleteTestimonial('${testimonial.id}')" class="px-2 py-1 bg-red-500 text-white rounded text-[9px]">Hapus</button>
            </div>
        </div>
    `).join('');
}

function renderAdminInstagram() {
    const container = document.getElementById('admin-instagram-list');
    if (!container) return;
    container.innerHTML = instagramPostsData.map(post => `
        <div class="bg-neutral-50 rounded-xl p-3 flex justify-between items-center">
            <div class="flex-1">
                <div class="font-bold text-xs">Post ${post.id}</div>
                <div class="text-[9px] text-neutral-500">${post.caption.substring(0, 50)}...</div>
            </div>
            <div class="flex gap-1">
                <button onclick="editInstagram('${post.id}')" class="px-2 py-1 bg-blue-500 text-white rounded text-[9px]">Edit</button>
                <button onclick="deleteInstagram('${post.id}')" class="px-2 py-1 bg-red-500 text-white rounded text-[9px]">Hapus</button>
            </div>
        </div>
    `).join('');
}

// ==================== CRUD OPERATIONS ====================
function showAddProductForm() {
    currentFormType = 'product';
    currentEditId = null;
    document.getElementById('form-title').textContent = 'Tambah Produk Baru';
    document.getElementById('form-fields').innerHTML = `
        <input type="text" id="form-name" placeholder="Nama Produk" class="w-full px-3 py-2 text-xs border rounded-lg mb-2">
        <textarea id="form-desc" placeholder="Deskripsi" class="w-full px-3 py-2 text-xs border rounded-lg mb-2" rows="2"></textarea>
        <input type="text" id="form-category" placeholder="Kategori (chocolate/tea/coffee/fruit)" class="w-full px-3 py-2 text-xs border rounded-lg mb-2">
        <input type="text" id="form-image" placeholder="Nama file gambar (contoh: cokelat-original.jpeg)" class="w-full px-3 py-2 text-xs border rounded-lg mb-2" value="default.jpeg">
        <input type="number" id="form-priceK" placeholder="Harga Kecil (Rp)" class="w-full px-3 py-2 text-xs border rounded-lg mb-2">
        <input type="number" id="form-priceB" placeholder="Harga Besar (Rp)" class="w-full px-3 py-2 text-xs border rounded-lg mb-2">
        <label class="flex items-center gap-2 mb-2"><input type="checkbox" id="form-bestSeller"> Best Seller</label>
        <label class="flex items-center gap-2 mb-2"><input type="checkbox" id="form-onlySizeB"> Only Size B</label>
        <label class="flex items-center gap-2 mb-2"><input type="checkbox" id="form-noToppings"> No Toppings</label>
        <input type="text" id="form-accentColor" placeholder="Warna Aksen (contoh: #4A2C2A)" class="w-full px-3 py-2 text-xs border rounded-lg">
    `;
    document.getElementById('form-modal').classList.remove('hidden');
    document.getElementById('form-modal').classList.add('flex');
}

function editProduct(id) {
    const product = productsData.find(p => p.id === id);
    if (!product) return;
    currentFormType = 'product';
    currentEditId = id;
    document.getElementById('form-title').textContent = 'Edit Produk';
    document.getElementById('form-fields').innerHTML = `
        <input type="text" id="form-name" value="${product.name}" placeholder="Nama Produk" class="w-full px-3 py-2 text-xs border rounded-lg mb-2">
        <textarea id="form-desc" placeholder="Deskripsi" class="w-full px-3 py-2 text-xs border rounded-lg mb-2" rows="2">${product.description}</textarea>
        <input type="text" id="form-category" value="${product.category}" placeholder="Kategori" class="w-full px-3 py-2 text-xs border rounded-lg mb-2">
        <input type="text" id="form-image" value="${product.image?.replace('./', '').replace('/img/', '') || ''}" placeholder="Nama file gambar" class="w-full px-3 py-2 text-xs border rounded-lg mb-2">
        <input type="number" id="form-priceK" value="${product.priceK}" placeholder="Harga Kecil" class="w-full px-3 py-2 text-xs border rounded-lg mb-2">
        <input type="number" id="form-priceB" value="${product.priceB}" placeholder="Harga Besar" class="w-full px-3 py-2 text-xs border rounded-lg mb-2">
        <label class="flex items-center gap-2 mb-2"><input type="checkbox" id="form-bestSeller" ${product.isBestSeller ? 'checked' : ''}> Best Seller</label>
        <label class="flex items-center gap-2 mb-2"><input type="checkbox" id="form-onlySizeB" ${product.onlySizeB ? 'checked' : ''}> Only Size B</label>
        <label class="flex items-center gap-2 mb-2"><input type="checkbox" id="form-noToppings" ${product.noToppings ? 'checked' : ''}> No Toppings</label>
        <input type="text" id="form-accentColor" value="${product.accentColor || '#4A2C2A'}" placeholder="Warna Aksen" class="w-full px-3 py-2 text-xs border rounded-lg">
    `;
    document.getElementById('form-modal').classList.remove('hidden');
    document.getElementById('form-modal').classList.add('flex');
}

async function deleteProduct(id) {
    if (confirm('Yakin ingin menghapus produk ini?')) {
        productsData = productsData.filter(p => p.id !== id);
        await saveProducts();
        renderProductsByCategory(activeCategory);
        renderAdminProducts();
        showNotification('Produk berhasil dihapus!', 'success');
    }
}

// Campaign CRUD
function showAddCampaignForm() {
    currentFormType = 'campaign';
    currentEditId = null;
    document.getElementById('form-title').textContent = 'Tambah Promo Baru';
    document.getElementById('form-fields').innerHTML = `
        <input type="text" id="form-title-camp" placeholder="Judul Promo" class="w-full px-3 py-2 text-xs border rounded-lg mb-2">
        <input type="text" id="form-subtitle" placeholder="Subtitle" class="w-full px-3 py-2 text-xs border rounded-lg mb-2">
        <input type="text" id="form-badge" placeholder="Badge (Edisi Terbatas/Terlaris)" class="w-full px-3 py-2 text-xs border rounded-lg mb-2">
        <textarea id="form-desc-camp" placeholder="Deskripsi" class="w-full px-3 py-2 text-xs border rounded-lg mb-2" rows="3"></textarea>
        <input type="text" id="form-image-camp" placeholder="Nama file gambar" class="w-full px-3 py-2 text-xs border rounded-lg mb-2">
        <input type="text" id="form-highlight" placeholder="Highlight Text" class="w-full px-3 py-2 text-xs border rounded-lg mb-2">
        <input type="text" id="form-accentColor-camp" placeholder="Warna Aksen" class="w-full px-3 py-2 text-xs border rounded-lg">
    `;
    document.getElementById('form-modal').classList.remove('hidden');
    document.getElementById('form-modal').classList.add('flex');
}

function editCampaign(id) {
    const campaign = campaignsData.find(c => c.id === id);
    if (!campaign) return;
    currentFormType = 'campaign';
    currentEditId = id;
    document.getElementById('form-title').textContent = 'Edit Promo';
    document.getElementById('form-fields').innerHTML = `
        <input type="text" id="form-title-camp" value="${campaign.title}" placeholder="Judul Promo" class="w-full px-3 py-2 text-xs border rounded-lg mb-2">
        <input type="text" id="form-subtitle" value="${campaign.subTitle}" placeholder="Subtitle" class="w-full px-3 py-2 text-xs border rounded-lg mb-2">
        <input type="text" id="form-badge" value="${campaign.badge}" placeholder="Badge" class="w-full px-3 py-2 text-xs border rounded-lg mb-2">
        <textarea id="form-desc-camp" placeholder="Deskripsi" class="w-full px-3 py-2 text-xs border rounded-lg mb-2" rows="3">${campaign.description}</textarea>
        <input type="text" id="form-image-camp" value="${campaign.image?.replace('./', '').replace('/img/', '') || ''}" placeholder="Nama file gambar" class="w-full px-3 py-2 text-xs border rounded-lg mb-2">
        <input type="text" id="form-highlight" value="${campaign.highlightText}" placeholder="Highlight Text" class="w-full px-3 py-2 text-xs border rounded-lg mb-2">
        <input type="text" id="form-accentColor-camp" value="${campaign.accentColor || '#4A2C2A'}" placeholder="Warna Aksen" class="w-full px-3 py-2 text-xs border rounded-lg">
    `;
    document.getElementById('form-modal').classList.remove('hidden');
    document.getElementById('form-modal').classList.add('flex');
}

async function deleteCampaign(id) {
    if (confirm('Yakin ingin menghapus promo ini?')) {
        campaignsData = campaignsData.filter(c => c.id !== id);
        await saveCampaigns();
        renderCampaigns();
        renderAdminCampaigns();
        showNotification('Promo berhasil dihapus!', 'success');
    }
}

// Testimonial CRUD
function showAddTestimonialForm() {
    currentFormType = 'testimonial';
    currentEditId = null;
    document.getElementById('form-title').textContent = 'Tambah Testimoni Baru';
    document.getElementById('form-fields').innerHTML = `
        <input type="text" id="form-name-test" placeholder="Nama Pelanggan" class="w-full px-3 py-2 text-xs border rounded-lg mb-2">
        <input type="text" id="form-title-test" placeholder="Judul Review" class="w-full px-3 py-2 text-xs border rounded-lg mb-2">
        <textarea id="form-text-test" placeholder="Isi Testimoni" class="w-full px-3 py-2 text-xs border rounded-lg mb-2" rows="3"></textarea>
        <input type="text" id="form-city" placeholder="Kota" class="w-full px-3 py-2 text-xs border rounded-lg mb-2">
        <input type="text" id="form-date" placeholder="Tanggal" class="w-full px-3 py-2 text-xs border rounded-lg mb-2">
        <input type="text" id="form-image-test" placeholder="Nama file gambar produk" class="w-full px-3 py-2 text-xs border rounded-lg mb-2">
        <select id="form-rating" class="w-full px-3 py-2 text-xs border rounded-lg mb-2">
            <option value="5">⭐⭐⭐⭐⭐ (5)</option>
            <option value="4">⭐⭐⭐⭐ (4)</option>
            <option value="3">⭐⭐⭐ (3)</option>
        </select>
    `;
    document.getElementById('form-modal').classList.remove('hidden');
    document.getElementById('form-modal').classList.add('flex');
}

function editTestimonial(id) {
    const testimonial = testimonialsData.find(t => t.id === id);
    if (!testimonial) return;
    currentFormType = 'testimonial';
    currentEditId = id;
    document.getElementById('form-title').textContent = 'Edit Testimoni';
    document.getElementById('form-fields').innerHTML = `
        <input type="text" id="form-name-test" value="${testimonial.customerName}" placeholder="Nama Pelanggan" class="w-full px-3 py-2 text-xs border rounded-lg mb-2">
        <input type="text" id="form-title-test" value="${testimonial.reviewTitle}" placeholder="Judul Review" class="w-full px-3 py-2 text-xs border rounded-lg mb-2">
        <textarea id="form-text-test" placeholder="Isi Testimoni" class="w-full px-3 py-2 text-xs border rounded-lg mb-2" rows="3">${testimonial.reviewText}</textarea>
        <input type="text" id="form-city" value="${testimonial.city}" placeholder="Kota" class="w-full px-3 py-2 text-xs border rounded-lg mb-2">
        <input type="text" id="form-date" value="${testimonial.date}" placeholder="Tanggal" class="w-full px-3 py-2 text-xs border rounded-lg mb-2">
        <input type="text" id="form-image-test" value="${testimonial.productImage?.replace('./', '').replace('/img/', '') || ''}" placeholder="Nama file gambar" class="w-full px-3 py-2 text-xs border rounded-lg mb-2">
        <select id="form-rating" class="w-full px-3 py-2 text-xs border rounded-lg mb-2">
            <option value="5" ${testimonial.ratingValue === 5 ? 'selected' : ''}>⭐⭐⭐⭐⭐ (5)</option>
            <option value="4" ${testimonial.ratingValue === 4 ? 'selected' : ''}>⭐⭐⭐⭐ (4)</option>
            <option value="3" ${testimonial.ratingValue === 3 ? 'selected' : ''}>⭐⭐⭐ (3)</option>
        </select>
    `;
    document.getElementById('form-modal').classList.remove('hidden');
    document.getElementById('form-modal').classList.add('flex');
}

async function deleteTestimonial(id) {
    if (confirm('Yakin ingin menghapus testimoni ini?')) {
        testimonialsData = testimonialsData.filter(t => t.id !== id);
        await saveTestimonials();
        renderTestimonials();
        renderAdminTestimonials();
        showNotification('Testimoni berhasil dihapus!', 'success');
    }
}

// Instagram CRUD
function showAddInstagramForm() {
    currentFormType = 'instagram';
    currentEditId = null;
    document.getElementById('form-title').textContent = 'Tambah Post Instagram';
    document.getElementById('form-fields').innerHTML = `
        <input type="text" id="form-image-ig" placeholder="URL Gambar" class="w-full px-3 py-2 text-xs border rounded-lg mb-2">
        <input type="text" id="form-likes" placeholder="Jumlah Likes (contoh: 1,420)" class="w-full px-3 py-2 text-xs border rounded-lg mb-2">
        <input type="text" id="form-comments" placeholder="Jumlah Comments" class="w-full px-3 py-2 text-xs border rounded-lg mb-2">
        <textarea id="form-caption-ig" placeholder="Caption" class="w-full px-3 py-2 text-xs border rounded-lg mb-2" rows="2"></textarea>
        <select id="form-type" class="w-full px-3 py-2 text-xs border rounded-lg mb-2">
            <option value="photo">Photo</option>
            <option value="video">Video</option>
            <option value="carousel">Carousel</option>
        </select>
    `;
    document.getElementById('form-modal').classList.remove('hidden');
    document.getElementById('form-modal').classList.add('flex');
}

function editInstagram(id) {
    const post = instagramPostsData.find(p => p.id === id);
    if (!post) return;
    currentFormType = 'instagram';
    currentEditId = id;
    document.getElementById('form-title').textContent = 'Edit Post Instagram';
    document.getElementById('form-fields').innerHTML = `
        <input type="text" id="form-image-ig" value="${post.image}" placeholder="URL Gambar" class="w-full px-3 py-2 text-xs border rounded-lg mb-2">
        <input type="text" id="form-likes" value="${post.likes}" placeholder="Jumlah Likes" class="w-full px-3 py-2 text-xs border rounded-lg mb-2">
        <input type="text" id="form-comments" value="${post.comments}" placeholder="Jumlah Comments" class="w-full px-3 py-2 text-xs border rounded-lg mb-2">
        <textarea id="form-caption-ig" placeholder="Caption" class="w-full px-3 py-2 text-xs border rounded-lg mb-2" rows="2">${post.caption}</textarea>
        <select id="form-type" class="w-full px-3 py-2 text-xs border rounded-lg mb-2">
            <option value="photo" ${post.type === 'photo' ? 'selected' : ''}>Photo</option>
            <option value="video" ${post.type === 'video' ? 'selected' : ''}>Video</option>
            <option value="carousel" ${post.type === 'carousel' ? 'selected' : ''}>Carousel</option>
        </select>
    `;
    document.getElementById('form-modal').classList.remove('hidden');
    document.getElementById('form-modal').classList.add('flex');
}

async function deleteInstagram(id) {
    if (confirm('Yakin ingin menghapus post ini?')) {
        instagramPostsData = instagramPostsData.filter(p => p.id !== id);
        await saveInstagram();
        renderInstagramPosts();
        renderAdminInstagram();
        showNotification('Post berhasil dihapus!', 'success');
    }
}

function closeFormModal() {
    document.getElementById('form-modal').classList.add('hidden');
    document.getElementById('form-modal').classList.remove('flex');
    currentFormType = null;
    currentEditId = null;
}

async function submitFormData() {
    if (currentFormType === 'product') {
        const imageFileName = document.getElementById('form-image').value;
        const newProduct = {
            id: currentEditId || generateId('prod'),
            name: document.getElementById('form-name').value,
            description: document.getElementById('form-desc').value,
            category: document.getElementById('form-category').value,
            image: imageFileName ? `./${imageFileName}` : './default.jpeg',
            priceK: parseInt(document.getElementById('form-priceK').value) || 0,
            priceB: parseInt(document.getElementById('form-priceB').value) || 0,
            isBestSeller: document.getElementById('form-bestSeller')?.checked || false,
            onlySizeB: document.getElementById('form-onlySizeB')?.checked || false,
            noToppings: document.getElementById('form-noToppings')?.checked || false,
            accentColor: document.getElementById('form-accentColor').value || '#4A2C2A'
        };
        
        if (currentEditId) {
            const index = productsData.findIndex(p => p.id === currentEditId);
            if (index !== -1) productsData[index] = newProduct;
        } else {
            productsData.push(newProduct);
        }
        await saveProducts();
        renderProductsByCategory(activeCategory);
        renderAdminProducts();
        showNotification(currentEditId ? 'Produk berhasil diupdate!' : 'Produk berhasil ditambahkan!', 'success');
    }
    
    else if (currentFormType === 'campaign') {
        const imageFileName = document.getElementById('form-image-camp').value;
        const newCampaign = {
            id: currentEditId || generateId('campaign'),
            title: document.getElementById('form-title-camp').value,
            subTitle: document.getElementById('form-subtitle').value,
            badge: document.getElementById('form-badge').value,
            description: document.getElementById('form-desc-camp').value,
            image: imageFileName ? `./${imageFileName}` : './default.jpeg',
            highlightText: document.getElementById('form-highlight').value,
            accentColor: document.getElementById('form-accentColor-camp').value || '#4A2C2A'
        };
        
        if (currentEditId) {
            const index = campaignsData.findIndex(c => c.id === currentEditId);
            if (index !== -1) campaignsData[index] = newCampaign;
        } else {
            campaignsData.push(newCampaign);
        }
        await saveCampaigns();
        renderCampaigns();
        renderAdminCampaigns();
        showNotification(currentEditId ? 'Promo berhasil diupdate!' : 'Promo berhasil ditambahkan!', 'success');
    }
    
    else if (currentFormType === 'testimonial') {
        const imageFileName = document.getElementById('form-image-test').value;
        const newTestimonial = {
            id: currentEditId || generateId('test'),
            customerName: document.getElementById('form-name-test').value,
            reviewTitle: document.getElementById('form-title-test').value,
            reviewText: document.getElementById('form-text-test').value,
            city: document.getElementById('form-city').value,
            date: document.getElementById('form-date').value,
            productImage: imageFileName ? `./${imageFileName}` : './default.jpeg',
            ratingValue: parseInt(document.getElementById('form-rating').value)
        };
        
        if (currentEditId) {
            const index = testimonialsData.findIndex(t => t.id === currentEditId);
            if (index !== -1) testimonialsData[index] = newTestimonial;
        } else {
            testimonialsData.push(newTestimonial);
        }
        await saveTestimonials();
        renderTestimonials();
        renderAdminTestimonials();
        showNotification(currentEditId ? 'Testimoni berhasil diupdate!' : 'Testimoni berhasil ditambahkan!', 'success');
    }
    
    else if (currentFormType === 'instagram') {
        const newPost = {
            id: currentEditId || generateId('post'),
            image: document.getElementById('form-image-ig').value,
            likes: document.getElementById('form-likes').value,
            comments: document.getElementById('form-comments').value,
            caption: document.getElementById('form-caption-ig').value,
            type: document.getElementById('form-type').value
        };
        
        if (currentEditId) {
            const index = instagramPostsData.findIndex(p => p.id === currentEditId);
            if (index !== -1) instagramPostsData[index] = newPost;
        } else {
            instagramPostsData.push(newPost);
        }
        await saveInstagram();
        renderInstagramPosts();
        renderAdminInstagram();
        showNotification(currentEditId ? 'Post berhasil diupdate!' : 'Post berhasil ditambahkan!', 'success');
    }
    
    closeFormModal();
}

// ==================== MODAL FUNCTIONS ====================
function openStoreModal(tab) { setStoreTab(tab); const modal = document.getElementById('store-modal'); if (modal) { modal.classList.remove('hidden'); modal.classList.add('flex'); } }
function closeStoreModal() { const modal = document.getElementById('store-modal'); if (modal) { modal.classList.add('hidden'); modal.classList.remove('flex'); } resetContactForm(); }

function setStoreTab(tab) {
    const storesTabBtn = document.getElementById('stores-tab-btn');
    const contactTabBtn = document.getElementById('contact-tab-btn');
    const storesTabIndicator = document.getElementById('stores-tab-indicator');
    const contactTabIndicator = document.getElementById('contact-tab-indicator');
    const storesContent = document.getElementById('stores-tab-content');
    const contactContent = document.getElementById('contact-tab-content');
    if (tab === 'stores') {
        if (storesTabBtn) { storesTabBtn.classList.add('text-[#111111]'); storesTabBtn.classList.remove('text-neutral-400'); }
        if (contactTabBtn) { contactTabBtn.classList.add('text-neutral-400'); contactTabBtn.classList.remove('text-[#111111]'); }
        if (storesTabIndicator) storesTabIndicator.classList.remove('hidden');
        if (contactTabIndicator) contactTabIndicator.classList.add('hidden');
        if (storesContent) storesContent.classList.remove('hidden');
        if (contactContent) contactContent.classList.add('hidden');
    } else {
        if (contactTabBtn) { contactTabBtn.classList.add('text-[#111111]'); contactTabBtn.classList.remove('text-neutral-400'); }
        if (storesTabBtn) { storesTabBtn.classList.add('text-neutral-400'); storesTabBtn.classList.remove('text-[#111111]'); }
        if (contactTabIndicator) contactTabIndicator.classList.remove('hidden');
        if (storesTabIndicator) storesTabIndicator.classList.add('hidden');
        if (contactContent) contactContent.classList.remove('hidden');
        if (storesContent) storesContent.classList.add('hidden');
        resetContactForm();
    }
}

function updateStoreInfo() {
    document.getElementById('store-name').textContent = storeData.name;
    document.getElementById('store-address').textContent = storeData.address;
    document.getElementById('store-phone').textContent = storeData.phone;
    document.getElementById('store-hours').textContent = storeData.hours;
    document.getElementById('store-maps-url').href = storeData.mapsUrl;
}

function submitContactForm(event) {
    event.preventDefault();
    const name = document.getElementById('contact-name')?.value || '';
    const phone = document.getElementById('contact-phone')?.value || '';
    const message = document.getElementById('contact-message')?.value || '';
    if (name && phone && message) {
        const waUrl = `https://wa.me/6282299999035?text=${encodeURIComponent(`Halo THE. C DRINKS! Saya ${name} (${phone}).\n\nPesan:\n${message}`)}`;
        document.getElementById('whatsapp-link').href = waUrl;
        document.getElementById('contact-form-container').classList.add('hidden');
        document.getElementById('contact-success').classList.remove('hidden');
        window.open(waUrl, '_blank');
    }
}

function resetContactForm() {
    document.getElementById('contact-name').value = '';
    document.getElementById('contact-phone').value = '';
    document.getElementById('contact-message').value = '';
    document.getElementById('contact-form-container').classList.remove('hidden');
    document.getElementById('contact-success').classList.add('hidden');
}

function openLightbox(id) {
    const post = instagramPostsData.find(x => x.id === id);
    if (post) {
        document.getElementById('lightbox-img').src = post.image;
        document.getElementById('lightbox-likes').innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg><span>${post.likes}</span>`;
        document.getElementById('lightbox-comments').innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg><span>${post.comments}</span>`;
        document.getElementById('lightbox-caption').textContent = post.caption;
        document.getElementById('lightbox-modal').classList.remove('hidden');
        document.getElementById('lightbox-modal').classList.add('flex');
    }
}
function closeLightbox() { const modal = document.getElementById('lightbox-modal'); if (modal) { modal.classList.add('hidden'); modal.classList.remove('flex'); } }

// ==================== SCROLL FUNCTIONS ====================
function scrollToMenu() { document.getElementById('menu-section')?.scrollIntoView({ behavior: 'smooth' }); }
function scrollToPromo() { document.getElementById('promo-section')?.scrollIntoView({ behavior: 'smooth' }); }
function scrollToAbout() { document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' }); }
function scrollToSocial() { document.getElementById('social-section')?.scrollIntoView({ behavior: 'smooth' }); }

// ==================== MOBILE NAV ====================
function toggleMobileDrawer() {
    const drawer = document.getElementById('mobile-drawer');
    const backdrop = document.getElementById('mobile-backdrop');
    if (drawer && backdrop) {
        if (drawer.classList.contains('hidden')) { drawer.classList.remove('hidden'); backdrop.classList.remove('hidden'); } 
        else { drawer.classList.add('hidden'); backdrop.classList.add('hidden'); }
    }
}
function closeMobileDrawer() { document.getElementById('mobile-drawer')?.classList.add('hidden'); document.getElementById('mobile-backdrop')?.classList.add('hidden'); }
function handleMobileNavClick(callback) { closeMobileDrawer(); setTimeout(callback, 100); }

// ==================== SCROLL EVENT ====================
let scrolled = false;
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('main-navbar');
    const newScrolled = window.scrollY > 20;
    if (newScrolled !== scrolled && navbar) {
        scrolled = newScrolled;
        if (scrolled) { navbar.classList.add('shadow-lg', 'py-2.5', 'scale-[0.99]'); navbar.classList.remove('shadow-md'); } 
        else { navbar.classList.remove('shadow-lg', 'py-2.5', 'scale-[0.99]'); navbar.classList.add('shadow-md'); }
    }
});

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', async () => {
    await loadData();
    document.getElementById('mobile-menu-btn')?.addEventListener('click', toggleMobileDrawer);
    document.getElementById('cart-floating-btn')?.addEventListener('click', openCartDrawer);
    const distanceInput = document.getElementById('delivery-distance');
    if (distanceInput) distanceInput.addEventListener('input', updateDeliveryFee);
});

// Global functions
window.updateDeliveryFee = updateDeliveryFee;
window.getUserLocationWA = getUserLocationWA;
window.clearLocationWA = clearLocationWA;
window.resetLocationPermission = resetLocationPermission;
window.checkoutViaWhatsApp = checkoutViaWhatsApp;
window.checkoutViaGrabFood = checkoutViaGrabFood;
window.checkoutViaShopeeFood = checkoutViaShopeeFood;
window.checkoutViaStorePickup = checkoutViaStorePickup;
window.openStoreModal = openStoreModal;
window.closeStoreModal = closeStoreModal;
window.setStoreTab = setStoreTab;
window.scrollToMenu = scrollToMenu;
window.scrollToPromo = scrollToPromo;
window.scrollToAbout = scrollToAbout;
window.scrollToSocial = scrollToSocial;
window.closeLightbox = closeLightbox;
window.closeReceiptModal = closeReceiptModal;
window.downloadReceipt = downloadReceipt;
window.submitContactForm = submitContactForm;
window.resetContactForm = resetContactForm;
window.handleMobileNavClick = handleMobileNavClick;
window.closeCartDrawer = closeCartDrawer;
window.openCartDrawer = openCartDrawer;
window.closeCheckoutModal = closeCheckoutModal;
window.openCheckoutModal = openCheckoutModal;
window.filterProducts = filterProducts;
window.setProductSize = setProductSize;
window.setProductTemp = setProductTemp;
window.updateToppingSelection = updateToppingSelection;
window.addToCartFromCard = addToCartFromCard;
window.addToCart = addToCart;
window.removeCartItem = removeCartItem;
window.updateQuantity = updateQuantity;
window.openAdminPanel = openAdminPanel;
window.closeAdminPanel = closeAdminPanel;
window.verifyAdminPassword = verifyAdminPassword;
window.closePasswordModal = closePasswordModal;
window.setAdminTab = setAdminTab;
window.showAddProductForm = showAddProductForm;
window.editProduct = editProduct;
window.deleteProduct = deleteProduct;
window.showAddCampaignForm = showAddCampaignForm;
window.editCampaign = editCampaign;
window.deleteCampaign = deleteCampaign;
window.showAddTestimonialForm = showAddTestimonialForm;
window.editTestimonial = editTestimonial;
window.deleteTestimonial = deleteTestimonial;
window.showAddInstagramForm = showAddInstagramForm;
window.editInstagram = editInstagram;
window.deleteInstagram = deleteInstagram;
window.closeFormModal = closeFormModal;
window.submitFormData = submitFormData;

// ==================== TAMBAHAN: Update data lama di JSONBin ====================
// Fungsi untuk memperbaiki data yang sudah ada di JSONBin
async function fixExistingDataInJSONBin() {
    try {
        console.log('🔧 Memeriksa dan memperbaiki data di JSONBin...');
        const response = await fetch(`https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}/latest`, {
            headers: { 'X-Access-Key': JSONBIN_ACCESS_KEY }
        });
        
        if (response.ok) {
            const data = await response.json();
            const record = data.record;
            let needUpdate = false;
            
            // Periksa apakah masih ada path /img/
            if (record && record.products) {
                record.products.forEach(product => {
                    if (product.image && product.image.startsWith('/img/')) {
                        needUpdate = true;
                        console.log('⚠️ Ditemukan path /img/ yang perlu diperbaiki:', product.image);
                    }
                });
            }
            
            if (needUpdate) {
                console.log('🔄 Memperbaiki data di JSONBin...');
                await saveAllDataToAPI();
                console.log('✅ Data di JSONBin telah diperbaiki!');
            } else {
                console.log('✅ Data di JSONBin sudah menggunakan format yang benar (./)');
            }
        }
    } catch (error) {
        console.error('❌ Gagal memeriksa data:', error);
    }
}

// Jalankan perbaikan setelah load data
setTimeout(() => {
    fixExistingDataInJSONBin();
}, 2000);
