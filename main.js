// ==================== GLOBAL KONFIGURASI ====================
const APP_CONFIG = {
    // JSONBin Configuration
    JSONBIN_ACCESS_KEY: '$2a$10$Idssm7MPctlzL/quJlXUyOiFa5bSp2W3ERWxRSLbpJS/QKeUj8kt2',
    JSONBIN_BIN_ID: '6a282856f5f4af5e29d26758',
    
    // Admin Panel Configuration
    ADMIN_PASSWORD: 'thecadmin2026',
    DATA_VERSION: '2.0',
    
    // Store Contact Information
    STORE_PHONE_NUMBER: '6281288862602',
    STORE_NAME: 'THE. C DRINKS',
    STORE_ADDRESS: 'Jl. Diponegoro, Kotakulon, Kec. Bondowoso, Kab. Bondowoso, Jawa Timur 68213',
    STORE_LOCATION: { lat: -7.9108787, lng: 113.8193598 },
    
    // WhatsApp API Configuration
    WHATSAPP_API_URL: 'https://baileys-rest-api-production-959c.up.railway.app/api',
    WHATSAPP_SESSION_NAME: 'testsession',
    
    // Delivery Fee Configuration
    DELIVERY_FLAT_RATE_KM: 3,
    DELIVERY_FLAT_FEE: 5000,
    DELIVERY_EXTRA_PER_KM: 2000,
    
    // Service Fee Configuration
    SERVICE_FEE: 1000,
    
    // Payment Methods
    PAYMENT_METHODS: {
        QRIS: {
            name: 'QRIS',
            qrImage: './qris.jpeg',
            instructions: 'Scan QR Code menggunakan aplikasi mobile banking atau e-wallet yang mendukung QRIS'
        },
        BCA: {
            name: 'Transfer Bank BCA',
            accountNumber: '1234567890',
            accountName: 'THE. C DRINKS',
            bank: 'BCA',
            instructions: 'Transfer ke rekening BCA atas nama THE. C DRINKS'
        }
    },
    
    // Default Menu Data
    DEFAULT_PRODUCTS: [
        { "id": "prod-chocolate-original", "name": "Chocolate Original", "description": "Cokelat premium pekat berpadu sempurna dengan susu segar organik yang creamy.", "category": "chocolate", "image": "./cokelat-original.jpeg", "accentColor": "#4A2C2A", "priceN": 10000, "priceL": 13000, "isBestSeller": true, "onlySizeL": false, "noToppings": false },
        { "id": "prod-chocolate-hazelnut", "name": "Chocolate Hazelnut", "description": "Cokelat premium pekat dikombinasikan dengan sirup hazelnut panggang dan susu dingin berkualitas.", "category": "chocolate", "image": "./cokelat-hazelnut.jpeg", "accentColor": "#A67C52", "priceN": 13000, "priceL": 16000, "isBestSeller": true, "onlySizeL": false, "noToppings": false },
        { "id": "prod-chocolate-strawberry", "name": "Chocolate Strawberry", "description": "Perpaduan sempurna antara cokelat premium dan stroberi segar yang manis dan menyegarkan.", "category": "chocolate", "image": "./cokelat-strawberry.jpeg", "accentColor": "#E11D48", "priceN": 12000, "priceL": 15000, "isBestSeller": false, "onlySizeL": false, "noToppings": false },
        { "id": "prod-chocolate-coffee", "name": "Chocolate Coffee", "description": "Kombinasi nikmat antara cokelat pekat dan espresso Arabika yang kuat dan beraroma.", "category": "chocolate", "image": "./cokelat-kopi.jpeg", "accentColor": "#6F4E37", "priceN": 15000, "priceL": 18000, "isBestSeller": false, "onlySizeL": false, "noToppings": false },
        { "id": "prod-matcha-latte", "name": "Matcha Latte", "description": "Bubuk matcha Jepang premium Uji diseduh dengan susu segar organik yang lembut.", "category": "tea", "image": "./tea-matcha.jpeg", "accentColor": "#6B8E23", "priceN": 12000, "priceL": 15000, "isBestSeller": true, "onlySizeL": false, "noToppings": false },
        { "id": "prod-thai-tea", "name": "Thai Tea", "description": "Teh Thailand asli dengan rasa khas yang creamy dan manis, disajikan dengan susu kental manis.", "category": "tea", "image": "./tea-thai.jpeg", "accentColor": "#D97706", "priceN": 12000, "priceL": 15000, "isBestSeller": true, "onlySizeL": false, "noToppings": false },
        { "id": "prod-lemon-tea", "name": "Lemon Tea", "description": "Kesegaran teh hitam dengan perasan lemon asli dan madu hutan alami.", "category": "tea", "image": "./tea-lemon.jpeg", "accentColor": "#EAB308", "priceN": 10000, "priceL": 13000, "isBestSeller": false, "onlySizeL": false, "noToppings": false },
        { "id": "prod-solo-wasgitel", "name": "Solo Wasgitel", "description": "Minuman khas Solo dengan rasa wasgitel yang unik dan menyegarkan.", "category": "tea", "image": "./tea-solo-wasgitel.jpeg", "accentColor": "#8B5E3C", "priceN": 7000, "priceL": 7000, "isBestSeller": false, "onlySizeL": true, "noToppings": true },
        { "id": "prod-americano", "name": "Americano", "description": "Espresso otentik dari biji kopi Arabika pilihan, disajikan dengan air pegunungan dingin yang segar.", "category": "coffee", "image": "./coffe-americano.jpeg", "accentColor": "#6F4E37", "priceN": 10000, "priceL": 13000, "isBestSeller": true, "onlySizeL": false, "noToppings": false },
        { "id": "prod-cappucino", "name": "Cappucino", "description": "Perpaduan sempurna antara espresso, susu panas, dan busa susu yang lembut.", "category": "coffee", "image": "./coffe-cappucino.jpeg", "accentColor": "#A67C52", "priceN": 12000, "priceL": 15000, "isBestSeller": true, "onlySizeL": false, "noToppings": false },
        { "id": "prod-latte", "name": "Latte", "description": "Espresso dengan susu steamed yang creamy, menghasilkan rasa yang halus dan lembut.", "category": "coffee", "image": "./coffe-late.jpeg", "accentColor": "#8B5E3C", "priceN": 12000, "priceL": 15000, "isBestSeller": false, "onlySizeL": false, "noToppings": false },
        { "id": "prod-brown-sugar-latte", "name": "Brown Sugar Latte", "description": "Caramel gula merah Okinawa berpadu indah dengan espresso dan susu segar premium.", "category": "coffee", "image": "./coffe-late-brown-sugar.jpeg", "accentColor": "#4A2C2A", "priceN": 15000, "priceL": 18000, "isBestSeller": true, "onlySizeL": false, "noToppings": false },
        { "id": "prod-strawberry", "name": "Strawberry", "description": "Puree stroberi segar organik dipadukan dengan es batu serut.", "category": "fruit", "image": "./fruit-strawberry.jpeg", "accentColor": "#E11D48", "priceN": 10000, "priceL": 13000, "isBestSeller": true, "onlySizeL": false, "noToppings": false },
        { "id": "prod-mango", "name": "Mango", "description": "Kesegaran puree mangga alami yang manis dan menyegarkan, cocok untuk cuaca panas.", "category": "fruit", "image": "./fruit-manggo.jpeg", "accentColor": "#F59E0B", "priceN": 10000, "priceL": 13000, "isBestSeller": false, "onlySizeL": false, "noToppings": false },
        { "id": "prod-taro", "name": "Taro Milk Tea", "description": "Minuman taro creamy dengan aroma khas dan rasa manis alami yang lembut di lidah.", "category": "cake", "image": "./taro.jpeg", "accentColor": "#9B59B6", "priceN": 10000, "priceL": 13000, "isBestSeller": true, "onlySizeL": false, "noToppings": false },
        { "id": "prod-red-velvet", "name": "Red Velvet Latte", "description": "Perpaduan sempurna antara red velvet cake dan susu segar, menghasilkan rasa yang manis dan elegan.", "category": "cake", "image": "./red-velvet.jpeg", "accentColor": "#E74C3C", "priceN": 12000, "priceL": 15000, "isBestSeller": false, "onlySizeL": false, "noToppings": false }
    ],
    
    DEFAULT_CAMPAIGNS: [
        { "id": "campaign-midnight-chocolate", "title": "Midnight Chocolate", "subTitle": "Sensasi Kakao Pekat yang Elegan", "badge": "Edisi Terbatas", "description": "Masuki petualangan rasa yang mendalam. Bubuk cokelat hitam pilihan dari Afrika Barat berpadu dengan susu premium organik, menghasilkan rasa yang intens, lembut, dan menenangkan malam Anda.", "image": "./cokelat-original.jpeg", "accentColor": "#4A2C2A", "highlightText": "KOSMIK COKELAT" },
        { "id": "campaign-matcha-signature", "title": "Matcha Signature", "subTitle": "Ketenangan Zen dalam Setiap Tegukan", "badge": "Terlaris", "description": "Ditanam di kebun teh Kyoto yang sejuk, digiling secara tradisional dengan presisi tingkat tinggi, lalu dibalur susu organik segar demi memberikan fokus dan kesegaran penuh.", "image": "./tea-matcha.jpeg", "accentColor": "#6B8E23", "highlightText": "MATCHA KYOTO" },
        { "id": "campaign-strawberry", "title": "Strawberry Mango Fusion", "subTitle": "Kebahagiaan Tropis Penuh Kesegaran", "badge": "Edisi Spesial", "description": "Kesegaran buah stroberi matang pilihan yang dipadukan secara harmonis dengan kelembutan puree mangga Alfonzo berlapis madu. Ledakan rasa menakjubkan bagi hari Anda.", "image": "./fruit-strawberry.jpeg", "accentColor": "#E11D48", "highlightText": "PERPADUAN TROPIS" }
    ],
    
    DEFAULT_TESTIMONIALS: [
        { "id": "test-ronald", "reviewTitle": "Belum pernah menikmati Brown Sugar Latte seenak ini!", "reviewText": "Saya sudah mencoba banyak Brown Sugar Latte di Indonesia, dan jujur ini adalah yang terbaik yang pernah saya rasakan! Rasa manisnya alami dan aroma kopinya tetap kuat.", "customerName": "Ronald Simatupang", "city": "Jakarta, Indonesia", "date": "25 Maret 2025", "productImage": "./coffe-late-brown-sugar.jpeg", "ratingValue": 5 },
        { "id": "test-olivia", "reviewTitle": "Banyak pilihan rasa dan semuanya kualitas terbaik! Tidak ada yang mengecewakan", "reviewText": "THE. C DRINKS memiliki variasi yang sangat beragam dan semuanya lezat! Konsistensinya pas dan kemasannya sangat premium. Benar-benar direkomendasikan!", "customerName": "Olivia Grace Tjondro", "city": "Surabaya, Indonesia", "date": "5 Juli 2025", "productImage": "./tea-matcha.jpeg", "ratingValue": 5 },
        { "id": "test-stephanie", "reviewTitle": "Sangat menyukai varian Stroberi!", "reviewText": "Varian stroberi selalu menjadi favorit saya. Belum pernah menemukan minuman yang bisa meningkatkan mood saya secepat ini! Premium, segar, dan sangat cantik saat difoto.", "customerName": "Stephanie Raitama", "city": "Bandung, Indonesia", "date": "7 September 2025", "productImage": "./fruit-strawberry.jpeg", "ratingValue": 5 }
    ],
    
    DEFAULT_INSTAGRAM: [
        { "id": "post-1", "image": "https://placehold.co/600x600/333333/white?text=Instagram+1", "likes": "1,420", "comments": "48", "caption": "Pagi hari di sudut kota yang chic ditemani americano yang kuat. ✨ #thecdrinks", "type": "photo" },
        { "id": "post-2", "image": "https://placehold.co/600x600/444444/white?text=Instagram+2", "likes": "2,110", "comments": "92", "caption": "Proses brewing dengan presisi tinggi. Setiap cangkir disajikan dengan penuh kasih.", "type": "carousel" },
        { "id": "post-3", "image": "https://placehold.co/600x600/2a2a2a/white?text=Instagram+3", "likes": "1,894", "comments": "64", "caption": "Sensasi menikmati cokelat premium larut malam yang meningkatkan suasana hati Anda.", "type": "photo" },
        { "id": "post-4", "image": "https://placehold.co/600x600/3a3a3a/white?text=Instagram+4", "likes": "3,020", "comments": "124", "caption": "Matcha latte hangat untuk fokus kognitif yang bersih di sore hari. 🍃", "type": "video" },
        { "id": "post-5", "image": "https://placehold.co/600x600/4a4a4a/white?text=Instagram+5", "likes": "4,103", "comments": "210", "caption": "Saat kehangatan mentari berpadu di dalam gelas: Puree mangga manis dan stroberi segar.", "type": "photo" },
        { "id": "post-6", "image": "https://placehold.co/600x600/252525/white?text=Instagram+6", "likes": "2,740", "comments": "88", "caption": "Arsitektur minimalis yang elegan. Outlet Jl. Premium Rasa kami kini resmi dibuka.", "type": "photo" }
    ],
    
    WHATSAPP_MESSAGE_TEMPLATE: `Halo THE. C DRINKS! 🥤✨

Saya ingin memesan:
{ITEMS}

{SHIPPING_INFO}
Biaya Layanan: Rp {SERVICE_FEE}
Subtotal: Rp {SUBTOTAL}
Total: Rp {TOTAL}

Nama: {CUSTOMER_NAME}
Metode: {METHOD}
Alamat: Akan saya share via WhatsApp

Mohon informasi total pembayaran dan instruksi pembayaran. Terima kasih!`,

    CONTACT_MESSAGE_TEMPLATE: `Halo THE. C DRINKS! Saya {NAME} ({PHONE}).

Pesan:
{MESSAGE}`
};

