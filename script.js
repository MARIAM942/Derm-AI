// --- START OF script.js ---
const translations = {
    en: {
        "Derm AI": "Derm AI",
        "Search for a disease...": "Search for a disease...",
        "About": "About",
        "FAQ": "FAQ",
        "Contact": "Contact",
        "Donate": "Donate",
        "Sign In": "Sign In",
        "Logout": "Logout",
        "Register": "Register",
        "Login": "Login",
        "Already have an account? Log in": "Already have an account? Log in",
        "Need an account? Register": "Need an account? Register",
        "Sign in with Google": "Sign in with Google",
        "Upload Your Skin Photo": "Upload Your Skin Photo",
        "Please upload a clear image of the affected skin area. Ensure the photo is well-lit and focused for better analysis.": "Please upload a clear image of the affected skin area. Ensure the photo is well-lit and focused for better analysis.",
        "Your Age": "Your Age",
        "Your Gender": "Your Gender",
        "Male": "Male",
        "Female": "Female",
        "Your Skin Type": "Your Skin Type",
        "Dry": "Dry",
        "Oily": "Oily",
        "Combination": "Combination",
        "Choose Photo": "Choose Photo",
        "About Derm AI": "About Derm AI",
        "about1": "Skin diseases are among the most prevalent health concerns worldwide, affecting millions of people across all age groups.",
        "about2": "At Derm AI, we are committed to leveraging the power of technology to address these challenges.",
        "about3": "By integrating deep learning and advanced AI algorithms, we aim to revolutionize how skin conditions are detected and managed.",
        "about4": "Our AI models analyze high-quality photos of skin to identify a wide range of conditions, from common issues like acne and eczema to more complex skin concerns.",
        "about5": "With the ability to provide rapid, accurate, and accessible diagnostics, our platform serves as a valuable tool for individuals seeking insights into their skin health.",
        "about6": "This approach is particularly beneficial for those in underserved or remote areas, where access to dermatological care is limited.",
        "Frequently Asked Questions": "Frequently Asked Questions",
        "How does Derm AI work?": "How does Derm AI work?",
        "Derm AI is an innovative platform designed to diagnose skin diseases quickly and accurately. Users simply upload a clear photo of the affected area, and our advanced algorithms analyze the image against a vast database of skin conditions. This process allows us to provide a preliminary diagnosis in a matter of seconds. Our technology is built on a lot of research and expertise in dermatology, ensuring that you receive reliable insights. With Derm AI, your journey to healthier skin starts with just a click.": "Derm AI is an innovative platform designed to diagnose skin diseases quickly and accurately. Users simply upload a clear photo of the affected area, and our advanced algorithms analyze the image against a vast database of skin conditions. This process allows us to provide a preliminary diagnosis in a matter of seconds. Our technology is built on a lot of research and expertise in dermatology, ensuring that you receive reliable insights. With Derm AI, your journey to healthier skin starts with just a click.",
        "Is my data safe with Derm AI?": "Is my data safe with Derm AI?",
        "At Derm AI, your privacy and security are our top priorities. We employ state-of-the-art encryption and data protection measures to safeguard your personal information and uploaded images. Your data is stored securely and is only used for diagnostic purposes. We adhere to strict privacy regulations and do not share your information with third parties without your consent. Rest assured, when you use Derm AI, your sensitive information remains confidential while you receive the best possible skin care advice.": "At Derm AI, your privacy and security are our top priorities. We employ state-of-the-art encryption and data protection measures to safeguard your personal information and uploaded images. Your data is stored securely and is only used for diagnostic purposes. We adhere to strict privacy regulations and do not share your information with third parties without your consent. Rest assured, when you use Derm AI, your sensitive information remains confidential while you receive the best possible skin care advice.",
        "Can Derm AI replace a dermatologist?": "Can Derm AI replace a dermatologist?",
        "While Derm AI offers a convenient and quick way to assess skin conditions, it is not a substitute for professional medical advice. Our platform provides preliminary insights based on image analysis, which can be a useful starting point for understanding your skin health. However, for a comprehensive diagnosis and treatment plan, we always recommend consulting a licensed dermatologist. Derm AI empowers you with information, but your health deserves the expertise of a qualified professional.": "While Derm AI offers a convenient and quick way to assess skin conditions, it is not a substitute for professional medical advice. Our platform provides preliminary insights based on image analysis, which can be a useful starting point for understanding your skin health. However, for a comprehensive diagnosis and treatment plan, we always recommend consulting a licensed dermatologist. Derm AI empowers you with information, but your health deserves the expertise of a qualified professional.",
        "Contact Us": "Contact Us",
        "Your Name": "Your Name",
        "Your Email": "Your Email",
        "Your Feedback": "Your Feedback",
        "Submit": "Submit",
        "Submitting...": "Submitting...", // New translation
        "© 2024 Derm AI | All rights reserved": "© 2024 Derm AI | All rights reserved",
        "Nearest Dermatologist": "Nearest Dermatologist",
        "Close": "Close",
        "Name": "Name",
        "Email": "Email",
        "Password": "Password",
        "Diagnosis: ": "Diagnosis: ",
        "Verification email sent!": "Verification email sent!",
        "Error sending verification email: ": "Error sending verification email: ",
        "Account Created! Please verify your email.": "Account Created! Please verify your email.",
        "Please verify your email before logging in.": "Please verify your email before logging in.",
        "Logged In!": "Logged In!",
        "Logged in as: ": "Logged in as: ",
        "Google Sign-In Error: ": "Google Sign-In Error: ",
        "Not logged in": "Not logged in",
        "Logged Out!": "Logged Out!",
        "Logout error: ": "Logout error: ",
        "No image selected": "No image selected",
        "Please enter your age.": "Please enter your age.",
        "Prediction service not available.": "Prediction service not available.",
        "Analyzing... Please wait.": "Analyzing... Please wait.",
        "Error": "Error",
        "Could not get a diagnosis.": "Could not get a diagnosis.",
        "Failed to get diagnosis. Check console for details.": "Failed to get diagnosis. Check console for details.",
        "Map could not be loaded. Ensure API key is correct and API is enabled.": "Map could not be loaded. Ensure API key is correct and API is enabled.",
        "Thank you for your feedback!": "Thank you for your feedback!",
        "Error submitting feedback. Please try again later.": "Error submitting feedback. Please try again later.",
        "Please fill in all feedback fields.": "Please fill in all feedback fields."
        // Removed: "Error submitting feedback. Please try again later. (Admin: Configure Google Form URL)"
    },
    ar: {
        "Derm AI": "Derm AI",
        "Search for a disease...": "ابحث عن مرض...",
        "About": "حول",
        "FAQ": "الأسئلة الشائعة",
        "Contact": "اتصل",
        "Donate": "تبرع",
        "Sign In": "تسجيل الدخول",
        "Logout": "تسجيل الخروج",
        "Register": "تسجيل",
        "Login": "تسجيل الدخول",
        "Already have an account? Log in": "هل لديك حساب بالفعل؟ تسجيل الدخول",
        "Need an account? Register": "ليس لديك حساب؟ تسجيل",
        "Sign in with Google": "تسجيل الدخول باستخدام جوجل",
        "Upload Your Skin Photo": "تحميل صورة بشرتك",
        "Please upload a clear image of the affected skin area. Ensure the photo is well-lit and focused for better analysis.": "يرجى تحميل صورة واضحة للمنطقة المصابة من الجلد. تأكد من أن الصورة مضاءة جيدًا ومركزة لتحليل أفضل.",
        "Your Age": "عمرك",
        "Your Gender": "جنسك",
        "Male": "ذكر",
        "Female": "أنثى",
        "Your Skin Type": "نوع بشرتك",
        "Dry": "جافة",
        "Oily": "دهنية",
        "Combination": "مختلطة",
        "Choose Photo": "اختر صورة",
        "About Derm AI": "حول Derm AI",
        "about1": "تعد الأمراض الجلدية من بين المخاوف الصحية الأكثر انتشارًا في جميع أنحاء العالم، حيث تؤثر على ملايين الأشخاص من جميع الفئات العمرية.",
        "about2": "في Derm AI، نحن ملتزمون بتسخير قوة التكنولوجيا لمواجهة هذه التحديات.",
        "about3": "من خلال دمج التعلم العميق وخوارزميات الذكاء الاصطناعي المتقدمة، نهدف إلى إحداث ثورة في كيفية اكتشاف الأمراض الجلدية وإدارتها.",
        "about4": "تقوم نماذج الذكاء الاصطناعي لدينا بتحليل صور عالية الجودة للبشرة لتحديد مجموعة واسعة من الحالات، من المشكلات الشائعة مثل حب الشباب والأكزيما إلى مشاكل الجلد الأكثر تعقيدًا.",
        "about5": "بفضل القدرة على توفير تشخيصات سريعة ودقيقة ويمكن الوصول إليها، تعد منصتنا أداة قيمة للأفراد الذين يبحثون عن رؤى حول صحة بشرتهم.",
        "about6": "يعتبر هذا النهج مفيدًا بشكل خاص لأولئك الموجودين في المناطق المحرومة أو النائية، حيث يكون الوصول إلى الرعاية الجلدية محدودًا.",
        "Frequently Asked Questions": "الأسئلة الشائعة",
        "How does Derm AI work?": "كيف يعمل Derm AI؟",
        "Derm AI is an innovative platform designed to diagnose skin diseases quickly and accurately. Users simply upload a clear photo of the affected area, and our advanced algorithms analyze the image against a vast database of skin conditions. This process allows us to provide a preliminary diagnosis in a matter of seconds. Our technology is built on a lot of research and expertise in dermatology, ensuring that you receive reliable insights. With Derm AI, your journey to healthier skin starts with just a click.": "Derm AI هي منصة مبتكرة مصممة لتشخيص الأمراض الجلدية بسرعة وبدقة. يقوم المستخدمون ببساطة بتحميل صورة واضحة للمنطقة المصابة، وتقوم الخوارزميات المتقدمة لدينا بتحليل الصورة مقابل قاعدة بيانات واسعة من الأمراض الجلدية. تتيح لنا هذه العملية تقديم تشخيص أولي في غضون ثوانٍ. تم بناء تقنيتنا على الكثير من الأبحاث والخبرة في طب الأمراض الجلدية، مما يضمن حصولك على رؤى موثوقة. مع Derm AI، تبدأ رحلتك نحو بشرة أكثر صحة بنقرة واحدة فقط.",
        "Is my data safe with Derm AI?": "هل بياناتي آمنة مع Derm AI؟",
        "At Derm AI, your privacy and security are our top priorities. We employ state-of-the-art encryption and data protection measures to safeguard your personal information and uploaded images. Your data is stored securely and is only used for diagnostic purposes. We adhere to strict privacy regulations and do not share your information with third parties without your consent. Rest assured, when you use Derm AI, your sensitive information remains confidential while you receive the best possible skin care advice.": "في Derm AI، خصوصيتك وأمنك هما أولويتنا القصوى. نحن نستخدم أحدث تقنيات التشفير وإجراءات حماية البيانات لحماية معلوماتك الشخصية والصور التي تم تحميلها. يتم تخزين بياناتك بشكل آمن ولا يتم استخدامها إلا لأغراض التشخيص. نحن نلتزم بلوائح الخصوصية الصارمة ولا نشارك معلوماتك مع أطراف ثالثة دون موافقتك. كن مطمئنًا، عند استخدام Derm AI، تظل معلوماتك الحساسة سرية بينما تتلقى أفضل النصائح الممكنة للعناية بالبشرة.",
        "Can Derm AI replace a dermatologist?": "هل يمكن أن يحل Derm AI محل طبيب الأمراض الجلدية؟",
        "While Derm AI offers a convenient and quick way to assess skin conditions, it is not a substitute for professional medical advice. Our platform provides preliminary insights based on image analysis, which can be a useful starting point for understanding your skin health. However, for a comprehensive diagnosis and treatment plan, we always recommend consulting a licensed dermatologist. Derm AI empowers you with information, but your health deserves the expertise of a qualified professional.": "في حين أن Derm AI يقدم طريقة مريحة وسريعة لتقييم الأمراض الجلدية، إلا أنه ليس بديلاً عن المشورة الطبية المتخصصة. توفر منصتنا رؤى أولية بناءً على تحليل الصور، والتي يمكن أن تكون نقطة انطلاق مفيدة لفهم صحة بشرتك. ومع ذلك، للحصول على تشخيص شامل وخطة علاج، نوصي دائمًا باستشارة طبيب أمراض جلدية مرخص. يزودك Derm AI بالمعلومات، ولكن صحتك تستحق خبرة أخصائي مؤهل.",
        "Contact Us": "اتصل بنا",
        "Your Name": "اسمك",
        "Your Email": "بريدك الالكتروني",
        "Your Feedback": "ملاحظاتك",
        "Submit": "إرسال",
        "Submitting...": "جارٍ الإرسال...", // New translation
        "© 2024 Derm AI | All rights reserved": "© 2024 Derm AI | جميع الحقوق محفوظة",
        "Nearest Dermatologist": "أقرب طبيب جلدية",
        "Close": "إغلاق",
        "Name": "الاسم",
        "Email": "البريد الإلكتروني",
        "Password": "كلمة المرور",
        "Diagnosis: ": "التشخيص: ",
        "Verification email sent!": "تم إرسال بريد التحقق!",
        "Error sending verification email: ": "خطأ في إرسال بريد التحقق: ",
        "Account Created! Please verify your email.": "تم إنشاء الحساب! يرجى التحقق من بريدك الإلكتروني.",
        "Please verify your email before logging in.": "يرجى التحقق من بريدك الإلكتروني قبل تسجيل الدخول.",
        "Logged In!": "تم تسجيل الدخول!",
        "Logged in as: ": "مسجل الدخول كـ: ",
        "Google Sign-In Error: ": "خطأ في تسجيل الدخول باستخدام جوجل: ",
        "Not logged in": "غير مسجل الدخول",
        "Logged Out!": "تم تسجيل الخروج!",
        "Logout error: ": "خطأ في تسجيل الخروج: ",
        "No image selected": "لم يتم اختيار صورة",
        "Please enter your age.": "يرجى إدخال عمرك.",
        "Prediction service not available.": "خدمة التنبؤ غير متوفرة.",
        "Analyzing... Please wait.": "جاري التحليل... يرجى الانتظار.",
        "Error": "خطأ",
        "Could not get a diagnosis.": "تعذر الحصول على تشخيص.",
        "Failed to get diagnosis. Check console for details.": "فشل الحصول على التشخيص. تحقق من وحدة التحكم لمزيد من التفاصيل.",
        "Map could not be loaded. Ensure API key is correct and API is enabled.": "تعذر تحميل الخريطة. تأكد من صحة مفتاح API وتمكين الواجهة.",
        "Thank you for your feedback!": "شكرا لك على ملاحظاتك!",
        "Error submitting feedback. Please try again later.": "حدث خطأ أثناء إرسال ملاحظاتك. يرجى المحاولة مرة أخرى في وقت لاحق.",
        "Please fill in all feedback fields.": "يرجى ملء جميع حقول الملاحظات."
    },
    fr: {
        // ... (keep other french translations)
        "Submit": "Soumettre",
        "Submitting...": "Envoi en cours...", // New translation
        "Thank you for your feedback!": "Merci pour vos commentaires !",
        "Error submitting feedback. Please try again later.": "Erreur lors de l'envoi des commentaires. Veuillez réessayer plus tard.",
        "Please fill in all feedback fields.": "Veuillez remplir tous les champs de commentaires."
    },
    de: {
        // ... (keep other german translations)
        "Submit": "Absenden",
        "Submitting...": "Wird gesendet...", // New translation
        "Thank you for your feedback!": "Vielen Dank für Ihr Feedback!",
        "Error submitting feedback. Please try again later.": "Fehler beim Senden des Feedbacks. Bitte versuchen Sie es später erneut.",
        "Please fill in all feedback fields.": "Bitte füllen Sie alle Feedback-Felder aus."
    }
};

// REMOVED Google Form Configuration Constants
// const GOOGLE_FORM_ACTION_URL = '...';
// const GOOGLE_FORM_ENTRY_ID_NAME = '...';
// etc.


const firebaseConfig = {
    apiKey: "AIzaSyAWq4eohRLe5wu7U2qrHNh_HIGTgbUXktQ",
    authDomain: "derm-ai-e8ab1.firebaseapp.com",
    projectId: "derm-ai-e8ab1",
    storageBucket: "derm-ai-e8ab1.firebasestorage.app",
    messagingSenderId: "548322182911",
    appId: "1:548322182911:web:26eff39cb5be3345a9eeca",
    measurementId: "G-WQC214C9F2"
};

// Initialize Firebase (still needed for auth, etc.)
if (typeof firebase !== 'undefined' && !firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else if (typeof firebase === 'undefined') {
    console.error("Firebase SDK not loaded!");
}
const auth = typeof firebase !== 'undefined' ? firebase.auth() : null;
// Firestore (db) is no longer needed for feedback, but might be for other features
// const db = typeof firebase !== 'undefined' ? firebase.firestore() : null;


// --- Global DOM Elements (initialized in initializeDOMElements) ---
let signInModal, registerSection, loginSection, modalTitle, userStatusP,
    signInLink, profilePicImg, logoutLink, languageSelect, htmlElement,
    searchBarInput, suggestionsList, locationButton, locationModal, closeLocationModal,
    mapDiv, closeSignInModal, registerForm, loginForm, googleSignInBtn,
    loginLinkInModal, registerLinkInModal, uploadPreviewDiv, diagnosisResultSpan,
    ageInput, genderSelect, skinTypeSelect, photoInput, feedbackFormElement,
    feedbackSubmitButton, // Added for disabling during submission
    registerEmailInput, registerPasswordInput, loginEmailInput, loginPasswordInput;

function initializeDOMElements() {
    signInModal = document.getElementById('signInModal');
    registerSection = document.getElementById('register-section');
    loginSection = document.getElementById('login-section');
    modalTitle = document.getElementById('modalTitle');
    userStatusP = document.getElementById('user-status');
    signInLink = document.getElementById('signInLink');
    profilePicImg = document.getElementById('profilePic');
    logoutLink = document.getElementById('logoutLink');
    languageSelect = document.getElementById('language-select');
    htmlElement = document.documentElement;
    searchBarInput = document.getElementById('search-bar');
    suggestionsList = document.getElementById('suggestions');
    locationButton = document.getElementById('locationButton');
    locationModal = document.getElementById('locationModal');
    closeLocationModal = document.getElementById('closeLocationModal');
    mapDiv = document.getElementById('map');
    closeSignInModal = document.getElementById('closeSignInModal');
    registerForm = document.getElementById('registerForm');
    loginForm = document.getElementById('loginForm');
    googleSignInBtn = document.getElementById('googleSignInBtn');
    loginLinkInModal = document.getElementById('loginLink');
    registerLinkInModal = document.getElementById('registerLink');
    uploadPreviewDiv = document.getElementById('upload-preview');
    diagnosisResultSpan = document.getElementById('diagnosis-result');
    ageInput = document.getElementById('age');
    genderSelect = document.getElementById('gender');
    skinTypeSelect = document.getElementById('skinType');
    photoInput = document.getElementById('skin-photo');
    feedbackFormElement = document.getElementById('feedbackForm');
    if (feedbackFormElement) { // Get the submit button if the form exists
        feedbackSubmitButton = feedbackFormElement.querySelector('button[type="submit"]');
    }
    registerEmailInput = document.getElementById("registerEmail");
    registerPasswordInput = document.getElementById("registerPassword");
    loginEmailInput = document.getElementById("loginEmail");
    loginPasswordInput = document.getElementById("loginPassword");
}

// ... (keep sendWelcomeEmail, sendVerificationEmail, registerUser, loginUser, googleSignIn, logoutUser, updateHeaderUI, auth.onAuthStateChanged, showLoginForm, showRegisterForm, previewPhotoAndDiagnose, setupSmoothScrolling, siteDiseases, setupSearchFunctionality, initMap, translate, updateTextContentForLanguage)
// These functions are unchanged for now.

const sendWelcomeEmail = async (email) => {
    const emailEndpoint = 'YOUR_DEPLOYED_WELCOME_EMAIL_ENDPOINT_URL'; // <<<<<<< IMPORTANT: REPLACE
    if (emailEndpoint === 'YOUR_DEPLOYED_WELCOME_EMAIL_ENDPOINT_URL') {
        console.warn('Welcome email endpoint not configured.'); return;
    }
    try {
        const response = await fetch(emailEndpoint, {
            method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: email })
        });
        if (!response.ok) console.error('Failed to send welcome email:', response.status, await response.text());
        else console.log('Welcome email request sent.');
    } catch (error) { console.error('Error sending welcome email request:', error); }
};