// ==================== ZUSTAND-STORE WITH PERSISTENCE ====================
const createStore = (initialState) => {
    let state = initialState;
    const listeners = [];
    const STORAGE_KEY = 'thecdrinks_store';
    
    // Load persisted state
    const persisted = localStorage.getItem(STORAGE_KEY);
    if (persisted) {
        try {
            const parsed = JSON.parse(persisted);
            state = { ...state, ...parsed };
        } catch (e) {
            console.warn('Failed to parse persisted state:', e);
        }
    }
    
    const setState = (newState) => {
        state = { ...state, ...newState };
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        } catch (e) {
            console.warn('Failed to persist state:', e);
        }
        listeners.forEach(listener => listener(state));
    };
    
    const getState = () => state;
    
    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            const index = listeners.indexOf(listener);
            if (index > -1) listeners.splice(index, 1);
        };
    };
    
    return { getState, setState, subscribe };
};

// Initialize store
const store = createStore({
    cartItems: [],
    receiptData: null,
    productSizes: {},
    productTemp: {},
    userLocation: null,
    uploadedProofFile: null,
    pendingPaymentData: null,
    pendingCheckoutData: null,
    customerName: '',
    deliveryDistance: 0,
    pickupName: '',
});

// ==================== WHATSAPP API FUNCTIONS ====================
async function sendWhatsAppMessage(number, message) {
    try {
        const response = await fetch(`${APP_CONFIG.WHATSAPP_API_URL}/send-message`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                sessionName: APP_CONFIG.WHATSAPP_SESSION_NAME,
                number: number,
                message: message
            })
        });
        
        const result = await response.json();
        console.log('WhatsApp API Response:', result);
        return result;
    } catch (error) {
        console.error('Error sending WhatsApp message:', error);
        throw error;
    }
}

async function sendWhatsAppImage(number, imageData, caption = '') {
    try {
        if (imageData instanceof File || imageData instanceof Blob) {
            const formData = new FormData();
            formData.append('sessionName', APP_CONFIG.WHATSAPP_SESSION_NAME);
            formData.append('number', number);
            formData.append('caption', caption);
            formData.append('image', imageData);
            
            const response = await fetch(`${APP_CONFIG.WHATSAPP_API_URL}/send-image`, {
                method: 'POST',
                body: formData
            });
            const result = await response.json();
            console.log('WhatsApp Image API Response (FormData):', result);
            return result;
        } else if (typeof imageData === 'string') {
            if (imageData.startsWith('data:image')) {
                const response = await fetch(`${APP_CONFIG.WHATSAPP_API_URL}/send-image`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        sessionName: APP_CONFIG.WHATSAPP_SESSION_NAME,
                        number: number,
                        image: imageData,
                        caption: caption
                    })
                });
                const result = await response.json();
                console.log('WhatsApp Image API Response (Base64):', result);
                return result;
            } else {
                const response = await fetch(`${APP_CONFIG.WHATSAPP_API_URL}/send-image?sessionName=${APP_CONFIG.WHATSAPP_SESSION_NAME}&number=${number}&image=${encodeURIComponent(imageData)}&caption=${encodeURIComponent(caption)}`, {
                    method: 'GET'
                });
                const result = await response.json();
                console.log('WhatsApp Image API Response (URL):', result);
                return result;
            }
        }
    } catch (error) {
        console.error('Error sending WhatsApp image:', error);
        throw error;
    }
}

async function sendOrderViaAPI(number, message, proofImage = null) {
    try {
        let result;
        
        if (proofImage) {
            const caption = `📋 *PESANAN BARU*\n\n${message}`;
            result = await sendWhatsAppImage(number, proofImage, caption);
        } else {
            result = await sendWhatsAppMessage(number, `📋 *PESANAN BARU*\n\n${message}`);
        }
        
        return result;
    } catch (error) {
        console.error('Error sending order via API:', error);
        throw error;
    }
}

function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

// ==================== GLOBAL DATA ====================
let productsData = [];
let campaignsData = [];
let testimonialsData = [];
let instagramPostsData = [];

let cartItems = [];
let receiptData = null;
let activeCategory = 'all';
let productSizes = {};
let userLocation = null;
let productTemp = {};
let currentFormType = null;
let currentEditId = null;

// Payment variables
let pendingPaymentData = null;
let uploadedProofFile = null;

// ==================== HELPER FUNCTIONS ====================
function hashPassword(password) {
    return CryptoJS.SHA256(password).toString();
}

const HASHED_ADMIN_PASSWORD = hashPassword(APP_CONFIG.ADMIN_PASSWORD);
let isAdminAuthenticated = false;

function checkExistingAuth() {
    if (sessionStorage.getItem('adminAuth') === 'true') {
        isAdminAuthenticated = true;
    }
}

function showNotification(message, type = 'info') {
    const colors = { success: 'bg-green-600', error: 'bg-red-600', info: 'bg-[#111111]' };
    const notification = document.createElement('div');
    notification.className = `fixed top-20 right-4 z-[100] ${colors[type]} text-white text-xs font-bold py-2 px-4 rounded-lg shadow-lg transition-all duration-300`;
    notification.innerHTML = message;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function generateId(prefix) {
    return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`;
}

// ==================== DELIVERY FEE CALCULATION ====================
function calculateDeliveryFee(distance) {
    if (isNaN(distance) || distance <= 0) return 0;
    if (distance <= APP_CONFIG.DELIVERY_FLAT_RATE_KM) return APP_CONFIG.DELIVERY_FLAT_FEE;
    const extraKm = Math.ceil(distance - APP_CONFIG.DELIVERY_FLAT_RATE_KM);
    return APP_CONFIG.DELIVERY_FLAT_FEE + (extraKm * APP_CONFIG.DELIVERY_EXTRA_PER_KM);
}

function getDeliveryFee() {
    const distanceInput = document.getElementById('delivery-distance');
    if (!distanceInput) return 0;
    const distance = parseFloat(distanceInput.value);
    if (isNaN(distance) || distance <= 0) return 0;
    return calculateDeliveryFee(distance);
}

function getServiceFee() {
    return APP_CONFIG.SERVICE_FEE;
}

function updateDeliveryFee() {
    const distanceInput = document.getElementById('delivery-distance');
    let distance = 0;
    if (distanceInput) {
        distance = parseFloat(distanceInput.value);
        if (isNaN(distance)) distance = 0;
        store.setState({ deliveryDistance: distance });
    }
    const fee = calculateDeliveryFee(distance);
    const display = document.getElementById('delivery-fee-display');
    if (display) {
        if (fee > 0 && distance > 0) {
            let feeExplanation = '';
            if (distance <= APP_CONFIG.DELIVERY_FLAT_RATE_KM) {
                feeExplanation = `(${distance} km × flat rate Rp${APP_CONFIG.DELIVERY_FLAT_FEE.toLocaleString()})`;
            } else {
                const extraKm = Math.ceil(distance - APP_CONFIG.DELIVERY_FLAT_RATE_KM);
                feeExplanation = `(${distance} km: Rp${APP_CONFIG.DELIVERY_FLAT_FEE.toLocaleString()} + ${extraKm} km × Rp${APP_CONFIG.DELIVERY_EXTRA_PER_KM.toLocaleString()})`;
            }
            display.textContent = `Ongkir: Rp ${fee.toLocaleString()} ${feeExplanation}`;
            display.classList.remove('hidden');
        } else {
            display.classList.add('hidden');
        }
    }
    updateCartTotals();
}

// ==================== PRODUCT FUNCTIONS ====================
function getProductPrice(product, size) {
    if (product.id === "prod-solo-wasgitel") return product.priceL;
    return size === 'L' ? product.priceL : product.priceN;
}

function getToppingPrice(toppings, productId) {
    if (productId === "prod-solo-wasgitel") return 0;
    let total = 0;
    if (toppings.boba) total += 3000;
    if (toppings.creamCheese) total += 5000;
    return total;
}

// ==================== GEOLOCATION WITH REVERSE GEOCODING ====================
// Fungsi untuk mendapatkan alamat lengkap dari koordinat menggunakan Nominatim (OpenStreetMap)
async function getAddressFromCoords(lat, lng) {
    try {
        const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&addressdetails=1&zoom=18`,
            {
                headers: {
                    'User-Agent': 'THE.C-DRINKS-WebApp/1.0'
                }
            }
        );
        
        if (!response.ok) throw new Error('Gagal mendapatkan alamat');
        
        const data = await response.json();
        
        if (data && data.display_name) {
            return {
                fullAddress: data.display_name,
                road: data.address?.road || '',
                city: data.address?.city || data.address?.town || data.address?.village || '',
                district: data.address?.suburb || data.address?.district || '',
                province: data.address?.state || data.address?.province || '',
                country: data.address?.country || 'Indonesia',
                postcode: data.address?.postcode || '',
                lat: lat,
                lng: lng
            };
        }
        return null;
    } catch (error) {
        console.error('Error getting address:', error);
        return null;
    }
}

// Fungsi untuk mendapatkan link Google Maps
function getGoogleMapsLink(lat, lng) {
    return `https://www.google.com/maps?q=${lat},${lng}`;
}