const sendVerificationEmail = (user) => {
    user.sendEmailVerification()
        .then(() => alert(translate("Verification email sent!")))
        .catch((error) => alert(translate("Error sending verification email: ") + error.message));
};

function registerUser() {
    if (!registerEmailInput || !registerPasswordInput || !auth) return;
    const email = registerEmailInput.value;
    const password = registerPasswordInput.value;
    auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            sendVerificationEmail(userCredential.user);
            sendWelcomeEmail(email).catch(e => console.error("Async call error:", e));
            alert(translate("Account Created! Please verify your email."));
            if (signInModal) signInModal.style.display = 'none';
        })
        .catch(error => alert(error.message));
}

function loginUser() {
    if (!loginEmailInput || !loginPasswordInput || !auth) return;
    const email = loginEmailInput.value;
    const password = loginPasswordInput.value;
    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            if (!userCredential.user.emailVerified) {
                alert(translate("Please verify your email before logging in."));
                auth.signOut(); return;
            }
            alert(translate("Logged In!"));
            if (signInModal) signInModal.style.display = 'none';
            if (userStatusP) userStatusP.textContent = `${translate("Logged in as: ")}${userCredential.user.email}`;
        })
        .catch(error => alert(error.message));
}

const googleSignIn = () => {
    if (!auth) return;
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then(result => {
            if (signInModal) signInModal.style.display = 'none';
            if (userStatusP) userStatusP.textContent = `${translate("Logged in as: ")}${result.user.email}`;
            if (result.additionalUserInfo && result.additionalUserInfo.isNewUser) {
                sendWelcomeEmail(result.user.email).catch(e => console.error("Async call error:", e));
            }
        })
        .catch(error => alert(`${translate("Google Sign-In Error: ")}${error.message}`));
};

function logoutUser() {
    if (!auth) return;
    auth.signOut()
        .then(() => {
            if (userStatusP) userStatusP.textContent = translate("Not logged in");
            alert(translate("Logged Out!"));
        })
        .catch(error => {
            console.error("Logout error:", error);
            alert(translate("Logout error: ") + error.message);
        });
}

const updateHeaderUI = (user) => {
    if (!signInLink || !profilePicImg || !logoutLink) return;
    const defaultPic = (typeof dermai_vars !== 'undefined' && dermai_vars.theme_uri) ? `${dermai_vars.theme_uri}/image.png` : 'image.png';
    if (user) {
        signInLink.style.display = 'none';
        profilePicImg.style.display = 'inline';
        logoutLink.style.display = 'inline';
        profilePicImg.src = user.photoURL || defaultPic;
        profilePicImg.alt = user.displayName || user.email || 'User Profile';
    } else {
        signInLink.style.display = 'inline';
        profilePicImg.style.display = 'none';
        logoutLink.style.display = 'none';
        profilePicImg.src = ""; profilePicImg.alt = "Profile Picture";
    }
};

if (auth) {
    auth.onAuthStateChanged(user => {
        if (user && !user.photoURL) {
            const defaultPic = (typeof dermai_vars !== 'undefined' && dermai_vars.theme_uri) ? `${dermai_vars.theme_uri}/image.png` : 'image.png';
            user.updateProfile({ photoURL: defaultPic })
                .then(() => updateHeaderUI(user))
                .catch(error => {
                    console.error("Error updating profile with default pic:", error);
                    updateHeaderUI(user);
                });
        } else {
            updateHeaderUI(user);
        }
        if (userStatusP) {
            userStatusP.textContent = user ? `${translate("Logged in as: ")}${user.email}` : translate("Not logged in");
        }
    });
}