// Fungsi untuk mendapatkan link OpenStreetMap
function getOpenStreetMapLink(lat, lng) {
    return `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}&zoom=15`;
}

// Fungsi untuk mendapatkan link Waze
function getWazeLink(lat, lng) {
    return `https://www.waze.com/ul?ll=${lat},${lng}&navigate=yes`;
}

// ==================== UPDATE GEOLOCATION FUNCTIONS ====================
async function getUserLocationWA() {
    const statusEl = document.getElementById('location-status-wa');
    const resetBtn = document.getElementById('reset-permission-btn');
    const distanceInput = document.getElementById('delivery-distance');
    const addressDisplay = document.getElementById('location-address-display');
    const addressContent = document.getElementById('location-address-content');
    
    if (!navigator.geolocation) {
        if (statusEl) {
            statusEl.textContent = '❌ Browser tidak mendukung geolokasi';
            statusEl.classList.remove('hidden');
            setTimeout(() => statusEl.classList.add('hidden'), 3000);
        }
        return;
    }
    
    if (statusEl) {
        statusEl.innerHTML = '📍 Mendapatkan lokasi Anda... Mohon izinkan akses lokasi.';
        statusEl.classList.remove('hidden');
        statusEl.className = 'text-blue-600 text-[8px]';
    }
    
    if (resetBtn) resetBtn.classList.add('hidden');
    
    // Sembunyikan address display sebelumnya
    if (addressDisplay) addressDisplay.classList.add('hidden');
    
    navigator.geolocation.getCurrentPosition(
        async function(position) {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            
            userLocation = { lat, lng };
            store.setState({ userLocation: userLocation });
            
            // Hitung jarak ke toko
            const distance = calculateDistance(
                APP_CONFIG.STORE_LOCATION.lat,
                APP_CONFIG.STORE_LOCATION.lng,
                lat,
                lng
            );
            
            if (distanceInput) {
                distanceInput.value = distance.toFixed(1);
            }
            
            // Update delivery fee
            updateDeliveryFee();
            
            // Dapatkan alamat lengkap dari koordinat
            const addressInfo = await getAddressFromCoords(lat, lng);
            
            // Tampilkan alamat di address display
            if (addressDisplay && addressContent) {
                addressDisplay.classList.remove('hidden');
                
                let addressHtml = '';
                if (addressInfo) {
                    addressHtml = `
                        <div class="space-y-1">
                            <div class="font-semibold text-[9px] text-emerald-700">📍 Alamat Detail:</div>
                            <div class="text-[8px] text-neutral-700 break-words">${addressInfo.fullAddress}</div>
                            <div class="text-[7px] text-neutral-500">
                                ${addressInfo.city ? '🏙️ ' + addressInfo.city : ''}
                                ${addressInfo.province ? '• ' + addressInfo.province : ''}
                                ${addressInfo.postcode ? '• ' + addressInfo.postcode : ''}
                            </div>
                            <div class="flex flex-wrap gap-1 mt-1">
                                <a href="${getGoogleMapsLink(lat, lng)}" target="_blank" 
                                   class="text-[7px] bg-blue-600 text-white px-2 py-0.5 rounded hover:bg-blue-700 transition">
                                    Google Maps
                                </a>
                                <a href="${getOpenStreetMapLink(lat, lng)}" target="_blank"
                                   class="text-[7px] bg-green-600 text-white px-2 py-0.5 rounded hover:bg-green-700 transition">
                                    OpenStreetMap
                                </a>
                                <a href="${getWazeLink(lat, lng)}" target="_blank"
                                   class="text-[7px] bg-yellow-600 text-white px-2 py-0.5 rounded hover:bg-yellow-700 transition">
                                    Waze
                                </a>
                            </div>
                        </div>
                    `;
                } else {
                    addressHtml = `
                        <div class="space-y-1">
                            <div class="text-[8px] text-yellow-700">⚠️ Tidak dapat mengambil alamat detail</div>
                            <div class="flex flex-wrap gap-1 mt-1">
                                <a href="${getGoogleMapsLink(lat, lng)}" target="_blank"
                                   class="text-[7px] bg-blue-600 text-white px-2 py-0.5 rounded hover:bg-blue-700 transition">
                                    Google Maps
                                </a>
                                <a href="${getOpenStreetMapLink(lat, lng)}" target="_blank"
                                   class="text-[7px] bg-green-600 text-white px-2 py-0.5 rounded hover:bg-green-700 transition">
                                    OpenStreetMap
                                </a>
                            </div>
                        </div>
                    `;
                }
                addressContent.innerHTML = addressHtml;
            }
            
            if (statusEl) {
                const fee = calculateDeliveryFee(distance);
                let feeInfo = '';
                if (distance <= APP_CONFIG.DELIVERY_FLAT_RATE_KM) {
                    feeInfo = `Ongkir flat Rp${APP_CONFIG.DELIVERY_FLAT_FEE.toLocaleString()}`;
                } else {
                    const extraKm = Math.ceil(distance - APP_CONFIG.DELIVERY_FLAT_RATE_KM);
                    feeInfo = `Ongkir: Rp${fee.toLocaleString()} (Rp${APP_CONFIG.DELIVERY_FLAT_FEE.toLocaleString()} + ${extraKm}km × Rp${APP_CONFIG.DELIVERY_EXTRA_PER_KM.toLocaleString()})`;
                }
                
                statusEl.innerHTML = `
                    <div class="text-left">
                        <div class="font-semibold text-[9px] text-emerald-700">✅ Lokasi ditemukan!</div>
                        <div class="text-[8px] text-neutral-600">Jarak ke toko: ${distance.toFixed(1)} km</div>
                        <div class="text-[8px] font-semibold text-emerald-600">${feeInfo}</div>
                        <div class="text-[7px] text-neutral-400 mt-1">
                            📱 Silakan share lokasi Anda via WhatsApp untuk konfirmasi
                        </div>
                    </div>
                `;
                statusEl.className = 'text-emerald-600 text-[8px]';
                
                setTimeout(() => {
                    if (!statusEl.classList.contains('hidden')) {
                        statusEl.classList.add('hidden');
                    }
                }, 15000);
            }
            
            if (resetBtn) resetBtn.classList.add('hidden');
        },
        function(error) {
            let errorMessage = '';
            let showResetButton = false;
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    errorMessage = '❌ Izin lokasi ditolak. Silakan isi jarak manual atau klik Reset.';
                    showResetButton = true;
                    break;
                case error.POSITION_UNAVAILABLE:
                    errorMessage = '❌ Informasi lokasi tidak tersedia. Silakan isi jarak manual.';
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
                statusEl.className = 'text-red-600 text-[8px]';
                statusEl.classList.remove('hidden');
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
    store.setState({ userLocation: null });
    if (distanceInput) distanceInput.value = '';
    updateDeliveryFee();
    
    if (statusEl) {
        statusEl.innerHTML = '🔄 Mereset perizinan... Silakan klik "Ambil Lokasi Saya" lagi.';
        statusEl.className = 'text-blue-600 text-[8px]';
        statusEl.classList.remove('hidden');
        setTimeout(() => statusEl.classList.add('hidden'), 3000);
    }
    if (resetBtn) resetBtn.classList.add('hidden');
}

function clearLocationWA() {
    userLocation = null;
    store.setState({ userLocation: null });
    const distanceInput = document.getElementById('delivery-distance');
    const statusEl = document.getElementById('location-status-wa');
    const resetBtn = document.getElementById('reset-permission-btn');
    const addressDisplay = document.getElementById('location-address-display');
    
    if (distanceInput) distanceInput.value = '';
    if (statusEl) statusEl.classList.add('hidden');
    if (resetBtn) resetBtn.classList.add('hidden');
    if (addressDisplay) addressDisplay.classList.add('hidden');
    
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
    await loadDataFromAPI();
    renderCategories();
    renderProductsByCategory('all');
    renderCampaigns();
    renderTestimonials();
    renderInstagramPosts();
    updateStoreInfo();
    
    // Restore cart from store
    const storeState = store.getState();
    if (storeState.cartItems && storeState.cartItems.length > 0) {
        cartItems = storeState.cartItems;
        updateCartUI();
    }
    if (storeState.productSizes) {
        productSizes = storeState.productSizes;
    }
    if (storeState.productTemp) {
        productTemp = storeState.productTemp;
    }
}

const categoriesData = [
    { "id": "all", "name": "Semua Koleksi" },
    { "id": "best-seller", "name": "Terlaris" },
    { "id": "chocolate", "name": "Seri Cokelat" },
    { "id": "tea", "name": "Seri Teh" },
    { "id": "cake", "name": "Seri Kue" },
    { "id": "fruit", "name": "Seri Buah" },
    { "id": "coffee", "name": "Seri Kopi" }
];

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

function renderProductsByCategory(categoryId) {
    let filtered = [...productsData];
    if (categoryId === 'best-seller') filtered = filtered.filter(p => p.isBestSeller);
    else if (categoryId !== 'all') filtered = filtered.filter(p => p.category === categoryId);
    renderProducts(filtered);
}

function setProductSize(productId, size) {
    const product = productsData.find(p => p.id === productId);
    if (product && product.onlySizeL) size = 'L';
    productSizes[productId] = size;
    store.setState({ productSizes: productSizes });
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

function setProductTemp(productId, temp) {
    productTemp[productId] = temp;
    store.setState({ productTemp: productTemp });
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

function addToCart(productId, size, temperature, toppings) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;
    
    let finalSize = size;
    let finalToppings = { ...toppings };
    if (product.onlySizeL) {
        finalSize = 'L';
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
            id: itemId, productId, product, size: finalSize, temperature,
            toppings: { ...finalToppings }, quantity: 1,
            basePrice: price, toppingPrice: toppingPrice, totalPrice: totalItemPrice
        });
    }
    store.setState({ cartItems: cartItems });
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

function addToCartFromCard(productId, size) {
    const product = productsData.find(p => p.id === productId);
    const temperature = productTemp[productId] || 'DINGIN';
    let finalSize = size;
    if (product && product.onlySizeL) finalSize = 'L';
    let bobaChecked = false, creamCheeseChecked = false;
    if (!product || !product.noToppings) {
        bobaChecked = document.getElementById(`topping-boba-${productId}`)?.checked || false;
        creamCheeseChecked = document.getElementById(`topping-creamcheese-${productId}`)?.checked || false;
    }
    addToCart(productId, finalSize, temperature, { boba: bobaChecked, creamCheese: creamCheeseChecked });
}

function renderProducts(products) {
    const container = document.getElementById('products-grid');
    if (!container) return;
    if (!products.length) {
        container.innerHTML = '<div class="col-span-full text-center py-12 text-neutral-400">Tidak ada produk dalam kategori ini.</div>';
        return;
    }
    
    products.forEach(product => {
        if (productTemp[product.id] === undefined) productTemp[product.id] = 'DINGIN';
    });
    
    container.innerHTML = products.map(product => {
        let defaultSize = 'L';
        if (!product.onlySizeL) defaultSize = productSizes[product.id] || 'N';
        const activeSize = defaultSize;
        const price = getProductPrice(product, activeSize);
        const isNActive = (activeSize === 'N' && !product.onlySizeL);
        const isLActive = (activeSize === 'L');
        const showSizeOptions = !product.onlySizeL;
        const showToppings = !product.noToppings;
        const currentTemp = productTemp[product.id] || 'DINGIN';
        
        const hotButtonClass = currentTemp === 'PANAS' ? 'bg-[#111111] text-white border-[#111111]' : 'bg-white text-neutral-600 border-neutral-200 hover:bg-neutral-50';
        const coldButtonClass = currentTemp === 'DINGIN' ? 'bg-[#111111] text-white border-[#111111]' : 'bg-white text-neutral-600 border-neutral-200 hover:bg-neutral-50';
        
        return `<div class="product-card group bg-white rounded-[1.75rem] border border-neutral-100 shadow-sm p-3.5 hover:shadow-xl hover:translate-y-[-6px] transition-all duration-300 flex flex-col justify-between">
            <div>
                <div class="product-image-container relative w-full aspect-square bg-[#FBFBFB] rounded-[18px] mb-4 flex items-center justify-center overflow-hidden">
                    ${product.isBestSeller ? '<span class="absolute top-2.5 left-2.5 z-20 bg-neutral-900 text-[8px] font-extrabold text-white px-2 py-0.5 rounded-full shadow-sm">Terlaris</span>' : ''}
                    ${product.onlySizeL ? '<span class="absolute top-2.5 right-2.5 z-20 bg-amber-600 text-[8px] font-extrabold text-white px-2 py-0.5 rounded-full shadow-sm">Only Size L</span>' : ''}
                    <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onerror="this.src='https://placehold.co/600x800/1a1a1a/white?text=Image'">
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
                        <button onclick="setProductSize('${product.id}', 'N')" data-product="${product.id}" data-size="N" class="size-btn-${product.id} px-2 py-1 rounded-full text-[9px] font-extrabold transition-all ${isNActive ? 'bg-[#111111] text-white shadow-sm' : 'text-[#555555] hover:text-[#111111]'}">N</button>
                        <button onclick="setProductSize('${product.id}', 'L')" data-product="${product.id}" data-size="L" class="size-btn-${product.id} px-2 py-1 rounded-full text-[9px] font-extrabold transition-all ${isLActive ? 'bg-[#111111] text-white shadow-sm' : 'text-[#555555] hover:text-[#111111]'}">L</button>
                    </div>
                    ` : `
                    <div class="flex items-center space-x-0.5 bg-neutral-50 rounded-full p-0.5 border">
                        <button class="px-2 py-1 rounded-full text-[9px] font-extrabold bg-[#111111] text-white shadow-sm">L Only</button>
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
                        <input type="checkbox" id="topping-boba-${product.id}" class="w-3 h-3 accent-[#111111]">
                        <span>⚫️ Boba +3k</span>
                    </label>
                    <label class="flex items-center gap-1 text-[8px] font-medium text-neutral-600 bg-neutral-50 px-2 py-1 rounded-full cursor-pointer hover:bg-neutral-100 transition-colors">
                        <input type="checkbox" id="topping-creamcheese-${product.id}" class="w-3 h-3 accent-[#111111]">
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

function renderCampaigns() {
    const container = document.getElementById('campaigns-grid');
    if (!container) return;
    container.innerHTML = campaignsData.map(camp => `<div class="group relative rounded-[2rem] bg-[#1C1C1C] overflow-hidden shadow-lg flex flex-col transition-all duration-500 hover:translate-y-[-8px]"><div class="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#1C1C1C]/95 to-[#1C1C1C]/90"></div><div class="relative z-10 p-6 flex flex-col h-full"><div class="flex items-start justify-between mb-4"><div><span class="text-[9px] font-bold text-neutral-400 uppercase block mb-1">${camp.subTitle}</span><h3 class="text-base font-bold text-white">${camp.title}</h3></div><span class="text-[9px] font-extrabold text-neutral-900 bg-white px-2.5 py-1 rounded-full">${camp.badge}</span></div><div class="relative mb-4"><div class="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-white/5"><img src="${camp.image}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"></div></div><div class="mt-auto"><div class="border-t border-white/10 pt-4"><div class="font-mono text-[10px] text-zinc-300 mb-3 flex justify-between"><span>${camp.highlightText}</span><span>EDISI: 2026</span></div><p class="text-neutral-200/90 text-xs leading-relaxed line-clamp-3 mb-4">${camp.description}</p><button onclick="scrollToMenu()" class="w-full bg-white hover:bg-neutral-100 text-[#111111] text-xs font-bold py-2.5 rounded-xl transition-all">Temukan Rasa</button></div></div></div></div>`).join('');
}

function renderTestimonials() {
    const container = document.getElementById('testimonials-grid');
    if (!container) return;
    container.innerHTML = testimonialsData.map(test => `<div class="bg-white rounded-3xl border border-neutral-100 shadow-xs hover:shadow-xl transition-all p-6 flex flex-col justify-between"><div><div class="bg-[#F8F8F8] rounded-2xl p-4 mb-6 flex items-center gap-2"><div class="aspect-[3/4] w-[30%] rounded-xl overflow-hidden shadow-xs border bg-white -rotate-6"><img src="${test.productImage}" class="w-full h-full object-cover"></div><div class="aspect-[3/4] w-[35%] rounded-xl overflow-hidden shadow-md border bg-white z-10 scale-105"><img src="${test.productImage}" class="w-full h-full object-cover"></div><div class="aspect-[3/4] w-[30%] rounded-xl overflow-hidden shadow-xs border bg-white rotate-6"><img src="${test.productImage}" class="w-full h-full object-cover"></div></div><div class="flex items-center gap-1 mb-4">${'⭐'.repeat(test.ratingValue)}</div><h3 class="text-sm font-extrabold text-[#111111] mb-3">"${test.reviewTitle}"</h3><p class="text-neutral-500 text-xs leading-relaxed mb-6">${test.reviewText}</p></div><div class="border-t border-neutral-100 pt-4"><div class="flex justify-between"><div><h4 class="font-bold text-neutral-900 text-xs">${test.customerName}</h4><span class="text-[10px] text-neutral-400 flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>${test.city}</span></div><span class="text-[10px] text-neutral-400 flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>${test.date}</span></div></div></div>`).join('');
}

function renderInstagramPosts() {
    const container = document.getElementById('instagram-grid');
    if (!container) return;
    container.innerHTML = instagramPostsData.map(post => `<button onclick="openLightbox('${post.id}')" class="group relative aspect-square rounded-2xl overflow-hidden shadow-xs border cursor-pointer"><img src="${post.image}" class="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"><div class="absolute inset-0 bg-[#111111]/40 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white transition-opacity"><div class="flex items-center space-x-6"><span class="flex items-center gap-1 font-mono text-sm">❤️ ${post.likes}</span><span class="flex items-center gap-1 font-mono text-sm">💬 ${post.comments}</span></div><span class="absolute bottom-4 left-4 right-4 text-[10px] text-zinc-100 italic truncate">${post.caption}</span></div></button>`).join('');
    window.instagramPostsData = instagramPostsData;
}

// ==================== CART FUNCTIONS ====================
function getSubtotal() {
    return cartItems.reduce((sum, item) => {
        return sum + ((item.basePrice + item.toppingPrice) * item.quantity);
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
        
        return `<div class="p-3 bg-neutral-50 rounded-xl flex gap-3"><div class="w-14 h-14 bg-white rounded-lg p-1"><img src="${item.product.image}" class="w-full h-full object-contain"></div><div class="flex-grow"><div class="flex justify-between"><h4 class="font-bold text-xs">${item.product.name}</h4><button onclick="removeCartItem('${item.id}')" class="text-neutral-400 hover:text-red-500"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></button></div><div class="flex flex-wrap gap-1 mt-1"><span class="bg-neutral-900 text-white px-1.5 py-0.5 rounded text-[8px]">${item.size === 'L' ? 'Large' : 'Normal'}</span><span class="bg-neutral-200 text-neutral-800 px-1.5 py-0.5 rounded text-[8px]">${tempIcon} ${item.temperature}</span>${item.toppings.boba ? '<span class="bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded text-[8px]">+Boba</span>' : ''}${item.toppings.creamCheese ? '<span class="bg-pink-100 text-pink-800 px-1.5 py-0.5 rounded text-[8px]">+Cream Cheese</span>' : ''}</div><div class="flex justify-between mt-2"><div class="flex items-center bg-white rounded border"><button onclick="updateQuantity('${item.id}', -1)" class="w-6 h-6 flex items-center justify-center">-</button><span class="w-6 text-center text-xs">${item.quantity}</span><button onclick="updateQuantity('${item.id}', 1)" class="w-6 h-6 flex items-center justify-center">+</button></div><span class="font-mono text-xs font-bold">Rp ${totalItemPrice.toLocaleString()}</span></div></div></div>`;
    }).join('');
    if (footer) footer.classList.remove('hidden');
}

function updateCartTotals() {
    const subtotal = getSubtotal();
    const deliveryFee = getDeliveryFee();
    const serviceFee = getServiceFee();
    const total = subtotal + deliveryFee + serviceFee;
    
    const subtotalEl = document.getElementById('cart-subtotal');
    const taxEl = document.getElementById('cart-tax');
    const totalEl = document.getElementById('cart-total');
    const checkoutTotal = document.getElementById('checkout-total');
    const paymentAmount = document.getElementById('payment-amount');
    
    if (subtotalEl) subtotalEl.textContent = `Rp ${subtotal.toLocaleString()}`;
    if (taxEl) taxEl.textContent = deliveryFee > 0 ? `Rp ${deliveryFee.toLocaleString()}` : 'Rp 0';
    if (totalEl) totalEl.textContent = `Rp ${total.toLocaleString()}`;
    if (checkoutTotal) checkoutTotal.textContent = `Rp ${total.toLocaleString()}`;
    if (paymentAmount) paymentAmount.textContent = `Rp ${total.toLocaleString()}`;
    
    window.cartSubtotal = subtotal;
    window.cartDeliveryFee = deliveryFee;
    window.cartServiceFee = serviceFee;
    window.cartTotal = total;
}

function updateQuantity(itemId, delta) {
    const item = cartItems.find(i => i.id === itemId);
    if (item) {
        const newQty = item.quantity + delta;
        if (newQty >= 1) item.quantity = newQty;
        else cartItems = cartItems.filter(i => i.id !== itemId);
        store.setState({ cartItems: cartItems });
        updateCartUI();
    }
}

function removeCartItem(itemId) { 
    cartItems = cartItems.filter(i => i.id !== itemId); 
    store.setState({ cartItems: cartItems });
    updateCartUI(); 
}

function openCartDrawer() { 
    const drawer = document.getElementById('cart-drawer'); 
    if (drawer) { 
        drawer.classList.remove('hidden'); 
        drawer.classList.add('flex'); 
    } 
    renderCartItems(); 
}

function closeCartDrawer() { 
    const drawer = document.getElementById('cart-drawer'); 
    if (drawer) { 
        drawer.classList.add('hidden'); 
        drawer.classList.remove('flex'); 
    } 
}

// ==================== CHECKOUT FUNCTIONS ====================
function openCheckoutModal() {
    if (cartItems.length) {
        closeCartDrawer();
        const distanceInput = document.getElementById('delivery-distance');
        const statusEl = document.getElementById('location-status-wa');
        const feeDisplay = document.getElementById('delivery-fee-display');
        const resetBtn = document.getElementById('reset-permission-btn');
        
        const storeState = store.getState();
        if (storeState.customerName) {
            const nameInput = document.getElementById('customer-name');
            if (nameInput) nameInput.value = storeState.customerName;
        }
        if (storeState.pickupName) {
            const pickupInput = document.getElementById('pickup-name');
            if (pickupInput) pickupInput.value = storeState.pickupName;
        }
        if (storeState.deliveryDistance > 0 && distanceInput) {
            distanceInput.value = storeState.deliveryDistance;
        }
        
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

function closeCheckoutModal() { 
    const modal = document.getElementById('checkout-modal'); 
    if (modal) { 
        modal.classList.add('hidden'); 
        modal.classList.remove('flex'); 
    } 
}

// ==================== PAYMENT MODAL ====================
let pendingCheckoutData = null;

function showPaymentModal(checkoutData) {
    pendingCheckoutData = checkoutData;
    store.setState({ pendingCheckoutData: checkoutData });
    const modal = document.getElementById('payment-modal');
    if (modal) {
        updateCartTotals();
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }
}

function closePaymentModal() {
    const modal = document.getElementById('payment-modal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
    const paymentDetails = document.getElementById('payment-details');
    if (paymentDetails) {
        paymentDetails.classList.add('hidden');
        paymentDetails.innerHTML = '';
    }
    pendingCheckoutData = null;
    store.setState({ pendingCheckoutData: null });
}

function selectPaymentMethod(method) {
    if (!pendingCheckoutData) return;
    
    const paymentInfo = APP_CONFIG.PAYMENT_METHODS[method];
    if (!paymentInfo) return;
    
    const paymentDetails = document.getElementById('payment-details');
    if (!paymentDetails) return;
    
    paymentDetails.classList.remove('hidden');
    
    if (method === 'QRIS') {
        paymentDetails.innerHTML = `
            <div class="text-center">
                <img src="${paymentInfo.qrImage}" alt="QRIS Code" class="w-48 h-48 mx-auto mb-3 border rounded-lg" onerror="this.src='https://placehold.co/400x400/111111/white?text=QRIS'">
                <p class="text-[10px] text-neutral-600 mb-2">${paymentInfo.instructions}</p>
                <p class="text-[8px] text-neutral-400">Scan QR Code di atas untuk melakukan pembayaran</p>
            </div>
        `;
    } else if (method === 'BCA') {
        paymentDetails.innerHTML = `
            <div class="space-y-2 text-center">
                <div class="bg-neutral-100 rounded-lg p-3">
                    <p class="text-[9px] text-neutral-500 mb-1">Bank</p>
                    <p class="font-bold text-xs">${paymentInfo.bank}</p>
                </div>
                <div class="bg-neutral-100 rounded-lg p-3">
                    <p class="text-[9px] text-neutral-500 mb-1">Nomor Rekening</p>
                    <p class="font-bold text-xs font-mono">${paymentInfo.accountNumber}</p>
                </div>
                <div class="bg-neutral-100 rounded-lg p-3">
                    <p class="text-[9px] text-neutral-500 mb-1">Atas Nama</p>
                    <p class="font-bold text-xs">${paymentInfo.accountName}</p>
                </div>
                <p class="text-[10px] text-neutral-600 mt-3">${paymentInfo.instructions}</p>
            </div>
        `;
    }
}

function confirmPayment() {
    console.log('confirmPayment called');
    console.log('pendingCheckoutData:', pendingCheckoutData);
    
    if (!pendingCheckoutData) {
        showNotification('⚠️ Data checkout tidak ditemukan!', 'error');
        return;
    }

    // SIMPAN DATA SEBELUM MODAL DITUTUP
    const checkoutData = { ...pendingCheckoutData };

    if (checkoutData.type === 'whatsapp') {
        closePaymentModal();
        showPaymentConfirmModal(checkoutData);
    } else {
        closePaymentModal();
        processCheckout(
            checkoutData.type,
            checkoutData.customerName,
            checkoutData.deliveryFee,
            checkoutData.distance
        );
        
        showNotification('✅ Pesanan berhasil diproses!', 'success');
    }
}

// ==================== PAYMENT CONFIRMATION MODAL (UPLOAD BUKTI) ====================
function showPaymentConfirmModal(checkoutData) {
    console.log('=== PAYMENT CONFIRM MODAL ===');
    console.log('Data diterima:', checkoutData);

    if (!checkoutData) {
        console.error('ERROR: checkoutData kosong!');
        return;
    }
    
    pendingPaymentData = checkoutData;
    store.setState({ pendingPaymentData: checkoutData });
    
    console.log('pendingPaymentData set to:', pendingPaymentData);
    
    const modal = document.getElementById('payment-confirm-modal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }
    
    uploadedProofFile = null;
    store.setState({ uploadedProofFile: null });
    
    const previewDiv = document.getElementById('upload-preview');
    const uploadArea = document.getElementById('upload-area');
    if (previewDiv) previewDiv.classList.add('hidden');
    if (uploadArea) uploadArea.classList.remove('hidden');
    
    const fileInput = document.getElementById('payment-proof');
    if (fileInput) fileInput.value = '';
    
    // Re-attach event listeners to send buttons
    setTimeout(() => {
        attachSendButtonListeners();
    }, 100);
}

function closePaymentConfirmModal() {
    const modal = document.getElementById('payment-confirm-modal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
    pendingPaymentData = null;
    uploadedProofFile = null;
    store.setState({ pendingPaymentData: null, uploadedProofFile: null });
}

function setupFileUpload() {
    const uploadArea = document.getElementById('upload-area');
    const fileInput = document.getElementById('payment-proof');
    
    if (uploadArea && fileInput) {
        uploadArea.addEventListener('click', () => {
            fileInput.click();
        });
        
        fileInput.addEventListener('change', (e) => {
            if (e.target.files && e.target.files[0]) {
                uploadedProofFile = e.target.files[0];
                store.setState({ uploadedProofFile: uploadedProofFile });
                const reader = new FileReader();
                reader.onload = function(ev) {
                    const previewImg = document.getElementById('preview-image');
                    if (previewImg) {
                        previewImg.src = ev.target.result;
                    }
                    const previewDiv = document.getElementById('upload-preview');
                    const uploadAreaDiv = document.getElementById('upload-area');
                    if (previewDiv) previewDiv.classList.remove('hidden');
                    if (uploadAreaDiv) uploadAreaDiv.classList.add('hidden');
                };
                reader.readAsDataURL(e.target.files[0]);
            }
        });
    }
}

function removeUploadedFile() {
    uploadedProofFile = null;
    store.setState({ uploadedProofFile: null });
    const fileInput = document.getElementById('payment-proof');
    if (fileInput) fileInput.value = '';
    const previewDiv = document.getElementById('upload-preview');
    const uploadArea = document.getElementById('upload-area');
    if (previewDiv) previewDiv.classList.add('hidden');
    if (uploadArea) uploadArea.classList.remove('hidden');
}

// ==================== ATTACH SEND BUTTON LISTENERS ====================
function attachSendButtonListeners() {
    console.log('Attaching send button listeners...');
    
    // Send With Proof button
    const sendWithProofBtn = document.getElementById('send-with-proof');
    if (sendWithProofBtn) {
        const newBtn = sendWithProofBtn.cloneNode(true);
        sendWithProofBtn.parentNode.replaceChild(newBtn, sendWithProofBtn);
        newBtn.addEventListener('click', sendWithProof);
        console.log('✅ send-with-proof button attached');
    } else {
        console.warn('❌ send-with-proof button not found!');
    }
    
    // Send Without Proof button
    const sendWithoutProofBtn = document.getElementById('send-without-proof');
    if (sendWithoutProofBtn) {
        const newBtn = sendWithoutProofBtn.cloneNode(true);
        sendWithoutProofBtn.parentNode.replaceChild(newBtn, sendWithoutProofBtn);
        newBtn.addEventListener('click', sendWithoutProof);
        console.log('✅ send-without-proof button attached');
    } else {
        console.warn('❌ send-without-proof button not found!');
    }
}

// ==================== SEND WITH PROOF ====================
async function sendWithProof() {
    console.log('sendWithProof called');
    
    const storeState = store.getState();
    console.log('Store state:', storeState);
    
    let paymentData = pendingPaymentData || storeState.pendingPaymentData;
    let proofFile = uploadedProofFile || storeState.uploadedProofFile;
    
    console.log('paymentData:', paymentData);
    console.log('proofFile:', proofFile);
    
    if (!paymentData) {
        showNotification('⚠️ Data pesanan tidak ditemukan! Silakan ulangi proses pemesanan.', 'error');
        closePaymentConfirmModal();
        setTimeout(() => openCheckoutModal(), 1000);
        return;
    }
    
    if (!proofFile) {
        showNotification('⚠️ Silakan upload bukti transfer terlebih dahulu!', 'error');
        return;
    }
    
    try {
        const number = APP_CONFIG.STORE_PHONE_NUMBER;
        const message = paymentData.waMessage;
        
        showNotification('⏳ Mengirim pesanan dengan bukti transfer...', 'info');
        
        const result = await sendOrderViaAPI(number, message, proofFile);
        
        if (result && result.status) {
            showNotification('✅ Pesanan berhasil dikirim dengan bukti transfer!', 'success');
            
            processCheckout(
                paymentData.type, 
                paymentData.customerName, 
                paymentData.deliveryFee, 
                paymentData.distance
            );
        } else {
            showNotification('⚠️ Gagal mengirim pesanan. Coba lagi.', 'error');
            console.error('API Error:', result);
        }
    } catch (error) {
        console.error('Error sending with proof:', error);
        showNotification('❌ Error mengirim pesanan: ' + error.message, 'error');
    }
    
    closePaymentConfirmModal();
    pendingPaymentData = null;
    uploadedProofFile = null;
    store.setState({ pendingPaymentData: null, uploadedProofFile: null });
}

// ==================== SEND WITHOUT PROOF ====================
async function sendWithoutProof() {
    console.log('sendWithoutProof called');
    
    const storeState = store.getState();
    console.log('Store state:', storeState);
    
    let paymentData = pendingPaymentData || storeState.pendingPaymentData;
    
    console.log('paymentData:', paymentData);
    
    if (!paymentData) {
        showNotification('⚠️ Data pesanan tidak ditemukan! Silakan ulangi proses pemesanan.', 'error');
        closePaymentConfirmModal();
        setTimeout(() => openCheckoutModal(), 1000);
        return;
    }
    
    try {
        const number = APP_CONFIG.STORE_PHONE_NUMBER;
        const message = paymentData.waMessage;
        
        showNotification('⏳ Mengirim pesanan tanpa bukti transfer...', 'info');
        
        const result = await sendOrderViaAPI(number, message, null);
        
        if (result && result.status) {
            showNotification('✅ Pesanan berhasil dikirim!', 'success');
            
            processCheckout(
                paymentData.type, 
                paymentData.customerName, 
                paymentData.deliveryFee, 
                paymentData.distance
            );
        } else {
            showNotification('⚠️ Gagal mengirim pesanan. Coba lagi.', 'error');
            console.error('API Error:', result);
        }
    } catch (error) {
        console.error('Error sending without proof:', error);
        showNotification('❌ Error mengirim pesanan: ' + error.message, 'error');
    }
    
    closePaymentConfirmModal();
    pendingPaymentData = null;
    store.setState({ pendingPaymentData: null });
}

// ==================== CHECKOUT VIA WHATSAPP ====================
async function checkoutViaWhatsApp() {
    if (cartItems.length === 0) return;
    const customerName = document.getElementById('customer-name')?.value || 'Pelanggan';
    store.setState({ customerName: customerName });
    const distance = parseFloat(document.getElementById('delivery-distance')?.value) || 0;
    store.setState({ deliveryDistance: distance });
    const deliveryFee = calculateDeliveryFee(distance);
    const serviceFee = getServiceFee();
    
    const itemsText = cartItems.map((item, idx) => {
        const itemTotal = (item.basePrice + item.toppingPrice) * item.quantity;
        let toppingsText = '';
        if (item.toppings.boba) toppingsText += '+Boba ';
        if (item.toppings.creamCheese) toppingsText += '+Cream Cheese ';
        const tempIcon = item.temperature === 'PANAS' ? '🔥 Panas' : '❄️ Dingin';
        return `${idx+1}. *${item.product.name}* (${item.size === 'L' ? 'Large' : 'Normal'}, ${tempIcon}${toppingsText ? ', ' + toppingsText : ''}) x${item.quantity} - Rp ${itemTotal.toLocaleString()}`;
    }).join('\n');
    
    const subtotal = getSubtotal();
    const total = subtotal + deliveryFee + serviceFee;
    
    let feeText = '';
    if (deliveryFee > 0) {
        if (distance <= APP_CONFIG.DELIVERY_FLAT_RATE_KM) {
            feeText = `Ongkir (${distance} km): Rp ${deliveryFee.toLocaleString()} (flat rate Rp${APP_CONFIG.DELIVERY_FLAT_FEE.toLocaleString()})`;
        } else {
            const extraKm = Math.ceil(distance - APP_CONFIG.DELIVERY_FLAT_RATE_KM);
            feeText = `Ongkir (${distance} km): Rp ${deliveryFee.toLocaleString()} (Rp${APP_CONFIG.DELIVERY_FLAT_FEE.toLocaleString()} + ${extraKm} km × Rp${APP_CONFIG.DELIVERY_EXTRA_PER_KM.toLocaleString()})`;
        }
    } else {
        feeText = `Ongkir: GRATIS (Ambil Sendiri)`;
    }
    
    const msg = APP_CONFIG.WHATSAPP_MESSAGE_TEMPLATE
        .replace('{ITEMS}', itemsText)
        .replace('{SHIPPING_INFO}', feeText)
        .replace('{SERVICE_FEE}', serviceFee.toLocaleString())
        .replace('{SUBTOTAL}', subtotal.toLocaleString())
        .replace('{TOTAL}', total.toLocaleString())
        .replace('{CUSTOMER_NAME}', customerName)
        .replace('{METHOD}', 'WhatsApp Delivery');
    
    const checkoutData = {
        type: 'whatsapp',
        customerName: customerName,
        deliveryFee: deliveryFee,
        distance: distance,
        total: total,
        waMessage: msg
    };
    showPaymentModal(checkoutData);
}

// ==================== CHECKOUT VIA STORE PICKUP ====================
function checkoutViaStorePickup() { 
    if (cartItems.length === 0) return; 
    const customerName = document.getElementById('pickup-name')?.value || 'Pelanggan'; 
    store.setState({ pickupName: customerName });
    const serviceFee = getServiceFee();
    const subtotal = getSubtotal();
    const total = subtotal + serviceFee;
    
    const itemsText = cartItems.map((item, idx) => {
        const itemTotal = (item.basePrice + item.toppingPrice) * item.quantity;
        let toppingsText = '';
        if (item.toppings.boba) toppingsText += '+Boba ';
        if (item.toppings.creamCheese) toppingsText += '+Cream Cheese ';
        const tempIcon = item.temperature === 'PANAS' ? '🔥 Panas' : '❄️ Dingin';
        return `${idx+1}. *${item.product.name}* (${item.size === 'L' ? 'Large' : 'Normal'}, ${tempIcon}${toppingsText ? ', ' + toppingsText : ''}) x${item.quantity} - Rp ${itemTotal.toLocaleString()}`;
    }).join('\n');
    
    const msg = APP_CONFIG.WHATSAPP_MESSAGE_TEMPLATE
        .replace('{ITEMS}', itemsText)
        .replace('{SHIPPING_INFO}', 'Ambil Sendiri di Toko (GRATIS)')
        .replace('{SERVICE_FEE}', serviceFee.toLocaleString())
        .replace('{SUBTOTAL}', subtotal.toLocaleString())
        .replace('{TOTAL}', total.toLocaleString())
        .replace('{CUSTOMER_NAME}', customerName)
        .replace('{METHOD}', 'Ambil di Toko (Bayar di Tempat / Online)');
    
    const checkoutData = {
        type: 'pickup',
        customerName: customerName,
        deliveryFee: 0,
        distance: 0,
        total: total,
        waMessage: msg
    };
    showPaymentModal(checkoutData);
}

// ==================== PROCESS CHECKOUT ====================
function processCheckout(type, customerName, deliveryFee, distance) {
    const subtotal = getSubtotal();
    const serviceFee = getServiceFee();
    const total = subtotal + deliveryFee + serviceFee;
    receiptData = { 
        items: cartItems.map(item => ({ 
            ...item, 
            product: { ...item.product }
        })),
        orderType: type, 
        customerName, 
        distance, 
        deliveryFee,
        serviceFee,
        subtotal, 
        total,
        receiptId: `TC-${type.toUpperCase()}-${Math.floor(100000 + Math.random() * 900000)}`
    };
    store.setState({ receiptData: receiptData });
    closePaymentModal();
    closeCheckoutModal();
    showReceipt();
    cartItems = [];
    store.setState({ cartItems: [] });
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
    store.setState({ userLocation: null });
}

function showReceipt() {
    const receiptIdEl = document.getElementById('receipt-id');
    const badge = document.getElementById('receipt-badge');
    const receiptItems = document.getElementById('receipt-items');
    const receiptSubtotal = document.getElementById('receipt-subtotal');
    const receiptServiceFee = document.getElementById('receipt-service-fee');
    const receiptDeliveryFee = document.getElementById('receipt-delivery-fee');
    const receiptTotal = document.getElementById('receipt-total');
    const receiptMessage = document.getElementById('receipt-message');
    
    if (!receiptData) return;
    
    if (receiptIdEl) receiptIdEl.textContent = `ID RESI: ${receiptData.receiptId}`;
    
    if (badge) {
        if (receiptData.orderType === 'whatsapp' && receiptData.deliveryFee > 0) {
            badge.textContent = `📦 WhatsApp Delivery (Rp${receiptData.deliveryFee.toLocaleString()})`;
            badge.className = 'text-[9px] bg-emerald-100 text-[#128C7E] font-bold px-2 py-0.5 rounded-full mb-2 inline-block';
        } else {
            badge.textContent = '🏪 Ambil Sendiri (GRATIS)';
            badge.className = 'text-[9px] bg-neutral-100 text-[#111111] font-extrabold px-2 py-0.5 rounded-full mb-2 inline-block';
        }
    }
    
    if (receiptItems) {
        receiptItems.innerHTML = receiptData.items.map((item, idx) => {
            const itemTotal = (item.basePrice + item.toppingPrice) * item.quantity;
            let toppingsText = '';
            if (item.toppings.boba) toppingsText += ' +Boba';
            if (item.toppings.creamCheese) toppingsText += ' +Cream Cheese';
            const tempIcon = item.temperature === 'PANAS' ? '🔥' : '❄️';
            return `<div class="flex justify-between text-[10px] py-0.5 border-b border-dashed border-neutral-100">
                <span>${idx+1}. ${item.quantity}x ${item.product.name} ${tempIcon} ${item.size === 'L' ? 'L' : 'N'}${toppingsText}</span>
                <span class="font-mono">Rp ${itemTotal.toLocaleString()}</span>
            </div>`;
        }).join('');
    }
    
    if (receiptSubtotal) receiptSubtotal.textContent = `Rp ${receiptData.subtotal?.toLocaleString() || 0}`;
    if (receiptServiceFee) {
        receiptServiceFee.innerHTML = `<span>Biaya Layanan</span><span>Rp ${receiptData.serviceFee?.toLocaleString() || 0}</span>`;
        receiptServiceFee.classList.remove('hidden');
    }
    
    if (receiptDeliveryFee) {
        if (receiptData.orderType === 'whatsapp' && receiptData.deliveryFee > 0) {
            receiptDeliveryFee.innerHTML = `<span>Biaya Ongkir (${receiptData.distance} km)</span><span>Rp ${receiptData.deliveryFee?.toLocaleString()}</span>`;
            receiptDeliveryFee.classList.remove('hidden');
        } else if (receiptData.orderType === 'whatsapp') {
            receiptDeliveryFee.innerHTML = '<span>Biaya Ongkir</span><span class="text-green-600">GRATIS</span>';
            receiptDeliveryFee.classList.remove('hidden');
        } else {
            receiptDeliveryFee.classList.add('hidden');
        }
    }
    
    if (receiptTotal) receiptTotal.textContent = `Rp ${receiptData.total?.toLocaleString() || 0}`;
    
    let message = '';
    if (receiptData.orderType === 'whatsapp' && receiptData.deliveryFee > 0) {
        message = `📱 Pesanan akan segera diproses dan dikirim dengan ongkir Rp${receiptData.deliveryFee.toLocaleString()}.<br>Terima kasih atas kepercayaan Anda!`;
    } else {
        message = `🏪 Tunjukkan struk digital atas nama <strong>${receiptData.customerName}</strong> ke kasir.<br>Terima kasih telah memesan!`;
    }
    if (receiptMessage) receiptMessage.innerHTML = message;
    
    const modal = document.getElementById('receipt-modal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }
}

function closeReceiptModal() { 
    const modal = document.getElementById('receipt-modal'); 
    if (modal) { 
        modal.classList.add('hidden'); 
        modal.classList.remove('flex'); 
    } 
    receiptData = null; 
    store.setState({ receiptData: null });
}

// ==================== RECEIPT FUNCTIONS ====================
function downloadReceipt() {
    if (!receiptData) {
        showNotification('⚠️ Tidak ada data struk untuk dicetak!', 'error');
        return;
    }
    
    // Create a new receipt element with clean text-only design
    const receiptWrapper = document.createElement('div');
    receiptWrapper.className = 'fixed top-0 left-0 w-screen h-screen z-[100] flex items-center justify-center bg-[#111111]/80 backdrop-blur-sm';
    receiptWrapper.id = 'receipt-print-wrapper';
    
    const receiptCard = document.createElement('div');
    receiptCard.className = 'bg-white p-6 max-w-sm w-full mx-4 shadow-2xl';
    receiptCard.id = 'receipt-print-card';
    receiptCard.style.width = '360px';
    receiptCard.style.maxWidth = '360px';
    receiptCard.style.fontFamily = "'Courier New', monospace";
    
    // Build receipt content - clean text only
    const orderTypeText = receiptData.orderType === 'whatsapp' && receiptData.deliveryFee > 0 
        ? 'DELIVERY' 
        : 'PICKUP';
    
    const itemsHtml = receiptData.items.map((item, idx) => {
        let toppings = '';
        if (item.toppings.boba) toppings += ' +BOBA';
        if (item.toppings.creamCheese) toppings += ' +CREAMCHS';
        const tempIcon = item.temperature === 'PANAS' ? 'HOT' : 'ICE';
        const itemTotal = (item.basePrice + item.toppingPrice) * item.quantity;
        const sizeLabel = item.size === 'L' ? 'L' : 'N';
        return `<div style="display:flex;justify-content:space-between;font-size:11px;padding:2px 0;">
            <span>${idx+1}. ${item.quantity}x ${item.product.name} ${tempIcon} ${sizeLabel}${toppings}</span>
            <span style="font-weight:bold;">Rp${itemTotal.toLocaleString()}</span>
        </div>`;
    }).join('');
    
    receiptCard.innerHTML = `
        <div style="text-align:center;border-bottom:2px dashed #d1d5db;padding-bottom:12px;margin-bottom:10px;">
            <div style="font-size:16px;font-weight:900;letter-spacing:4px;color:#111111;">THE. C DRINKS</div>
            <div style="font-size:8px;color:#9ca3af;letter-spacing:1px;margin-top:2px;">${receiptData.receiptId}</div>
            <div style="font-size:8px;color:#9ca3af;">${new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' })} ${new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}</div>
            <div style="font-size:8px;color:#6b7280;margin-top:4px;font-weight:bold;">${orderTypeText}</div>
            <div style="font-size:8px;color:#6b7280;margin-top:2px;">${receiptData.customerName}</div>
        </div>
        
        <div style="margin-bottom:12px;">
            ${itemsHtml}
        </div>
        
        <div style="border-top:2px dashed #d1d5db;padding-top:10px;">
            <div style="display:flex;justify-content:space-between;font-size:10px;color:#6b7280;">
                <span>SUBTOTAL</span>
                <span>Rp${receiptData.subtotal?.toLocaleString() || 0}</span>
            </div>
            <div style="display:flex;justify-content:space-between;font-size:10px;color:#6b7280;">
                <span>BIAYA LAYANAN</span>
                <span>Rp${receiptData.serviceFee?.toLocaleString() || 0}</span>
            </div>
            ${receiptData.orderType === 'whatsapp' && receiptData.deliveryFee > 0 ? `
            <div style="display:flex;justify-content:space-between;font-size:10px;color:#6b7280;">
                <span>ONGKIR (${receiptData.distance} KM)</span>
                <span>Rp${receiptData.deliveryFee?.toLocaleString()}</span>
            </div>
            ` : ''}
            <div style="display:flex;justify-content:space-between;border-top:2px dashed #d1d5db;padding-top:8px;margin-top:6px;font-size:14px;font-weight:900;">
                <span>TOTAL</span>
                <span style="color:#E11D48;">Rp${receiptData.total?.toLocaleString() || 0}</span>
            </div>
        </div>
        
        <div style="border-top:2px dashed #d1d5db;margin-top:12px;padding-top:10px;text-align:center;">
            <div style="font-size:8px;color:#9ca3af;">${receiptData.orderType === 'whatsapp' && receiptData.deliveryFee > 0 ? 'PESANAN AKAN SEGERA DIPROSES' : 'TUNJUKKAN STRUK INI KE KASIR'}</div>
            <div style="font-size:7px;color:#d1d5db;margin-top:4px;">TERIMA KASIH ATAS PESANAN ANDA</div>
            <div style="font-size:6px;color:#e5e5e5;margin-top:4px;">${APP_CONFIG.STORE_ADDRESS}</div>
        </div>
    `;
    
    receiptWrapper.appendChild(receiptCard);
    document.body.appendChild(receiptWrapper);
    
    // Use html2canvas on the new element
    setTimeout(() => {
        const el = document.getElementById('receipt-print-card');
        if (el && typeof html2canvas !== 'undefined') {
            html2canvas(el, {
                scale: 2.5,
                width: 360,
                height: el.scrollHeight,
                useCORS: true,
                logging: false,
                backgroundColor: '#ffffff',
                onclone: function(document) {
                    // Ensure all elements are rendered properly
                }
            }).then(canvas => {
                const link = document.createElement('a');
                link.download = `Struk-${receiptData?.receiptId || 'THE-C'}.png`;
                link.href = canvas.toDataURL('image/png', 1.0);
                link.click();
                
                // Remove the temporary wrapper
                const wrapper = document.getElementById('receipt-print-wrapper');
                if (wrapper) wrapper.remove();
            }).catch(error => {
                console.error('Error generating receipt:', error);
                showNotification('❌ Gagal mencetak struk', 'error');
                const wrapper = document.getElementById('receipt-print-wrapper');
                if (wrapper) wrapper.remove();
            });
        } else {
            const wrapper = document.getElementById('receipt-print-wrapper');
            if (wrapper) wrapper.remove();
        }
    }, 300);
}

// ==================== ADMIN PANEL FUNCTIONS ====================
function openAdminPanel() {
    if (isAdminAuthenticated) {
        showAdminPanel();
    } else {
        showPasswordModal();
    }
}

function showPasswordModal() {
    document.getElementById('admin-password-modal').classList.remove('hidden');
    document.getElementById('admin-password-modal').classList.add('flex');
    document.getElementById('admin-password-input').value = '';
    document.getElementById('admin-password-input').focus();
}

function closePasswordModal() {
    document.getElementById('admin-password-modal').classList.add('hidden');
    document.getElementById('admin-password-modal').classList.remove('flex');
}

function verifyAdminPassword() {
    const enteredPassword = document.getElementById('admin-password-input').value;
    const hashedEntered = hashPassword(enteredPassword);
    
    if (hashedEntered === HASHED_ADMIN_PASSWORD) {
        isAdminAuthenticated = true;
        closePasswordModal();
        showAdminPanel();
        sessionStorage.setItem('adminAuth', 'true');
    } else {
        alert('Password salah! Akses ditolak.');
        document.getElementById('admin-password-input').value = '';
        document.getElementById('admin-password-input').focus();
    }
}

function showAdminPanel() {
    document.getElementById('admin-modal').classList.remove('hidden');
    document.getElementById('admin-modal').classList.add('flex');
    refreshAdminLists();
}

function closeAdminPanel() {
    document.getElementById('admin-modal').classList.add('hidden');
    document.getElementById('admin-modal').classList.remove('flex');
}

function adminLogout() {
    isAdminAuthenticated = false;
    sessionStorage.removeItem('adminAuth');
    closeAdminPanel();
    showNotification('Anda telah logout dari panel admin', 'info');
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
                <div class="text-[9px] text-neutral-500">${product.category} | Rp ${product.priceN.toLocaleString()} (N) / Rp ${product.priceL.toLocaleString()} (L)</div>
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

// ==================== CRUD OPERATIONS ====================
function showAddProductForm() {
    currentFormType = 'product';
    currentEditId = null;
    document.getElementById('form-title').textContent = 'Tambah Produk Baru';
    document.getElementById('form-fields').innerHTML = `
        <input type="text" id="form-name" placeholder="Nama Produk" class="w-full px-3 py-2 text-xs border rounded-lg mb-2">
        <textarea id="form-desc" placeholder="Deskripsi" class="w-full px-3 py-2 text-xs border rounded-lg mb-2" rows="2"></textarea>
        <input type="text" id="form-category" placeholder="Kategori (chocolate/tea/cake/coffee/fruit)" class="w-full px-3 py-2 text-xs border rounded-lg mb-2">
        <input type="text" id="form-image" placeholder="URL Gambar" class="w-full px-3 py-2 text-xs border rounded-lg mb-2" value="./default.jpeg">
        <input type="number" id="form-priceN" placeholder="Harga Normal (Rp)" class="w-full px-3 py-2 text-xs border rounded-lg mb-2">
        <input type="number" id="form-priceL" placeholder="Harga Large (Rp)" class="w-full px-3 py-2 text-xs border rounded-lg mb-2">
        <label class="flex items-center gap-2 mb-2"><input type="checkbox" id="form-bestSeller"> Best Seller</label>
        <label class="flex items-center gap-2 mb-2"><input type="checkbox" id="form-onlySizeL"> Only Size L</label>
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
        <input type="text" id="form-image" value="${product.image}" placeholder="URL Gambar" class="w-full px-3 py-2 text-xs border rounded-lg mb-2">
        <input type="number" id="form-priceN" value="${product.priceN}" placeholder="Harga Normal" class="w-full px-3 py-2 text-xs border rounded-lg mb-2">
        <input type="number" id="form-priceL" value="${product.priceL}" placeholder="Harga Large" class="w-full px-3 py-2 text-xs border rounded-lg mb-2">
        <label class="flex items-center gap-2 mb-2"><input type="checkbox" id="form-bestSeller" ${product.isBestSeller ? 'checked' : ''}> Best Seller</label>
        <label class="flex items-center gap-2 mb-2"><input type="checkbox" id="form-onlySizeL" ${product.onlySizeL ? 'checked' : ''}> Only Size L</label>
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

function showAddCampaignForm() {
    currentFormType = 'campaign';
    currentEditId = null;
    document.getElementById('form-title').textContent = 'Tambah Promo Baru';
    document.getElementById('form-fields').innerHTML = `
        <input type="text" id="form-title-camp" placeholder="Judul Promo" class="w-full px-3 py-2 text-xs border rounded-lg mb-2">
        <input type="text" id="form-subtitle" placeholder="Subtitle" class="w-full px-3 py-2 text-xs border rounded-lg mb-2">
        <input type="text" id="form-badge" placeholder="Badge (Edisi Terbatas/Terlaris)" class="w-full px-3 py-2 text-xs border rounded-lg mb-2">
        <textarea id="form-desc-camp" placeholder="Deskripsi" class="w-full px-3 py-2 text-xs border rounded-lg mb-2" rows="3"></textarea>
        <input type="text" id="form-image-camp" placeholder="URL Gambar" class="w-full px-3 py-2 text-xs border rounded-lg mb-2">
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
        <input type="text" id="form-image-camp" value="${campaign.image}" placeholder="URL Gambar" class="w-full px-3 py-2 text-xs border rounded-lg mb-2">
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
        <input type="text" id="form-image-test" placeholder="URL Gambar Produk" class="w-full px-3 py-2 text-xs border rounded-lg mb-2">
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
        <input type="text" id="form-image-test" value="${testimonial.productImage}" placeholder="URL Gambar Produk" class="w-full px-3 py-2 text-xs border rounded-lg mb-2">
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
        const newProduct = {
            id: currentEditId || generateId('prod'),
            name: document.getElementById('form-name').value,
            description: document.getElementById('form-desc').value,
            category: document.getElementById('form-category').value,
            image: document.getElementById('form-image').value || './default.jpeg',
            priceN: parseInt(document.getElementById('form-priceN').value) || 0,
            priceL: parseInt(document.getElementById('form-priceL').value) || 0,
            isBestSeller: document.getElementById('form-bestSeller')?.checked || false,
            onlySizeL: document.getElementById('form-onlySizeL')?.checked || false,
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
    } else if (currentFormType === 'campaign') {
        const newCampaign = {
            id: currentEditId || generateId('campaign'),
            title: document.getElementById('form-title-camp').value,
            subTitle: document.getElementById('form-subtitle').value,
            badge: document.getElementById('form-badge').value,
            description: document.getElementById('form-desc-camp').value,
            image: document.getElementById('form-image-camp').value,
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
    } else if (currentFormType === 'testimonial') {
        const newTestimonial = {
            id: currentEditId || generateId('test'),
            customerName: document.getElementById('form-name-test').value,
            reviewTitle: document.getElementById('form-title-test').value,
            reviewText: document.getElementById('form-text-test').value,
            city: document.getElementById('form-city').value,
            date: document.getElementById('form-date').value,
            productImage: document.getElementById('form-image-test').value,
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
    } else if (currentFormType === 'instagram') {
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

// ==================== API FUNCTIONS ====================
async function loadDataFromAPI() {
    try {
        console.log('🔄 Loading data from JSONBin...');
        const response = await fetch(`https://api.jsonbin.io/v3/b/${APP_CONFIG.JSONBIN_BIN_ID}/latest`, {
            headers: { 'X-Access-Key': APP_CONFIG.JSONBIN_ACCESS_KEY }
        });
        
        if (response.ok) {
            const data = await response.json();
            const record = data.record;
            
            if (record && record.products && record.products.length > 0) {
                productsData = record.products;
                campaignsData = record.campaigns || APP_CONFIG.DEFAULT_CAMPAIGNS;
                testimonialsData = record.testimonials || APP_CONFIG.DEFAULT_TESTIMONIALS;
                instagramPostsData = record.instagram || APP_CONFIG.DEFAULT_INSTAGRAM;
                console.log('✅ Data loaded successfully from JSONBin');
            } else {
                console.log('⚠️ Bin kosong, mengisi dengan data default...');
                productsData = APP_CONFIG.DEFAULT_PRODUCTS;
                campaignsData = APP_CONFIG.DEFAULT_CAMPAIGNS;
                testimonialsData = APP_CONFIG.DEFAULT_TESTIMONIALS;
                instagramPostsData = APP_CONFIG.DEFAULT_INSTAGRAM;
                await saveAllDataToAPI();
            }
        } else {
            console.error('❌ API response error:', response.status);
            await createOrUpdateBinWithDefaultData();
        }
    } catch (error) {
        console.error('❌ Error loading data:', error);
        productsData = APP_CONFIG.DEFAULT_PRODUCTS;
        campaignsData = APP_CONFIG.DEFAULT_CAMPAIGNS;
        testimonialsData = APP_CONFIG.DEFAULT_TESTIMONIALS;
        instagramPostsData = APP_CONFIG.DEFAULT_INSTAGRAM;
    }
}

async function createOrUpdateBinWithDefaultData() {
    const defaultData = {
        products: APP_CONFIG.DEFAULT_PRODUCTS,
        campaigns: APP_CONFIG.DEFAULT_CAMPAIGNS,
        testimonials: APP_CONFIG.DEFAULT_TESTIMONIALS,
        instagram: APP_CONFIG.DEFAULT_INSTAGRAM,
        lastUpdated: new Date().toISOString()
    };
    
    try {
        const updateResponse = await fetch(`https://api.jsonbin.io/v3/b/${APP_CONFIG.JSONBIN_BIN_ID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Access-Key': APP_CONFIG.JSONBIN_ACCESS_KEY
            },
            body: JSON.stringify(defaultData)
        });
        
        if (updateResponse.ok) {
            console.log('✅ Bin updated with default data');
            productsData = APP_CONFIG.DEFAULT_PRODUCTS;
            campaignsData = APP_CONFIG.DEFAULT_CAMPAIGNS;
            testimonialsData = APP_CONFIG.DEFAULT_TESTIMONIALS;
            instagramPostsData = APP_CONFIG.DEFAULT_INSTAGRAM;
            showNotification('Database berhasil diinisialisasi!', 'success');
        } else {
            console.log('🆕 Creating new bin...');
            const createResponse = await fetch('https://api.jsonbin.io/v3/b', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Access-Key': APP_CONFIG.JSONBIN_ACCESS_KEY
                },
                body: JSON.stringify(defaultData)
            });
            
            if (createResponse.ok) {
                const newBin = await createResponse.json();
                console.log('✅ New bin created with ID:', newBin.id);
                showNotification(`Bin baru berhasil dibuat! ID: ${newBin.id}`, 'success');
            } else {
                console.error('❌ Failed to create bin');
                showNotification('Gagal membuat database!', 'error');
            }
        }
    } catch (error) {
        console.error('❌ Error creating/updating bin:', error);
        showNotification('Error koneksi ke database!', 'error');
    }
}

async function saveAllDataToAPI() {
    const dataToSave = {
        products: productsData,
        campaigns: campaignsData,
        testimonials: testimonialsData,
        instagram: instagramPostsData,
        lastUpdated: new Date().toISOString()
    };
    
    try {
        const response = await fetch(`https://api.jsonbin.io/v3/b/${APP_CONFIG.JSONBIN_BIN_ID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Access-Key': APP_CONFIG.JSONBIN_ACCESS_KEY
            },
            body: JSON.stringify(dataToSave)
        });
        
        if (response.ok) {
            console.log('✅ Data saved successfully');
            showNotification('Data berhasil disimpan!', 'success');
        } else {
            console.error('❌ Save failed:', response.status);
            showNotification(`Gagal menyimpan: ${response.status}`, 'error');
        }
    } catch (error) {
        console.error('❌ Error saving data:', error);
        showNotification('Gagal menyimpan data! Cek koneksi internet', 'error');
    }
}

async function saveProducts() { await saveAllDataToAPI(); }
async function saveCampaigns() { await saveAllDataToAPI(); }
async function saveTestimonials() { await saveAllDataToAPI(); }
async function saveInstagram() { await saveAllDataToAPI(); }

// ==================== MODAL FUNCTIONS ====================
const storeData = {
    "id": "store-bondowoso", "name": "The. C Drinks, Diponegoro, Bondowoso", 
    "address": APP_CONFIG.STORE_ADDRESS, 
    "phone": APP_CONFIG.STORE_PHONE_NUMBER, 
    "hours": "10:00 Pagi - 10:00 Malam", 
    "mapsUrl": "https://www.google.com/maps/place/The.+C+Drinks/@-7.9108787,113.8193598", 
    "city": "Bondowoso"
};

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
    const nameEl = document.getElementById('store-name');
    const addressEl = document.getElementById('store-address');
    const phoneEl = document.getElementById('store-phone');
    const hoursEl = document.getElementById('store-hours');
    const mapsUrlEl = document.getElementById('store-maps-url');
    
    if (nameEl) nameEl.textContent = storeData.name;
    if (addressEl) addressEl.textContent = storeData.address;
    if (phoneEl) phoneEl.textContent = storeData.phone;
    if (hoursEl) hoursEl.textContent = storeData.hours;
    if (mapsUrlEl) mapsUrlEl.href = storeData.mapsUrl;
}