function showLoginForm() {
    if (registerSection) registerSection.style.display = 'none';
    if (loginSection) loginSection.style.display = 'block';
    if (modalTitle) modalTitle.textContent = translate('Login');
}

function showRegisterForm() {
    if (loginSection) loginSection.style.display = 'none';
    if (registerSection) registerSection.style.display = 'block';
    if (modalTitle) modalTitle.textContent = translate('Register');
}

async function previewPhotoAndDiagnose(event) {
    if (!uploadPreviewDiv || !diagnosisResultSpan || !ageInput || !genderSelect || !skinTypeSelect || !photoInput) return;
    const file = event.target.files[0];
    uploadPreviewDiv.innerHTML = '';
    diagnosisResultSpan.textContent = '';
    if (!file) { uploadPreviewDiv.textContent = translate('No image selected'); return; }
    if (!ageInput.value) { alert(translate("Please enter your age.")); photoInput.value = ''; return; }

    const previewImage = document.createElement('img');
    const fileReader = new FileReader();
    fileReader.onload = async () => {
        previewImage.src = fileReader.result;
        uploadPreviewDiv.appendChild(previewImage);
        const formData = new FormData();
        formData.append('file', file);
        formData.append('age', ageInput.value);
        formData.append('gender', genderSelect.value);
        formData.append('skinType', skinTypeSelect.value);

        const predictionEndpoint = 'YOUR_DEPLOYED_PREDICTION_ENDPOINT_URL'; // <<<<<<< IMPORTANT: REPLACE
        if (predictionEndpoint === 'YOUR_DEPLOYED_PREDICTION_ENDPOINT_URL') {
            console.error('Prediction endpoint not configured.');
            diagnosisResultSpan.textContent = translate("Prediction service not available."); return;
        }
        try {
            diagnosisResultSpan.textContent = translate("Analyzing... Please wait.");
            const response = await fetch(predictionEndpoint, { method: 'POST', body: formData });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}, message: ${await response.text()}`);
            }
            const result = await response.json();
            if (result.prediction && result.confidence) {
                diagnosisResultSpan.textContent = `${translate("Diagnosis: ")}${result.prediction} (${(result.confidence * 100).toFixed(2)}%)`;
            } else if (result.error) {
                diagnosisResultSpan.textContent = `${translate("Error")}: ${result.error}`;
            } else {
                diagnosisResultSpan.textContent = translate("Could not get a diagnosis.");
            }
        } catch (error) {
            console.error("Error during prediction:", error);
            diagnosisResultSpan.textContent = translate("Failed to get diagnosis. Check console for details.");
        }
    };
    fileReader.readAsDataURL(file);
}

function setupSmoothScrolling() {
    document.querySelectorAll('header nav a[href^="#"]').forEach(link => {
        link.addEventListener('click', (event) => {
            const href = link.getAttribute('href');
            if (href === '#' || link.id === 'signInLink' || link.id === 'logoutLink') return;
            const section = document.querySelector(href);
            if (section) {
                event.preventDefault();
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

const siteDiseases = [
    { name: 'Psoriasis', path: 'psoriasis.html' }, { name: 'Acne', path: 'acne.html' },
    { name: 'Eczema', path: 'eczema.html' }, { name: 'Ringworm', path: 'ringworm.html' },
    { name: 'Warts', path: 'warts.html' }
];

function setupSearchFunctionality() {
    if (!searchBarInput || !suggestionsList) return;
    searchBarInput.addEventListener('input', () => {
        const query = searchBarInput.value.toLowerCase();
        suggestionsList.innerHTML = '';
        if (query.length > 0) {
            suggestionsList.style.display = 'block';
            const filtered = siteDiseases.filter(d => translate(d.name).toLowerCase().includes(query) || d.name.toLowerCase().includes(query));
            filtered.forEach(disease => {
                const li = document.createElement('li');
                li.textContent = translate(disease.name);
                li.addEventListener('click', () => {
                    // Use dermai_vars.theme_uri if available (passed from WordPress)
                    if (typeof dermai_vars !== 'undefined' && dermai_vars.theme_uri) {
                        window.location.href = `${dermai_vars.theme_uri}/${disease.path}`;
                    } else {
                         // Fallback for non-WordPress environments or if dermai_vars is not set
                        console.warn("dermai_vars.theme_uri not defined. Using relative path for disease pages.");
                        window.location.href = disease.path; // Assumes disease HTML files are in the same directory
                    }
                });
                suggestionsList.appendChild(li);
            });
        } else { suggestionsList.style.display = 'none'; }
    });
    document.addEventListener('click', e => {
        if (searchBarInput && suggestionsList && !searchBarInput.contains(e.target) && !suggestionsList.contains(e.target)) {
            suggestionsList.style.display = 'none';
        }
    });
}

function initMap() {
    if (typeof google !== 'undefined' && mapDiv) {
        const map = new google.maps.Map(mapDiv, { center: { lat: 30.0444, lng: 31.2357 }, zoom: 12 });
        new google.maps.Marker({ position: { lat: 30.0444, lng: 31.2357 }, map: map, title: translate("Nearest Dermatologist") });
    } else if (mapDiv) {
        mapDiv.textContent = translate("Map could not be loaded. Ensure API key is correct and API is enabled.");
    }
}
window.initMap = initMap;

function translate(key, langOverride) {
    const currentLang = langOverride || (htmlElement ? htmlElement.lang.substring(0,2) : 'en') || 'en';
    return (translations[currentLang] && translations[currentLang][key]) ? translations[currentLang][key] : key;
}

function updateTextContentForLanguage(selectedLang) {
    if (!htmlElement) return;
    const langToUse = (translations[selectedLang.substring(0,2)]) ? selectedLang.substring(0,2) : 'en';

    htmlElement.lang = langToUse;
    document.body.dir = langToUse === 'ar' ? 'rtl' : 'ltr';
    htmlElement.dir = langToUse === 'ar' ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = translate(key, langToUse);
        if ((el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') && el.placeholder) {
            el.placeholder = translation;
        } else if (el.tagName === 'BUTTON' && el.getAttribute('type') === 'submit' && el.closest('form') && el.closest('form').id === 'feedbackForm') {
            // Specifically update the feedback submit button text if not disabled
            if (!el.disabled) {
                 el.textContent = translation;
            }
        }
        else {
            el.textContent = translation;
        }
    });
     if (feedbackSubmitButton && feedbackSubmitButton.disabled) {
        feedbackSubmitButton.textContent = translate("Submitting...", langToUse);
    }


    if (diagnosisResultSpan && diagnosisResultSpan.textContent) {
        let currentText = diagnosisResultSpan.textContent;
        const diagnosisPrefixes = {
            en: "Diagnosis: ", ar: "التشخيص: ", fr: "Diagnostic: ", de: "Diagnose: "
        };
        Object.values(diagnosisPrefixes).forEach(prefix => {
            if (currentText.startsWith(prefix)) {
                currentText = currentText.substring(prefix.length);
            }
        });

        if (!currentText.includes(translate("Analyzing... Please wait.", langToUse)) &&
            !currentText.includes(translate("Prediction service not available.", langToUse)) &&
            !currentText.includes(translate("Failed to get diagnosis.", langToUse))) {
            diagnosisResultSpan.textContent = translate("Diagnosis: ", langToUse) + currentText;
        }
    }
}


function setupEventListeners() {
    if (signInLink) signInLink.addEventListener('click', e => {
        e.preventDefault(); if (signInModal) { signInModal.style.display = 'flex'; showRegisterForm(); }
    });
    if (closeSignInModal) closeSignInModal.addEventListener('click', () => { if (signInModal) signInModal.style.display = 'none'; });
    if (logoutLink) logoutLink.addEventListener('click', e => { e.preventDefault(); logoutUser(); });
    if (registerForm) registerForm.addEventListener('submit', e => { e.preventDefault(); registerUser(); });
    if (loginForm) loginForm.addEventListener('submit', e => { e.preventDefault(); loginUser(); });
    if (googleSignInBtn) googleSignInBtn.addEventListener('click', googleSignIn);
    if (loginLinkInModal) loginLinkInModal.addEventListener('click', e => { e.preventDefault(); showLoginForm(); });
    if (registerLinkInModal) registerLinkInModal.addEventListener('click', e => { e.preventDefault(); showRegisterForm(); });
    if (photoInput) photoInput.addEventListener('change', previewPhotoAndDiagnose);
    if (languageSelect) languageSelect.addEventListener('change', () => {
        const lang = languageSelect.value;
        updateTextContentForLanguage(lang);
        localStorage.setItem('preferredLang', lang);
    });
    if (locationButton) locationButton.addEventListener('click', () => {
        if (locationModal) { locationModal.style.display = 'block'; initMap(); }
    });
    if (closeLocationModal) closeLocationModal.addEventListener('click', () => { if (locationModal) locationModal.style.display = 'none'; });

    // Feedback Form Listener to submit via WordPress AJAX
    if (feedbackFormElement && feedbackSubmitButton) {
        feedbackFormElement.addEventListener('submit', async (e) => {
            e.preventDefault();
            console.log("Feedback form submission initiated via AJAX.");

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            const name = nameInput ? nameInput.value.trim() : '';
            const email = emailInput ? emailInput.value.trim() : '';
            const message = messageInput ? messageInput.value.trim() : '';

            console.log("Retrieved values - Name:", name, "Email:", email, "Message:", message);

            if (!name || !email || !message) {
                console.warn("Validation failed: Not all fields filled.");
                alert(translate("Please fill in all feedback fields."));
                return;
            }
            console.log("Validation passed.");

            // Disable button and show "Submitting..."
            const originalButtonText = feedbackSubmitButton.textContent;
            feedbackSubmitButton.disabled = true;
            feedbackSubmitButton.textContent = translate("Submitting...");


            const formData = new FormData();
            formData.append('action', 'dermai_send_feedback'); // WordPress AJAX action hook
            formData.append('feedback_name', name);
            formData.append('feedback_email', email);
            formData.append('feedback_message', message);
            // You can add a nonce here for security if you generate one in PHP and pass it via dermai_vars
            // formData.append('nonce', dermai_vars.feedback_nonce);

            console.log("FormData prepared for AJAX. Entries:");
            for (let pair of formData.entries()) {
                console.log(pair[0], ":", pair[1]);
            }

            try {
                console.log("Attempting to fetch (WP AJAX)... URL:", dermai_vars.ajax_url);
                const response = await fetch(dermai_vars.ajax_url, { // dermai_vars.ajax_url comes from wp_localize_script
                    method: 'POST',
                    body: formData
                    // No 'Content-Type' header needed for FormData, browser sets it with boundary
                });

                const result = await response.json(); // Expect JSON response from PHP
                console.log("AJAX response received:", result);

                if (result.success) {
                    alert(translate("Thank you for your feedback!"));
                    feedbackFormElement.reset();
                } else {
                    alert(translate("Error submitting feedback. Please try again later.") + (result.data ? ` ${result.data.message || ''}` : ''));
                }
            } catch (error) {
                console.error("Error submitting feedback via AJAX: ", error);
                alert(translate("Error submitting feedback. Please try again later."));
            } finally {
                // Re-enable button and restore original text
                feedbackSubmitButton.disabled = false;
                feedbackSubmitButton.textContent = originalButtonText; // Or re-translate "Submit"
                updateTextContentForLanguage(languageSelect.value); // To ensure button text is correctly translated if language changed during submission
            }
        });
    } else {
        if (!feedbackFormElement) console.error("Feedback form element not found.");
        if (feedbackFormElement && !feedbackSubmitButton) console.error("Feedback form submit button not found.");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initializeDOMElements(); // Initialize DOM elements first
    setupEventListeners();
    setupSmoothScrolling();
    setupSearchFunctionality();

    let determinedLang = localStorage.getItem('preferredLang');

    if (!determinedLang && htmlElement && htmlElement.lang) {
        determinedLang = htmlElement.lang.substring(0, 2);
    }
    determinedLang = determinedLang || 'en';
    if (!translations[determinedLang]) {
        determinedLang = 'en';
    }

    if (languageSelect) {
        languageSelect.value = determinedLang;
    }
    updateTextContentForLanguage(determinedLang); // Initial translation

    if (auth && auth.currentUser) {
        updateHeaderUI(auth.currentUser);
        if (userStatusP) userStatusP.textContent = `${translate("Logged in as: ")}${auth.currentUser.email}`;
    } else if (userStatusP) {
        userStatusP.textContent = translate("Not logged in");
    }
});

// --- END OF script.js ---