function submitContactForm(event) {
    event.preventDefault();
    const name = document.getElementById('contact-name')?.value || '';
    const phone = document.getElementById('contact-phone')?.value || '';
    const message = document.getElementById('contact-message')?.value || '';
    if (name && phone && message) {
        const waMessage = APP_CONFIG.CONTACT_MESSAGE_TEMPLATE
            .replace('{NAME}', name)
            .replace('{PHONE}', phone)
            .replace('{MESSAGE}', message);
        
        sendWhatsAppMessage(APP_CONFIG.STORE_PHONE_NUMBER, `📞 *PESAN DARI PELANGGAN*\n\n${waMessage}`)
            .then(result => {
                if (result && result.status) {
                    showNotification('✅ Pesan berhasil dikirim!', 'success');
                } else {
                    showNotification('⚠️ Gagal mengirim pesan', 'error');
                }
            })
            .catch(error => {
                console.error('Error sending contact message:', error);
                showNotification('❌ Error mengirim pesan', 'error');
            });
        
        const formContainer = document.getElementById('contact-form-container');
        const successContainer = document.getElementById('contact-success');
        if (formContainer) formContainer.classList.add('hidden');
        if (successContainer) successContainer.classList.remove('hidden');
    }
}

function resetContactForm() {
    const nameInput = document.getElementById('contact-name');
    const phoneInput = document.getElementById('contact-phone');
    const messageInput = document.getElementById('contact-message');
    if (nameInput) nameInput.value = '';
    if (phoneInput) phoneInput.value = '';
    if (messageInput) messageInput.value = '';
    const formContainer = document.getElementById('contact-form-container');
    const successContainer = document.getElementById('contact-success');
    if (formContainer) formContainer.classList.remove('hidden');
    if (successContainer) successContainer.classList.add('hidden');
}

function openLightbox(id) {
    const post = instagramPostsData.find(x => x.id === id);
    if (post) {
        const imgEl = document.getElementById('lightbox-img');
        const likesSpan = document.getElementById('lightbox-likes');
        const commentsSpan = document.getElementById('lightbox-comments');
        const captionEl = document.getElementById('lightbox-caption');
        
        if (imgEl) imgEl.src = post.image;
        if (likesSpan) likesSpan.innerHTML = `❤️ ${post.likes}`;
        if (commentsSpan) commentsSpan.innerHTML = `💬 ${post.comments}`;
        if (captionEl) captionEl.textContent = post.caption;
        
        const modal = document.getElementById('lightbox-modal');
        if (modal) { modal.classList.remove('hidden'); modal.classList.add('flex'); }
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

function closeMobileDrawer() { 
    document.getElementById('mobile-drawer')?.classList.add('hidden'); 
    document.getElementById('mobile-backdrop')?.classList.add('hidden'); 
}

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
    console.log('🚀 THE. C DRINKS App Initialized');
    console.log('📦 Store state:', store.getState());
    
    checkExistingAuth();
    await loadData();
    
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', toggleMobileDrawer);
    
    const cartBtn = document.getElementById('cart-floating-btn');
    if (cartBtn) cartBtn.addEventListener('click', openCartDrawer);
    
    const distanceInput = document.getElementById('delivery-distance');
    if (distanceInput) distanceInput.addEventListener('input', updateDeliveryFee);
    
    const qrisBtn = document.getElementById('pay-qris');
    const bcaBtn = document.getElementById('pay-bca');
    if (qrisBtn) qrisBtn.addEventListener('click', () => selectPaymentMethod('QRIS'));
    if (bcaBtn) bcaBtn.addEventListener('click', () => selectPaymentMethod('BCA'));
    
    const confirmPayBtn = document.getElementById('confirm-payment');
    if (confirmPayBtn) confirmPayBtn.addEventListener('click', confirmPayment);
    
    const closePaymentModalBtn = document.getElementById('close-payment-modal');
    if (closePaymentModalBtn) closePaymentModalBtn.addEventListener('click', closePaymentModal);
    
    // Attach send button listeners
    attachSendButtonListeners();
    
    // Setup file upload handlers
    setupFileUpload();
    
    // Subscribe to store changes
    store.subscribe((state) => {
        console.log('🔄 Store updated:', state);
    });
    
    console.log('✅ All event listeners attached');
});

// ==================== GLOBAL EXPOSURE ====================
window.updateDeliveryFee = updateDeliveryFee;
window.getUserLocationWA = getUserLocationWA;
window.clearLocationWA = clearLocationWA;
window.resetLocationPermission = resetLocationPermission;
window.checkoutViaWhatsApp = checkoutViaWhatsApp;
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
window.addToCartFromCard = addToCartFromCard;
window.addToCart = addToCart;
window.removeCartItem = removeCartItem;
window.updateQuantity = updateQuantity;
window.openAdminPanel = openAdminPanel;
window.closeAdminPanel = closeAdminPanel;
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
window.closePasswordModal = closePasswordModal;
window.verifyAdminPassword = verifyAdminPassword;
window.adminLogout = adminLogout;
window.selectPaymentMethod = selectPaymentMethod;
window.confirmPayment = confirmPayment;
window.closePaymentModal = closePaymentModal;
window.closePaymentConfirmModal = closePaymentConfirmModal;
window.removeUploadedFile = removeUploadedFile;
window.sendWithProof = sendWithProof;
window.sendWithoutProof = sendWithoutProof;
window.sendWhatsAppMessage = sendWhatsAppMessage;
window.sendWhatsAppImage = sendWhatsAppImage;
window.sendOrderViaAPI = sendOrderViaAPI;
window.fileToBase64 = fileToBase64;
window.attachSendButtonListeners = attachSendButtonListeners;
